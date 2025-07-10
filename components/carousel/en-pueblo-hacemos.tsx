import Image from "next/image";

export default function EnPuebloHacemos
() {

    return (
        <>
            <section className="h-full flex items-center text-verde-opalo-100 bg-pewter-blue-40 px-4 py-24">
                <div className="container mx-auto max-w-6xl">

                    <div className="mb-8 flex flex-col items-center justify-center">
                        <Image
                            src={"/pueblologo-verde.svg"}
                            width={100}
                            height={100}
                            alt="logo pueblo"
                        />
                    </div>

                    <div className="text-center text-md md:text-2xl font-bold text-balance">
                        <p>EN PUEBLO HACEMOS COMUNICACIÓN CON CONSCIENCIA.
                            <br /> TRANSFORMANDO MARCAS DESDE ADENTRO,
                            <br /> CONECTANDO CON SU ESENCIA Y DÁNDOLE VOZ CON PROPÓSITO.</p>
                    </div>
                </div>
            </section>

        </>
    )
}
