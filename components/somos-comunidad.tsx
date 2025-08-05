import NosotrasSection4 from "./nosotras-4";
import TeamSlide from "./team-slide";

export default function SomosComunidad() {
  return (
    <div
      id="somos-comunidad"
      className="bg-pewter-blue-100 max-h-fit flex flex-col items-center justify-center text-white py-10 gap-6 lg:py-20 px-4"
    >

      <h2 className="font-dream-avenue text-5xl md:text-6xl lg:text-7xl font-medium tracking-widest text-center mx-2">
        SOMOS COMUNIDAD</h2>

      <p className="text-md md:text-2xl text-balance text-center md:mx-20 mb-6">
        Una red de talentos para tu marca.
        Creemos en lo colaborativo. <br/>
        Formamos una comunidad con los mejores especialistas del mercado para cubrir cada área que tu empresa necesita.
      </p>

      <NosotrasSection4 />

      <TeamSlide />

    </div>
  )
}