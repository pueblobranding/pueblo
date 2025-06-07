import Image from "next/image";

export default function EncontramosQueHace() {

    return (
        <>
            <section className="h-full flex items-center bg-white text-white px-4 py-24">
                <article className="container mx-auto max-w-6xl">

                    <div className="mb-8 flex flex-col items-center justify-center">
                        <Image
                            src={"/pueblo-logo-transparente.svg"}
                            width={250}
                            height={250}
                            alt="logo pueblo"
                        />
                    </div>

                    <div className="text-center text-md md:text-2xl font-bold">
                    <h1 style={{ fontFamily: 'dream-avenue' }} className="text-white text-3xl md:text-4xl lg:text-6xl text-center mb-16 tracking-wider bg-tigerlily rounded-4xl py-20 md:mx-40">
                        ENCONTRAMOS
                        <br />QUE HACE LATIR
                        <br />A TU MARCA
                    </h1>
                    </div>
                </article>
            </section>
        </>
    )
}
