// Technical-drawing style arm. Joints swing via CSS keyframes (see globals.css); no JS needed.
export default function RobotArm() {
  return (
    <svg className="arm" viewBox="0 0 400 420" role="img" aria-label="Line drawing of a six-axis robotic arm">
      <line x1="20" y1="380" x2="380" y2="380" className="arm-ground" />
      <rect x="140" y="350" width="120" height="30" className="arm-part" />
      <g className="arm-j1">
        <rect x="175" y="300" width="50" height="50" className="arm-part" />
        <circle cx="200" cy="295" r="16" className="arm-joint" />
        <g className="arm-j2" style={{ transformOrigin: "200px 295px" }}>
          <rect x="190" y="150" width="20" height="145" rx="4" className="arm-part" />
          <circle cx="200" cy="150" r="14" className="arm-joint" />
          <g className="arm-j3" style={{ transformOrigin: "200px 150px" }}>
            <rect x="192" y="60" width="16" height="90" rx="4" className="arm-part" />
            <circle cx="200" cy="60" r="10" className="arm-joint" />
            <g className="arm-j4" style={{ transformOrigin: "200px 60px" }}>
              <path d="M200 60 v-26 M184 34 h32 M184 34 v-14 M216 34 v-14" className="arm-part" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
