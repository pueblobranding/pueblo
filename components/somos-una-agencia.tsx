import Image from "next/image";

export default function SomosUnaAgencia() {

    return (
        <>
            <section className="h-screen flex items-center bg-white text-verde-opalo-100 px-4 py-24">
                <div className="container mx-auto max-w-6xl">

                    <div className="mb-8 flex flex-col items-center justify-center">
                        <Image
                            src={"/logo.png"}
                            width={100}
                            height={100}
                            alt="logo pueblo"
                        />
                    </div>

                    <div className="text-center text-md md:text-2xl font-bold">
                        <p>SOMOS UNA AGENCIA QUE COMBINA <br /> LO CREATIVO CON LO ESPIRITUAL.</p>
                        <br />
                        <p>EN PUEBLO HACEMOS COMUNICACIÓN CON CONSCIENCIA.
                        <br /> TRANSFORMANDO MARCAS DESDE ADENTRO,
                        <br /> CONECTANDO CON SU ESENCIA Y DÁNDOLE VOZ CON PROPÓSITO.</p>

                    </div>
                </div>
            </section>

            <section className="h-screen flex items-center bg-tigerlily text-white px-4 py-24">
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
                        <p>SOMOS UNA AGENCIA QUE COMBINA <br /> LO CREATIVO CON LO ESPIRITUAL.</p>
                        <br />
                        <p>EN PUEBLO HACEMOS COMUNICACIÓN CON CONSCIENCIA.<br /> TRANSFORMANDO MARCAS DESDE ADENTRO,<br />
                            CONECTANDO CON SU ESENCIA Y DÁNDOLE VOZ CON PROPÓSITO.</p>

                    </div>
                </article>
            </section>
        </>
    )
}
