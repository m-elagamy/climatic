import React from "react";

const UVNightMessage = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="group relative flex h-16 w-16 items-center justify-center">
        <svg
          className="transform transition-transform duration-1000 group-hover:rotate-12"
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="animate-pulse opacity-80">
            <circle
              cx="60"
              cy="60"
              r="35"
              stroke="url(#sunGradient)"
              strokeWidth="5"
              fill="none"
            />

            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="60"
                y1="5"
                x2="60"
                y2="15"
                stroke="url(#sunRayGradient)"
                strokeWidth="2"
                opacity="0.5"
                style={{
                  transform: `rotate(${i * 45}deg) translate(0px, -40px)`,
                }}
              />
            ))}
          </g>

          <line
            x1="25"
            y1="25"
            x2="95"
            y2="95"
            stroke="red"
            strokeWidth="6"
            strokeLinecap="round"
            className="opacity-90"
          />

          <circle
            cx="60"
            cy="60"
            r="20"
            fill="url(#moonGradient)"
            className="transition-colors duration-500 ease-in-out group-hover:fill-blue-500"
          />
          <circle cx="70" cy="50" r="18" fill="white" opacity="0.15" />
        </svg>

        <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-full w-full rounded-full bg-blue-400 opacity-50 blur-lg"></div>
        </div>
      </div>

      <p>The UV index is not measured at night since the sun is absent.</p>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="sunGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFA726" />
            <stop offset="100%" stopColor="#FB8C00" />
          </linearGradient>
          <linearGradient id="sunRayGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FFEB3B" />
          </linearGradient>

          <linearGradient id="moonGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9FA8DA" />
            <stop offset="100%" stopColor="#7986CB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default UVNightMessage;
