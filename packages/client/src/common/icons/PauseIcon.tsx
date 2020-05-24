import * as React from 'react'

const PauseIcon: React.FC = (props) => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 80 80"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title> </title>
    <g id="-" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Pause">
        <circle
          id="Oval"
          stroke="#FF206E"
          strokeWidth="5"
          cx="40"
          cy="40"
          r="37.5"
        ></circle>
        <rect
          id="Rectangle"
          fill="#FF206E"
          x="46"
          y="19"
          width="9"
          height="43"
        ></rect>
        <rect
          id="Rectangle-Copy"
          fill="#FF206E"
          x="25"
          y="19"
          width="9"
          height="43"
        ></rect>
      </g>
    </g>
  </svg>
)

export default PauseIcon
