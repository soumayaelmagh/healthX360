// app/blog/[slug]/page.tsx
import { getPostData, getAllPostSlugs, type ProcessedSingleBlogPost,type ContentfulImage, type ProcessedImage } from '../../../lib/contentful'; // Adjust path
import Image from 'next/image';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { notFound } from 'next/navigation'; // For handling 404

// Props for this page component
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Function to fetch data for the single post
// This runs on the server
async function fetchPost(slug: string): Promise<ProcessedSingleBlogPost | null> {
  const postData = await getPostData(slug);
  return postData;
}


// (Optional but Recommended) Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs(); // getAllPostSlugs should return { slug: string }[]
  return slugs;
}

// (Optional but Recommended) Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await fetchPost(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | HealthX360 Blog`,
    description: post.excerpt,
  
  };
}


// The Page Component
export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await fetchPost(params.slug);

  if (!post) {
    notFound(); // Triggers the not-found.tsx page or a default 404
  }
 
 // Separate the first image from the rest for layout purposes
  const firstCoverImage: ProcessedImage | undefined = post.coverImages && post.coverImages.length > 0 ? post.coverImages[0] : undefined;
  const remainingCoverImages: ProcessedImage[] = post.coverImages && post.coverImages.length > 1 ? post.coverImages.slice(1) : [];
  
  const richTextOptions: Options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong className="font-bold">{text}</strong>,
      [MARKS.ITALIC]: text => <em className="italic">{text}</em>,
      // Add more mark renderers (underline, code, etc.)
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-semibold my-2">{children}</h3>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-4 leading-relaxed">{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside my-4 pl-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal list-inside my-4 pl-4">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="my-1">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
      [BLOCKS.HR]: () => <hr className="my-6" />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = node.data.target;
        if (asset?.fields?.file?.contentType.startsWith('image/')) {
          const imageUrl = asset.fields.file.url.startsWith('//') ? `https:${asset.fields.file.url}` : asset.fields.file.url;
          return (
            <div className="my-4 text-center bg-transparent">
              <Image
                src={imageUrl}
                alt={asset.fields.description || asset.fields.title || ''}
                width={400}
                height={200}  
                className="object-cover object-center rounded-md shadow-md inline-block"              />
            </div>
          );
        }
        return null; // Handle other asset types if needed
      },
      // Add renderers for embedded entries, hyperlinks, etc.
      [INLINES.HYPERLINK]: (node, children) => {
        const uri = node.data.uri as string;
        return <a href={uri} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>;
      }
    },
  };
  

  return (
      <section className="py-12"> 
     <div className="bg-transparent py-20">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Removed max-w-3xl for now, apply to content column */}
        
        {/* 1. First Cover Image (Top) */}
        {firstCoverImage?.url && (
          <div className="mb-8  text-center bg-transparent">
            <Image
              src={firstCoverImage.url}
              alt={firstCoverImage.alt}
              width={400} // Can be larger, full width, or a fixed large size
              height={200}
              className="object-cover object-center rounded-md shadow-md inline-block"
              priority={true} 
            />
          </div>
        )}

        {/* 2. Post Header & Excerpt (Below first image) */}
        <header className="mb-8 max-w-3xl mx-auto"> {/* Centered header content */}
          <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3 text-center sm:text-left">
            {post.title}
          </h1>
          <p className="text-base text-gray-500 text-center sm:text-left">
            Published on {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
        </header>
        
        {post.excerpt && (
             <p className="text-s text-gray-600 mb-12 leading-relaxed border-l-4 border-gray-200 pl-4 max-w-3xl mx-auto">
                {post.excerpt}
             </p>
        )}

        {/* 3. Main Content Area (Two Columns on medium screens and up) */}
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12">
          
          {/* Left Column: Rich Text Content */}
          <div className="md:w-2/3 lg:w-3/4 prose prose-lg prose-blue max-w-none rich-text-content order-1 md:order-none"> 
            {/* The `prose` class from Tailwind Typography helps style Rich Text */}
            {post.content && documentToReactComponents(post.content, richTextOptions)}
          </div>

          {/* Right Column (Sidebar): Remaining Cover Images */}
          {remainingCoverImages.length > 0 && (
            <aside className="md:w-1/3 lg:w-1/4 mt-8 md:mt-0 order-2 md:order-none">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">More Images</h3>
              <div className="space-y-4"> {/* Vertical spacing for sidebar images */}
                {remainingCoverImages.map((image, index) => (
                  image.url && (
                    <div key={`sidebar-${index}`} className="overflow-hidden rounded-lg shadow-md" style={{ width: '100%', maxWidth: '300px', height: 'auto', margin: '0 auto' }}> {/* Constrain width for sidebar */}
                      <Image
                        src={image.url}
                        alt={image.alt}
                        width={450}  // Fixed width for sidebar images
                        height={450} // Fixed height
                        objectFit="cover"
                        className="w-full h-auto" // Ensure it's responsive within its 300px constrained parent
                      />
                    </div>
                  )
                ))}
              </div>
            </aside>
          )}
        </div> 
      </article>
    </div>
    </section>
  );
}