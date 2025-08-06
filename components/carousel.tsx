import SlideOne from "./carousel/slide-one"
import SlideTwo from "./carousel/slide-two"
import SimpleCarousel from "./carousel/simple-carousel"
import SlideThree from "./carousel/slide-three"

export default function Carousel() {
  const componentes = [
    <SlideOne key="one" />,
    <SlideTwo key="two" />,
    <SlideThree key="three" />
  ]

  return (
    <div className="pt-16 md:pt-20">
      <SimpleCarousel components={componentes} autoRotateInterval={4000} />
    </div>
  )
}
