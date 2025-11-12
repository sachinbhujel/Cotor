import React from "react";

const Help = () => {
    return (
        <div className="font-sans bg-white text-gray-800 min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#093b72] text-white py-16 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Help & Support
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-blue-100">
                    Get help using{" "}
                    <span className="font-semibold text-white">Cotor</span>.
                    Learn how to edit images, change text, and make your visuals
                    stand out.
                </p>
            </section>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 py-14 space-y-16">
                {/* Getting Started */}
                <section>
                    <h2 className="text-3xl font-semibold text-[#093b72] mb-6">
                        Getting Started
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                1️⃣ Upload or Add Image
                            </h3>
                            <p className="text-gray-600">
                                Click <b>Upload Image</b> {" "}
                                your file. Supports JPG, PNG.
                            </p>
                        </div>
                        <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                2️⃣ Add or Edit Text
                            </h3>
                            <p className="text-gray-600">
                                Click <b>Add Text</b> to
                                modify font, color, and size instantly.
                            </p>
                        </div>
                        <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                3️⃣ Move or Resize Text
                            </h3>
                            <p className="text-gray-600">
                                Drag your text anywhere or adjust its size
                                easily using the corner handles.
                            </p>
                        </div>
                        <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                4️⃣ Save or Download
                            </h3>
                            <p className="text-gray-600">
                                Save your project progress or download your
                                final image instantly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section>
                    <h2 className="text-3xl font-semibold text-[#093b72] mb-6 text-center">
                        Features You’ll Love
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Edit Text in Image",
                                desc: "Change or replace words in images while keeping the same font style.",
                            },
                            {
                                title: "Neon & Outline Effects",
                                desc: "Add stunning visual effects to make your text pop with style.",
                            },
                            {
                                title: "Custom Fonts & Colors",
                                desc: "Use free fonts, upload your own, and pick any color or gradient.",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#093b72] text-white rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-blue-50">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tips Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-[#093b72] mb-6">
                        Tips & Tricks
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            Use zoom for more precise text placement on images.
                        </li>
                        <li>
                            Combine outline + neon effects for eye-catching
                            visuals.
                        </li>
                        <li>
                            Use bold fonts and contrast colors for marketing
                            visuals.
                        </li>
                    </ul>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-semibold text-[#093b72] mb-6 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <p className="font-medium text-gray-900">
                                Q: Is it free?
                            </p>
                            <p>A: Yes, ofcourse is it.</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">
                                Q: Can I use custom fonts?
                            </p>
                            <p>
                                A: Currently not! We are working on this
                                feature.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section className="bg-blue-50 border border-blue-100 p-8 rounded-2xl text-center shadow-sm">
                    <h2 className="text-2xl font-semibold text-[#093b72] mb-2">
                        Need More Help?
                    </h2>
                    <p className="text-gray-700">
                        Reach us at{" "}
                        <a
                            href="mailto:support@cotor.app"
                            className="text-[#093b72] font-medium hover:underline"
                        >
                            sachinbhujel.np@gmail.com
                        </a>{" "}
                        we will contact you within 12 hours.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Help;
