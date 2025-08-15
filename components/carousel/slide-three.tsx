export default function SlideThree() {

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
                    <h1 className="text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl text-center mb-16 tracking-wider rounded-4xl py-20 mx-10 md:mx-0 uppercase leading-normal">
                        Encontramos 
                        <br/>
                        qué hace latir a tu marca, 
                        <br/>
                        proyecto ó empresa
                    </h1>
                    {/* </div> */}
                </article>
            </section>
        </>
    )
}
