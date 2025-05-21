const CASE_STUDIES = [
  { title: "Brand Redesign", img: "/asset/case1-thumbnail.png" },
  { title: "Mobile App UX", img: "/asset/case2-thumbnail.png" },
  { title: "Web Dashboard", img: "/asset/case3-thumbnail.png" },
  { title: "E-commerce UI", img: "/case4.jpg" },
];

export default function CaseStudySection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.title} className="relative group rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img
                src={cs.img}
                alt={cs.title}
                className="w-full h-[30rem] sm:h-80 lg:h-[28rem] object-cover group-hover:brightness-50 transition-all duration-400"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/40">
                <span className="text-white text-xl lg:text-2xl font-semibold">{cs.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 