export default function AboutPage() {
    return (
        <main className="min-h-full bg-primary text-secondary">
            <section className="relative overflow-hidden px-6 py-16 md:px-12 lg:px-20">
                <div className="pointer-events-none absolute -top-16 -right-10 h-52 w-52 rounded-full bg-accent/30 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-8 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />

                <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-3 inline-flex rounded-full bg-secondary px-4 py-1 text-xs font-semibold tracking-[0.22em] text-primary">
                            ABOUT US
                        </p>
                        <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                            Built for modern setups,
                            <span className="block text-gold">backed by real expertise.</span>
                        </h1>
                        <p className="mt-5 max-w-xl text-base leading-7 text-secondary/75 md:text-lg">
                            We help gamers, creators, and professionals choose reliable hardware,
                            get compatible parts, and finish every build with confidence.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="rounded-[2rem] border border-secondary/15 bg-white/60 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-sm md:p-6">
                            <img
                                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
                                alt="Computer shop"
                                className="h-[340px] w-full rounded-[1.5rem] object-cover"
                            />
                            <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-2xl border border-secondary/10 bg-primary p-4">
                                    <p className="text-xs font-semibold tracking-[0.2em] text-secondary/60">TRUSTED</p>
                                    <p className="mt-1 text-lg font-bold">Quality parts</p>
                                </div>
                                <div className="rounded-2xl border border-secondary/10 bg-primary p-4">
                                    <p className="text-xs font-semibold tracking-[0.2em] text-secondary/60">FAST</p>
                                    <p className="mt-1 text-lg font-bold">Simple checkout</p>
                                </div>
                                <div className="rounded-2xl border border-secondary/10 bg-primary p-4">
                                    <p className="text-xs font-semibold tracking-[0.2em] text-secondary/60">SUPPORT</p>
                                    <p className="mt-1 text-lg font-bold">Build guidance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 pb-8 md:px-12 lg:px-20">
                <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Who We Are",
                            description:
                                "A focused hardware store for people who want dependable components, honest recommendations, and a smoother upgrade path."
                        },
                        {
                            title: "Our Mission",
                            description:
                                "To make upgrading a PC feel clear and confident with reliable products, compatibility help, and responsive service."
                        },
                        {
                            title: "What We Value",
                            description:
                                "Performance, trust, and a clean buying experience from browsing to checkout."
                        }
                    ].map((item) => (
                        <article
                            key={item.title}
                            className="rounded-3xl border border-secondary/10 bg-white/70 p-6 shadow-sm transition hover:shadow-md"
                        >
                            <h2 className="text-lg font-extrabold">{item.title}</h2>
                            <p className="mt-2 text-sm leading-6 text-secondary/70">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="px-6 pb-12 md:px-12 lg:px-20">
                <div className="mx-auto max-w-6xl rounded-3xl border border-secondary/10 bg-secondary px-7 py-10 text-primary md:px-10">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-black md:text-3xl">What We Offer</h2>
                            <p className="mt-2 text-sm text-primary/80 md:text-base">
                                Everything from full systems to the parts that keep them running.
                            </p>
                        </div>
                        <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-secondary">
                            BUILT FOR EVERY SETUP
                        </span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Laptops & Desktop Computers",
                            "Computer Components (CPU, RAM, SSD)",
                            "Gaming Accessories",
                            "Custom PC Building",
                            "Repair & Maintenance",
                            "Networking & Cables"
                        ].map((item) => (
                            <div key={item} className="rounded-2xl bg-primary p-5 text-secondary transition hover:-translate-y-1 hover:shadow-lg">
                                <p className="font-semibold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 pb-14 md:px-12 lg:px-20">
                <div className="mx-auto max-w-6xl rounded-3xl border border-secondary/10 bg-white/70 p-7 shadow-sm md:p-10">
                    <h2 className="text-2xl font-black md:text-3xl">Why Choose Us</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {[
                            "High-quality genuine products",
                            "Affordable pricing",
                            "Expert technical support",
                            "Fast and reliable service"
                        ].map((item) => (
                            <div key={item} className="rounded-2xl border border-secondary/10 bg-primary p-5 text-secondary">
                                <span className="mr-2 text-gold">●</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );

}