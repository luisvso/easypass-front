import Svg, { Circle, G, Path } from "react-native-svg";
const IconClock = (props) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Circle cx={12} cy={12} r={10} stroke="#1C274C" strokeWidth={1.5} />
      <Path
        d="M12 8V12L14.5 14.5"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default IconClock;
