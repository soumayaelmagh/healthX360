// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
// No need to import a 'Layout' component for Navbar/Footer here
import { 
  getSortedPostsDataCleaned, 
    type ProcessedBlogPostListItem 
} from '../../lib/contentful'; // Adjust path if necessary

// App Router uses server components by default, fetch data directly
async function getAllPostsData(): Promise<ProcessedBlogPostListItem[]> {
  const allPostsData = await getSortedPostsDataCleaned();
  return allPostsData;
}

export default async function BlogIndexPage() {
  const allPostsData = await getAllPostsData();
  
  return (
    // The RootLayout (app/layout.tsx) already provides Navbar, Footer, etc.
    <main >
    <section className="py-12" > {/* Using py-* for vertical padding around the content */}
      <div className="container mx-auto px-4 pt-20" > 
         <h1 className="text-center text-2xl md:text-5xl xl:text-7xl font-semibold mb-5 xl:mb-20">
        <span className="text-secondary">HealthX360</span>{" "}
        <span className="text-primary"> Insight</span>
      </h1>
        {allPostsData.length > 0 ? (
          
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPostsData.map(({ slug, date, title, excerpt, coverImage }) => (
              <li key={slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {coverImage?.url && (
                 
                  <div className="relative w-full h-48">
                    <Image
                      src={coverImage.url}
                      alt={coverImage.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                 <Link href={`/blog/${slug}`} passHref>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                   
                      <span className="text-green-600 hover:text-green-600 hover:underline cursor-pointer">
                        {title}
                      </span>
                  </h2>
                  <small className="text-gray-500 mb-3 block">
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </small>
                  <p className="text-gray-700 text-sm leading-relaxed">{excerpt}</p>
                </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No blog posts yet. Check back soon!</p>
        )}
      </div>
    </section>
    </main>
  );
}

// For SEO metadata in App Router:
export async function generateMetadata() {
  return {
    title: 'HealthX360 Blog',
    description: 'Read the latest articles from HealthX360.',
  };
}