export default function SlideOne() {

    return (
        <>
            {/* <section className="h-full flex items-center justify-center px-4 py-"> */}
            <section
                className="h-full flex items-center justify-center px-4"
                style={{
                    backgroundImage: "url('/PUEBLO_Website.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <article className="container mx-auto max-w-6xl">

                    <h1 className="text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl text-center mb-16 tracking-wider rounded-4xl py-20 mx-10 md:mx-0 uppercase leading-normal">
                        Creamos y transformamos 
                        <br/>
                        marcas auténticas con 
                        <br/>
                        estrategia, propósito y corazón
                    </h1>

                </article>
            </section>
        </>
    )
}
