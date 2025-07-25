export default function EncontramosQueHace() {

    return (
        <>
            {/* <section className="h-full flex items-center justify-center px-4 py-"> */}
            <section
                className="h-full flex items-center justify-center px-4 py-"
                style={{
                    backgroundImage: "url('/pueblo-bg-pewter-blue.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <article className="container mx-auto max-w-6xl">

                    {/* <div className="text-center text-md md:text-2xl font-bold"> */}
                    <h1  className="text-white text-3xl md:text-4xl lg:text-5xl text-center mb-16 tracking-wider rounded-4xl py-20 md:mx-40">
                        ENCONTRAMOS
                        <br />QUÉ HACE LATIR
                        <br />A TU MARCA
                    </h1>
                    {/* </div> */}
                </article>
            </section>
        </>
    )
}
