import ArticlesFilters from "@/components/articles/filters";

export default function PodcastLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex flex-col w-full gap-5 items-center">
  <h1 className="relative px-6 md:px-16 xg:px-20 xl:px-24 text-center text-3xl md:text-5xl xl:text-7xl font-semibold mt-24 lg:mt-28">
        <span className="text-secondary">Deep</span>{" "}
        <span className="text-primary">Dive</span>
      </h1>
      <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
    <p className="text-gray-800 text-base leading-relaxed">
      A personal journey into complex ideas — from physiology to ancient history, astronomy, and more. Each exploration is backed by peer-reviewed research and aims to simplify sophisticated topics for curious minds.
    </p>
  </div>
      {/* <ArticlesFilters /> */}
      {children}
    </main>
  );
}
