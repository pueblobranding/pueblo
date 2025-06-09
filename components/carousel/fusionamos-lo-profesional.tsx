import Image from "next/image";

export default function FusionamosLoProfesional() {

    return (
        <>
            <section className="h-full flex items-center bg-tigerlily text-white px-4 py-24">
                <article className="container mx-auto max-w-6xl">

                    <div className="mb-8 flex flex-col items-center justify-center">
                        <Image
                            src={"/pueblologo-blanco.svg"}
                            width={100}
                            height={100}
                            alt="logo pueblo"
                        />
                    </div>

                    <div className="text-center text-md md:text-2xl font-bold text-balance">
                        <p>FUSIONAMOS LO PROFESIONAL Y LO ESENCIAL, <br />
                            PARA CONTAR HISTORIAS QUE TOCAN EL CORAZON.</p>
                        <br />
                    </div>
                </article>
            </section>
        </>
    )
}
