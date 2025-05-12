import {
  createClient,
  Entry,
  Asset,
  EntryFields,
  EntrySkeletonType,
  } from 'contentful';
  import type { Document, NodeData } from '@contentful/rich-text-types'; // Import NodeData
  import { BLOCKS } from '@contentful/rich-text-types'; // <--- IMPORT BLOCKS HERE
  // --- TYPE DEFINITIONS ---
  // For the 'file' object within a Contentful Asset's fields
  export interface ContentfulSdkAssetFileDetailsImage {
  width: number;
  height: number;
  }
  export interface ContentfulSdkAssetFileDetails {
  size: number;
  image?: ContentfulSdkAssetFileDetailsImage;
  }
  export interface ContentfulSdkAssetFile {
  url: string;
  details: ContentfulSdkAssetFileDetails;
  fileName: string;
  contentType: string;
  }
  // Custom type for a resolved Contentful Asset (Image)
  export interface ContentfulImage extends Asset {
  fields: {
  title: EntryFields.Text;
  description?: EntryFields.Text;
  file: ContentfulSdkAssetFile;
  };
  }
  // Define the structure of the 'fields' for your blog post from Contentful
  export interface BlogPostFields {
  title: EntryFields.Text | { [locale: string]: EntryFields.Text | undefined };
  slug: EntryFields.Text | { [locale: string]: EntryFields.Text | undefined };
  date: EntryFields.Date | { [locale: string]: EntryFields.Date | undefined }; // Date can also be localized
  excerpt: EntryFields.Text | { [locale: string]: EntryFields.Text | undefined };
  coverImage?: EntryFields.AssetLink[]; // <--- CHANGE: Array of AssetLinks
  content: Document | { [locale: string]: Document | undefined };
  }
  // Full Entry Skeleton for Blog Post
  export interface BlogPostEntrySkeleton extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: BlogPostFields;
  }
  export interface ProcessedImage {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  }
  // Processed type for list items (what your components expect)
  export interface ProcessedBlogPostListItem {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  coverImage?: ProcessedImage; // Single image for list view (e.g., first from array)

  }
  // Processed type for a single blog post
  export interface ProcessedSingleBlogPost  {
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    content: Document;
    coverImages?: ProcessedImage[]; 
  }
  interface ParsedCommonPostData {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  coverImages?: ProcessedImage[]; // <--- THIS IS NOW AN ARRAY OF PROCESSED IMAGES

  }
  // --- CONTENTFUL CLIENT INITIALIZATION ---
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!spaceId || !accessToken) {
  console.error('CRITICAL: Contentful Space ID or Acce ss Token is not defined in environment variables.');
  }
  const client = (spaceId && accessToken) ? createClient({
  space: spaceId!, // Add ! if you are sure they are defined after the check
  accessToken: accessToken!, // Add ! if you are sure they are defined after the check
  // ADD THE LOCALE PROPERTY HERE:
  }) : null;
  const DEFAULT_LOCALE = 'en-US'; // Define your default locale once
  // --- API HELPER FUNCTIONS ---
  /**
  Helper to safely extract a string value from a field that might be
  a string, a localized object, or the problematic { [x: string]: undefined; }
  */
  const getSafeString = (fieldValue: any, defaultLocale: string = 'en-US'): string => {
  if (typeof fieldValue === 'string') {
  return fieldValue;
  }
  if (typeof fieldValue === 'object' && fieldValue !== null) {
  // Handle standard localized object: { "en-US": "value" }
  if (typeof fieldValue[defaultLocale] === 'string') {
  return fieldValue[defaultLocale];
  }
  const keys = Object.keys(fieldValue);
  for (const key of keys) {
  if (typeof fieldValue[key] === 'string') {
  return fieldValue[key];
  }
  }
  }
  return ''; // Fallback for all other cases (undefined, null, unhandled object structures)
  };
  const parseCommonPostData = (sourceFields: BlogPostFields): ParsedCommonPostData => {
  return {
  slug: getSafeString(sourceFields.slug, DEFAULT_LOCALE),
  date: getSafeString(sourceFields.date, DEFAULT_LOCALE),
  title: getSafeString(sourceFields.title, DEFAULT_LOCALE),
  excerpt: getSafeString(sourceFields.excerpt, DEFAULT_LOCALE),
  };
  };
  const parseEntriesForList = (entries: Entry<BlogPostEntrySkeleton>[]): ProcessedBlogPostListItem[] => {
    return entries.map((item) => {
      const itemFields = item.fields;
      const resolvedCoverImageLinks = itemFields.coverImage; // This is EntryFields.AssetLink[] | undefined
  
      let firstProcessedImage: ProcessedImage | undefined = undefined;
  
      if (Array.isArray(resolvedCoverImageLinks) && resolvedCoverImageLinks.length > 0) {
        // Attempt to process the first image in the array
        const firstImageLink = resolvedCoverImageLinks[0];
        // We need to ensure this link is resolved to an Asset (ContentfulImage)
        // The `include` parameter in getEntries is vital here.
        // If `firstImageLink` is just a link, this cast might not reveal fields directly.
        // For simplicity here, assuming it's resolved due to `include`.
        const resolvedFirstImg = firstImageLink as ContentfulImage | undefined; 
  
        if (resolvedFirstImg?.fields?.file && typeof resolvedFirstImg.fields.file.url === 'string') {
          const imageUrl = resolvedFirstImg.fields.file.url;
          const fullImageUrl = imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl;
          firstProcessedImage = {
            url: fullImageUrl,
            alt: getSafeString(resolvedFirstImg.fields.description) || getSafeString(resolvedFirstImg.fields.title) || getSafeString(itemFields.title) || 'Blog post image',
            width: resolvedFirstImg.fields.file.details.image?.width,
            height: resolvedFirstImg.fields.file.details.image?.height,
          };
        }
      }
  
      return {
        slug: getSafeString(itemFields.slug),
        date: getSafeString(itemFields.date),
        title: getSafeString(itemFields.title),
        excerpt: getSafeString(itemFields.excerpt),
        coverImage: firstProcessedImage, // Assign the first processed image (or undefined)
      };
    });
  };


