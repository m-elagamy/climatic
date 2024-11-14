const ScrollBarProgress = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div
      className="absolute -left-full bottom-0 h-[3px] w-full rounded-sm bg-gradient-to-r from-slate-200/30 to-slate-400/50 transition-transform duration-500 ease-out"
      style={{
        transform: `translate3d(${scrollProgress * 100}%,0,0)`,
      }}
    />
  );
};
export default ScrollBarProgress;
