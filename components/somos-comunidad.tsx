import NosotrasSection4 from "./nosotras-4";

export default function SomosComunidad() {
  return (
    <div
      id="somos-comunidad"
      className="bg-pewter-blue-100 max-h-fit flex flex-col items-center justify-center text-white py-10 gap-6 lg:py-20 lg:gap-20"
    >

      <h2 className="font-dream-avenue text-5xl md:text-6xl lg:text-7xl font-medium tracking-widest text-center mx-2">
        SOMOS COMUNIDAD</h2>

      <p className="text-md md:text-3xl text-balance text-center font-semibold">
        Creemos en el poder colaborativo por eso conformamos una comunidad con los mejores profesionales y especialistas del mercado para abordar todas las áreas específicas que tu empresa necesita.
      </p>

      <NosotrasSection4 />

    </div>
  )
}
// export default function SomosComunidad() {
//   return (
//     <div className="bg-verde-opalo-20 min-h-screen flex items-center justify-center text-white">
//       <div className="max-w-3xl bg-verde-opalo-100 py-4 md:py-20 rounded-xl mx-4 px-2 md:px-12">
//         <div className="text-lg md:text-xl md:text-center space-y-4 max-w-2xl px-6">

//           <h2 className="font-dream-avenue text-2xl md:text-6xl font-medium tracking-widest text-center">SOMOS COMUNIDAD</h2>

//           {/* <p className="font-bold ">
//             A través del coaching estratégico y de la escucha activa con el cliente, planificamos en conjunto los pasos a dar en el camino.
//           </p> */}

//           <p className="text-sm md:text-xl text-balance">
//             Creemos en el poder colaborativo por eso conformamos una comunidad con los mejores profesionales y especialistas del mercado para abordar todas las áreas específicas que tu empresa necesita.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