const parseSingleEntry = (entry?: Entry<BlogPostEntrySkeleton>): ProcessedSingleBlogPost | null => {
  if (!entry) return null;
  const entryFields = entry.fields;
  const processedImages: ProcessedImage[] = []; // Use the ProcessedImage type

  // Check if coverImage field exists and is an array
  if (Array.isArray(entryFields.coverImage)) {
    // entryFields.coverImage is EntryFields.AssetLink[]
    // We assume Contentful SDK (with `include` query) resolves these links into full Asset objects.
    // So, we cast each element to ContentfulImage.
    const resolvedCoverImagesArray = entryFields.coverImage as ContentfulImage[]; 

    resolvedCoverImagesArray.forEach(resolvedImg => {
      // Ensure resolvedImg and its nested properties exist before accessing them
      if (resolvedImg?.fields?.file && typeof resolvedImg.fields.file.url === 'string') {
        const imageUrl = resolvedImg.fields.file.url;
        // Your original line had a syntax error in the template literal:
        const fullImageUrl = imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl; // Corrected template literal
        
        processedImages.push({
          url: fullImageUrl,
          alt: getSafeString(resolvedImg.fields.description) || getSafeString(resolvedImg.fields.title) || getSafeString(entryFields.title) || 'Blog post image',
          width: resolvedImg.fields.file.details.image?.width,
          height: resolvedImg.fields.file.details.image?.height,
        });
      }
    });
  }

  return {
    slug: getSafeString(entryFields.slug),
    date: getSafeString(entryFields.date),
    title: getSafeString(entryFields.title),
    excerpt: getSafeString(entryFields.excerpt),
    content: getSafeRichTextDocument(entryFields.content),
    // Assign the array of processed images.
    // If processedImages is empty, coverImages will be an empty array.
    // If you prefer undefined for no images, use: processedImages.length > 0 ? processedImages : undefined
    coverImages: processedImages,
  };
};
/**
Helper to safely get a Rich Text Document.
If the provided field value is not a valid Document, it returns a default empty Document.
*/
const getSafeRichTextDocument = (fieldValue: any): Document => {
// Check if it has the basic structure of a Contentful Rich Text Document
if (
typeof fieldValue === 'object' &&
fieldValue !== null &&
typeof fieldValue.nodeType === 'string' && // Key property of a Document/Node
Array.isArray(fieldValue.content) &&      // Key property of a Document/Node
typeof fieldValue.data === 'object'       // Key property of a Document/Node
) {
return fieldValue as Document;
}
// Return a default, empty, valid Rich Text Document structure
return {
nodeType: BLOCKS.DOCUMENT,
data: {} as NodeData, // Cast to NodeData for type safety
content: [],
};
};
// Fetches sorted blog posts for the index page
// lib/contentful.ts
// ... (imports and other types as before)
export async function getSortedPostsDataCleaned(): Promise<ProcessedBlogPostListItem[]> {
if (!client) {
console.error("LIB: Contentful client not initialized.");
return [];
}
try {
// Define the specific fields you want from the 'fields' object
const fieldsToSelectFromFieldsObject: (keyof Omit<BlogPostFields, 'content'>)[] = [
  'title', 'slug', 'date', 'excerpt', 'coverImage'
];
// Construct the 'fields' part of the select query
const fieldSelectPaths = fieldsToSelectFromFieldsObject.map(f => `fields.${f}`);
const sysSelectPaths = ['sys.id']; // Add 'sys.contentType.sys.id' if your parsing needs it
const selectQueryString = [...fieldSelectPaths, ...sysSelectPaths].join(',');
const response = await client.getEntries<BlogPostEntrySkeleton>({
  content_type: 'blogPost',
  order: ['-fields.date'] as any, // Kept 'as any' for now, assuming string[] was still problematic
  include: 1,                   // To resolve linked assets like coverImage (1 level)
  select: selectQueryString as any,    // Pass the correctly constructed string
  locale: DEFAULT_LOCALE,       // Use the defined default locale
});
if (response.items?.length === 0) {
}
const parsedData = parseEntriesForList(response.items);
if (response.items?.length > 0 && parsedData.length === 0) {
}
return parsedData;
} catch (error) {
  return [];
  }
  }
  // Fetches all post slugs for static generation
  export async function getAllPostSlugs(): Promise<Array<{ slug: string }>> {
  if (!client) {
  console.error("Contentful client not initialized.");
  return []; }
  try {
  const response = await client.getEntries<BlogPostEntrySkeleton>({
  content_type: 'blogPost',
  select: 'fields.slug' as any,
  locale: DEFAULT_LOCALE,
  });
  console.log("RAW SLUGS RESPONSE:", JSON.stringify(response.items, null, 2));
  return response.items.map((post) => ({
  // Apply getSafeString here too if post.fields.slug could be problematic
  slug: getSafeString(post.fields.slug),
  }));
  } catch (error) { /* ... */ return []; }
  }
  // Fetches data for a single post by slug
  export async function getPostData(slug: string): Promise<ProcessedSingleBlogPost | null> {
  if (!client) {
  console.error("Contentful client not initialized.");
  return null; }
  try {
  const queryOptions = {
  content_type: 'blogPost',
  'fields.slug[equals]': slug,
  limit: 1,
  include: 2 as const,
  locale: DEFAULT_LOCALE,
  };
  const response = await client.getEntries<BlogPostEntrySkeleton>(queryOptions);
  if (response.items && response.items.length > 0) {
    console.log(`LIB: Raw item for slug "${slug}":`, JSON.stringify(response.items[0], null, 2));
    console.log(`LIB: Raw item.fields.coverImage for slug "${slug}":`, JSON.stringify(response.items[0].fields.coverImage, null, 2));
  
  }  
    return parseSingleEntry(response.items[0]);
  } catch (error) {
    console.error("Error fetching post data for slug ${slug} from Contentful:", error);
    return null;
    }
    }