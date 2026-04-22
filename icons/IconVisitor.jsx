import Svg, { G, Path } from "react-native-svg";
const IconVisitor = (props) => (
  <Svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#1D3A5D"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
        fill="#E2E8F0"
      />
      <Path
        d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
        fill="#E2E8F0"
      />
    </G>
  </Svg>
);
export default IconVisitor;
