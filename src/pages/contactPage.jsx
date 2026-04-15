export default function ContactPage() {
    return (
        <main className="min-h-full bg-primary text-secondary">
            <section className="relative overflow-hidden px-6 py-16 md:px-12 lg:px-20">
                <div className="pointer-events-none absolute -top-16 -right-10 h-52 w-52 rounded-full bg-accent/30 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-8 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
                <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-3 inline-flex rounded-full bg-secondary px-4 py-1 text-xs font-semibold tracking-[0.22em] text-primary">
                            CONTACT US
                        </p>
                        <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                            We're here to help,
                        </h1>
                    </div>
                    <div className="relative">
                        <div className="rounded-[2rem] border border-secondary/15 bg-white/60 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-sm md:p-6">
                            <p className="text-lg font-bold">Customer Support</p>
                            <p className="mt-2 text-base leading-7 text-secondary/75">
                                For inquiries about orders, products, or general support, please reach out to our customer service team.
                            </p>
                            <p className="mt-4 text-sm text-secondary/60">
                                Email:
                                <a href="mailto:support@company.com" className="text-primary hover:underline">
                                    support@company.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}