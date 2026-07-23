import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Thank you! Your message has been sent successfully.");
            setFormData({
                name: "",
                email: "",
                subject: "General Inquiry",
                message: ""
            });
        }, 1000);
    };

    return (
        <main className="min-h-full bg-primary text-secondary">
            {/* Header / Hero Section */}
            <section className="relative overflow-hidden px-6 py-14 md:px-12 lg:px-20">
                <div className="pointer-events-none absolute -top-16 -right-10 h-52 w-52 rounded-full bg-accent/30 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-8 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-6xl text-center">
                    <p className="mb-3 inline-flex rounded-full bg-secondary px-4 py-1 text-xs font-semibold tracking-[0.22em] text-primary">
                        GET IN TOUCH
                    </p>
                    <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                        We'd Love to <span className="text-gold">Hear From You</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-secondary/75 md:text-lg">
                        Have questions about PC parts, custom build advice, order status, or technical support? Reach out to our team anytime.
                    </p>
                </div>
            </section>

            {/* Quick Contact Info Cards */}
            <section className="px-6 pb-12 md:px-12 lg:px-20">
                <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border border-secondary/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary font-bold text-xl">
                            📍
                        </div>
                        <h3 className="text-lg font-bold">Visit Store</h3>
                        <p className="mt-2 text-sm text-secondary/75 leading-relaxed">
                            123 Tech Avenue, Silicon Square<br />Suite 400, NY 10001
                        </p>
                    </div>

                    <div className="rounded-3xl border border-secondary/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary font-bold text-xl">
                            📞
                        </div>
                        <h3 className="text-lg font-bold">Call Us</h3>
                        <p className="mt-2 text-sm text-secondary/75 leading-relaxed">
                            +1 (800) 555-TECH<br />Mon - Sat: 9:00 AM - 8:00 PM
                        </p>
                    </div>

                    <div className="rounded-3xl border border-secondary/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary font-bold text-xl">
                            ✉️
                        </div>
                        <h3 className="text-lg font-bold">Email Support</h3>
                        <p className="mt-2 text-sm text-secondary/75 leading-relaxed">
                            <a href="mailto:support@computershop.com" className="hover:underline font-medium text-secondary">
                                support@computershop.com
                            </a><br />
                            24/7 Response Time
                        </p>
                    </div>

                    <div className="rounded-3xl border border-secondary/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary font-bold text-xl">
                            💬
                        </div>
                        <h3 className="text-lg font-bold">Live Consultation</h3>
                        <p className="mt-2 text-sm text-secondary/75 leading-relaxed">
                            Need build compatibility help?<br />Talk directly with tech experts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Form & Working Hours Section */}
            <section className="px-6 pb-16 md:px-12 lg:px-20">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-7 rounded-[2rem] border border-secondary/15 bg-white/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-10">
                        <h2 className="text-2xl font-black md:text-3xl">Send Us a Message</h2>
                        <p className="mt-2 text-sm text-secondary/70">
                            Fill out the form below and our team will get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-secondary/70 mb-2">
                                    Your Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full rounded-2xl border border-secondary/20 bg-primary px-4 py-3 text-sm text-secondary outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-secondary/70 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full rounded-2xl border border-secondary/20 bg-primary px-4 py-3 text-sm text-secondary outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-secondary/70 mb-2">
                                    Subject
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-secondary/20 bg-primary px-4 py-3 text-sm text-secondary outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary"
                                >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Order Status">Order Status & Shipping</option>
                                    <option value="PC Build Help">PC Build Compatibility Advice</option>
                                    <option value="Warranty & Returns">Warranty & Repair Services</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-secondary/70 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help you today?"
                                    className="w-full rounded-2xl border border-secondary/20 bg-primary px-4 py-3 text-sm text-secondary outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-full bg-secondary py-3.5 text-sm font-bold tracking-wider text-primary transition hover:opacity-90 disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    Store Info & Operating Hours
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                        <div className="rounded-[2rem] bg-secondary p-7 text-primary md:p-8">
                            <h3 className="text-xl font-black md:text-2xl">Operating Hours</h3>
                            <p className="mt-2 text-sm text-primary/80">
                                Stop by our physical store or chat with our live customer support during business hours.
                            </p>

                            <div className="mt-6 space-y-3 text-sm border-t border-primary/20 pt-6">
                                <div className="flex justify-between font-semibold">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between font-semibold">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between font-semibold">
                                    <span>Sunday</span>
                                    <span className="text-gold font-bold">Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-secondary/10 bg-white/70 p-7 shadow-sm md:p-8">
                            <h3 className="text-lg font-bold">Need Immediate Help?</h3>
                            <p className="mt-2 text-sm leading-6 text-secondary/75">
                                Check our FAQs or track your ongoing orders directly from your account page for instant updates.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-secondary">
                                    ✓ Instant Tracking
                                </span>
                                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-secondary">
                                    ✓ Technical Help
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
