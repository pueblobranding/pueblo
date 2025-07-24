import InstagramFeed from "./instagram-feed";

export default function Instagram() {
    return (
        <section id="instagram" className="py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-4">Síguenos en Instagram</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Mantente al día con nuestras últimas novedades, eventos y promociones siguiéndonos en Instagram.
                </p>

                {/* Componente de Instagram Feed */}
                <InstagramFeed username="pueblobranding" limit={8} columns={4} showCaption={true} />

                <div className="text-center mt-8">
                    <a
                        href="https://www.instagram.com/pueblobranding/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-colors"
                    >
                        Ver más en Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}