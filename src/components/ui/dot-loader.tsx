const DotLoader = () => {
  return (
    <section className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 space-x-1 *:size-2 *:animate-bounce *:rounded-full *:bg-blue-500">
      <h2 className="sr-only">Loading...</h2>
      <div></div>
      <div className="delay-100"></div>
      <div className="delay-200"></div>
    </section>
  );
};
export default DotLoader;
