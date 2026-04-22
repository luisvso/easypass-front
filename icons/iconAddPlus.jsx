import Svg, { G, Path } from "react-native-svg";
const IconAddPlus = (props) => (
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
      <G id="Edit / Add_Plus">
        <Path
          id="Vector"
          d="M6 12H12M12 12H18M12 12V18M12 12V6"
          stroke="#1D3A5D"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export default IconAddPlus;
