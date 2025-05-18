
const About = () => {
    return (
        <div className="bg-gradient-to-br from-rose-50 to-pink-100 min-h-screen px-6 py-12">
            {/* Header */}
            <h1 className="text-5xl font-extrabold text-center text-rose-800 mb-16 font-serif tracking-wide">
                About <span className="text-pink-700">Our Mithai Bakery</span>
            </h1>

            {/* Mission Section */}
            <section className="mb-16 border-l-4 border-pink-500 pl-6 animate-fade-in">
                <h2 className="text-3xl font-semibold text-rose-700 mb-4">🎯 Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    At <span className="font-bold text-rose-900">Sweet Harmony</span>, we blend age-old traditions with modern tastes to bring you the finest mithai crafted from the purest ingredients.
                    Every piece is a celebration of joy, crafted with love and a sprinkle of nostalgia.
                </p>
            </section>

            {/* Achievements Section */}
            <section className="mb-16 border-l-4 border-yellow-500 pl-6 animate-fade-in">
                <h2 className="text-3xl font-semibold text-yellow-700 mb-4">🏆 Achievements</h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    With a legacy of over <span className="font-bold text-yellow-800">25 years</span>, we are proud recipients of numerous awards recognizing our excellence in taste, hygiene, and customer satisfaction.
                </p>
                <div className="flex justify-center">
                    <img
                        src="https://i.pinimg.com/736x/75/d4/7f/75d47fa721d311b616db03ecb6ce4118.jpg"
                        alt="Award Ceremony"
                        className="rounded-xl shadow-2xl w-80 h-80 object-cover border-4 border-yellow-300 hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </section>

            {/* Certificates Section */}
            <section className="animate-fade-in">
                <h2 className="text-3xl font-semibold text-green-700 mb-6">📜 Our Certifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        {
                            src: "https://i.pinimg.com/736x/6d/37/f6/6d37f61e459a6a98cda08b2e908933c3.jpg",
                            alt: "Food Safety Certificate"
                        },
                        {
                            src: "https://i.pinimg.com/736x/6f/d6/0a/6fd60a857a9ff0672817df80511cc8fa.jpg",
                            alt: "Hygiene Certificate"
                        },
                        {
                            src: "https://i.pinimg.com/736x/6d/a4/c4/6da4c4ba89d803effc90c648aa52ddd5.jpg",
                            alt: "Quality Assurance"
                        }
                    ].map((cert, idx) => (
                        <div key={idx} className="transform transition-transform hover:scale-105 hover:-rotate-1 duration-300">
                            <img
                                src={cert.src}
                                alt={cert.alt}
                                className="rounded-xl shadow-lg border-4 border-white hover:border-green-400"
                            />
                            <p className="text-center text-sm text-gray-600 mt-2">{cert.alt}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
