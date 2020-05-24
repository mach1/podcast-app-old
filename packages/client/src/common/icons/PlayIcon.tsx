import * as React from 'react'

const PlayIcon: React.FC = (props) => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 80 80"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>Symbols</title>
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="Play">
        <circle
          id="Oval"
          stroke="#FF206E"
          strokeWidth="5"
          cx="40"
          cy="40"
          r="37.5"
        ></circle>
        <polygon
          id="Triangle"
          fill="#FF206E"
          transform="translate(44.500000, 40.500000) rotate(90.000000) translate(-44.500000, -40.500000) "
          points="44.5 28 66 53 23 53"
        ></polygon>
      </g>
    </g>
  </svg>
)

export default PlayIcon
