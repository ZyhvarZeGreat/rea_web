// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

type Props = {
  orientation?: string
  className?: string
}
const Slider = ({ className, orientation }: Props) => {

  return (
    <RangeSlider orientation={orientation} className={className} />
  );
};
export default Slider;