export default function SlideTwo() {

    return (
        <>
            {/* <section className="h-full flex items-center justify-center px-4 py-"> */}
            <section
                className="h-full flex items-center justify-center px-4"
                style={{
                    backgroundImage: "url('/pueblo-bg-tigerlily.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <article className="container mx-auto max-w-6xl">

                <h1 className="text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl text-center mb-16 tracking-wider rounded-4xl py-20 mx-0 md:mx-0 uppercase">
                        Consultoría + comunicación
                        <br/>
                        para quienes quieren destacarse 
                        <br/>
                        sin perder su esencia.

                    </h1>

                </article>
            </section>
        </>
    )
}
