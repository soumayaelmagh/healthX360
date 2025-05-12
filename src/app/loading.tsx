function Loading() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-black text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold">
        Health
        <span className="text-primary text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
          X360
        </span>
      </h1>
      <div className="w-1/3 max-w-80 h-2 relative bg-black-10 rounded-md">
        <div className="h-full w-1/4 absolute bg-primary loading rounded-md z-20"></div>
      </div>
    </section>
  );
}

export default Loading;
