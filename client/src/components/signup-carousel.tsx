import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./carousel/embla-carousel";
const SignupCarousel = () => {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const OPTIONS: EmblaOptionsType = { containScroll: false };

  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default SignupCarousel;
