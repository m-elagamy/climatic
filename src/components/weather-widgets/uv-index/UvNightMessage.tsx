const UVNightMessage = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="group relative size-12 md:size-14">
        <svg
          className="transform transition-transform duration-500 group-hover:rotate-12"
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="animate-pulse opacity-90">
            <circle
              cx="60"
              cy="60"
              r="35"
              stroke="url(#simplifiedSunGradient)"
              strokeWidth="5"
              fill="none"
            />
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={i}
                x1="60"
                y1="5"
                x2="60"
                y2="15"
                stroke="url(#simplifiedSunRayGradient)"
                strokeWidth="3"
                opacity="0.6"
                style={{
                  transform: `rotate(${i * 60}deg) translate(0px, -38px)`,
                }}
              />
            ))}
          </g>

          <line
            x1="20"
            y1="20"
            x2="100"
            y2="100"
            stroke="red"
            strokeWidth="8"
            strokeLinecap="round"
            className="opacity-90"
          />

          <circle
            cx="60"
            cy="60"
            r="22"
            fill="url(#simplifiedMoonGradient)"
            className="transition-colors duration-300 ease-in-out group-hover:fill-blue-500"
          />
          <circle cx="70" cy="50" r="16" fill="white" opacity="0.2" />

          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="simplifiedSunGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#FFCC80" />
                <stop offset="100%" stopColor="#FFA726" />
              </linearGradient>
              <linearGradient
                id="simplifiedSunRayGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#FFEB3B" />
                <stop offset="100%" stopColor="#FFC107" />
              </linearGradient>
              <linearGradient
                id="simplifiedMoonGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#B0BEC5" />
                <stop offset="100%" stopColor="#90A4AE" />
              </linearGradient>
            </defs>
          </svg>
        </svg>

        <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="size-full rounded-full bg-blue-300 opacity-40 blur-md"></div>
        </div>
      </div>

      <p className="text-sm">
        The UV index is not measured at night since the sun is absent.
      </p>
    </div>
  );
};

export default UVNightMessage;
