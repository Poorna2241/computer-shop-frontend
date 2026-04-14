import { Link, Route, Routes } from "react-router-dom";
import Header from "../components/header.jsx";
import ProductPage from "./productPage.jsx";
import ProductOverview from "./productOverview.jsx";
import Cart from "./cart.jsx";
import CheckoutPage from "./checkOut.jsx";
import OrdersPage from "./ordersPage.jsx";
import AboutPage from "./aboutpage.jsx";

function HomeLanding() {
    const featureItems = [
        {
            title: "Certified Components",
            description: "Every GPU, SSD, and motherboard is tested and sourced from trusted brands."
        },
        {
            title: "Build Assistance",
            description: "Need help choosing parts? Get compatibility guidance before you order."
        },
        {
            title: "Secure Checkout",
            description: "Quick and protected payments with instant order confirmation."
        }
    ];

    const categoryItems = [
        { name: "Gaming Laptops", tag: "High FPS" },
        { name: "Graphics Cards", tag: "RTX / RX" },
        { name: "PC Components", tag: "Custom Builds" },
        { name: "Accessories", tag: "Keyboards & Mice" }
    ];

    return (
        <main className="w-full h-full overflow-y-auto bg-primary text-secondary">
            <section className="relative overflow-hidden px-6 py-16 md:px-12 lg:px-20">
                <div className="pointer-events-none absolute -top-16 -right-10 h-52 w-52 rounded-full bg-accent/30 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-8 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />

                <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 inline-flex rounded-full bg-secondary px-4 py-1 text-xs font-semibold tracking-[0.22em] text-primary">
                            TECH WEEK DEALS
                        </p>
                        <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                            Build your setup,
                            <span className="block text-gold">power your next win.</span>
                        </h1>
                        <p className="mt-5 max-w-xl text-base leading-7 text-secondary/75 md:text-lg">
                            From gaming laptops and graphics cards to storage, cooling, and accessories,
                            find everything you need to upgrade your workstation or battle station.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/products"
                                className="rounded-full bg-secondary px-6 py-3 text-sm font-bold tracking-wide text-primary transition hover:opacity-90"
                            >
                                Shop Now
                            </Link>
                            <Link
                                to="/about"
                                className="rounded-full border-2 border-secondary px-6 py-3 text-sm font-bold tracking-wide text-secondary transition hover:bg-secondary hover:text-primary"
                            >
                                Why Choose Us
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-[2rem] border border-secondary/15 bg-white/60 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-bold">Top Categories</h2>
                                <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-secondary">
                                    UP TO 25% OFF
                                </span>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {categoryItems.map((item) => (
                                    <div
                                        key={item.name}
                                        className="rounded-2xl border border-secondary/10 bg-primary p-4 transition hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <p className="text-sm font-semibold tracking-wide text-secondary/60">{item.tag}</p>
                                        <p className="mt-1 text-lg font-bold">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 pb-8 md:px-12 lg:px-20">
                <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
                    {featureItems.map((feature) => (
                        <article
                            key={feature.title}
                            className="rounded-3xl border border-secondary/10 bg-white/70 p-6 shadow-sm transition hover:shadow-md"
                        >
                            <h3 className="text-lg font-extrabold">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-secondary/70">{feature.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="px-6 pb-14 md:px-12 lg:px-20">
                <div className="mx-auto max-w-6xl rounded-3xl bg-secondary px-7 py-8 text-primary md:flex md:items-center md:justify-between md:px-10">
                    <div>
                        <h2 className="text-2xl font-black md:text-3xl">Ready to upgrade your rig?</h2>
                        <p className="mt-2 text-sm text-primary/80 md:text-base">
                            Explore the latest computer hardware and complete your order in minutes.
                        </p>
                    </div>
                    <Link
                        to="/products"
                        className="mt-5 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-black tracking-wide text-secondary transition hover:opacity-90 md:mt-0"
                    >
                        Browse Products
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default function HomePage(){
    return(
    <div className="w-full h-full">
        <Header/>

    <div className="w-full h-[calc(100%-100px)] bg-primary">
        <Routes path="/*">
            <Route path="/" element={<HomeLanding />}></Route>
            <Route path="/products" element={<ProductPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<h1>Contact Page</h1>}></Route>
            <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
            <Route path="/overview/:productID" element={<ProductOverview />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="/orders" element={<OrdersPage />}></Route>
            
        </Routes>

       
    </div>
    </div>);
}