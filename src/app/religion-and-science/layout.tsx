import ArticlesFilters from "@/components/articles/filters";

export default function ReligionAndScienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<main className="relative flex flex-col w-full gap-5 items-center">
  <h1 className="relative px-6 md:px-16 xg:px-20 xl:px-24 text-center text-3xl md:text-5xl xl:text-7xl font-semibold mt-24 lg:mt-28">
    <span className="text-primary">Religion</span> and{" "}
    <span className="text-secondary">Science</span>
  </h1>
  <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
    <p className="text-gray-800 text-base leading-relaxed">
    An evidence-based look at how timeless religious ideas align with modern scientific discoveries. This section highlights the depth and nuance of spiritual teachings through the lens of science
    </p>
  </div>
  <ArticlesFilters />
  {children}
</main>

  );
}
