const CloudLoading = ({
  smSize,
  xsSize,
}: {
  smSize?: boolean;
  xsSize?: boolean;
}) => {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <h2 className="sr-only">Loading...</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${smSize ? "size-10" : "size-14"} ${xsSize ? "size-8" : ""} animate-pulse text-blue-500`}
        viewBox="0 0 64 64"
      >
        <g fill="currentColor">
          <path d="M16 32c-8 0-12-6-12-12 0-6 4-12 12-12 1 0 2 .1 3 .2 2-5 6-8 10-8 5 0 9 4 9 9s-4 9-9 9c-2 0-3 0-4-1-4 0-8 2-10 5-2 2-2 5-2 8s2 6 6 6h36c4 0 6-2 6-6s-2-6-6-6h-1c0-1-1-3-2-3s-2 0-3 0c-1 0-2 0-3-1-1 0-2-1-3-2s-2-2-2-3c0-3 2-5 5-5 5 0 9 4 9 9 0 6-4 10-10 10H16z" />
        </g>
      </svg>
      <p className="text-xs">
        Loading Weather Data<span className="animate-pulse">...</span>
      </p>
    </section>
  );
};
export default CloudLoading;
