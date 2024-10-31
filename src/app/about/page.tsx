// src/app/about/page.tsx
"use client";


const AboutUs = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center p-6 flex items-center justify-center"
      style={{ backgroundImage: `url('/aboutus.webp')` }}
    >
      <div className="bg-white/80 p-10 rounded-lg shadow-lg backdrop-blur-md max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">About Kafey </h1>
        
        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            At Kafy Baking, our mission is to bring the joy of baking into every home. We create delicious, high-quality baked goods and aim to inspire our community to bake and share.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li><strong>Quality:</strong> We believe in using the best ingredients for exceptional taste.</li>
            <li><strong>Community:</strong> We’re passionate about connecting people through baking.</li>
            <li><strong>Innovation:</strong> We’re constantly exploring new recipes to bring fresh flavors to our customers.</li>
          </ul>
        </section>

        
      </div>
    </div>
  );
};

export default AboutUs;
