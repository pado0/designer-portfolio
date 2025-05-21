import Image from 'next/image';

const CASE_STUDIES = [
  {
    title: <>
      How I Reinvented POS UX<br />—and Drove +40% Growth
    </>,
    titleText: "How I Reinvented POS UX—and Drove +40% Growth",
    img: "/asset/case3-thumbnail.png",
    link: "https://stingy-alto-975.notion.site/How-I-Reinvented-POS-UX-and-Drove-40-Growth-1ea21919550a806e9428cebad06f3fcc"
  },
  {
    title: <>
      What is getting a Government<br /> Certificate took just 10 seconds?
    </>,
    titleText: "What is getting a Government Certificate took just 10 seconds?",
    img: "/asset/case1-thumbnail.png",
    link: "https://stingy-alto-975.notion.site/What-is-getting-a-Government-Certificate-took-just-10-seconds-1f121919550a801083eaf7c7dd7c67f0"
  },
  {
    title: <>
      Franchise-Ready Admin:<br /> From MVP to Growth Driver
    </>,
    titleText: "Franchise-Ready Admin: From MVP to Growth Driver",
    img: "/asset/case2-thumbnail.png",
    link: "https://stingy-alto-975.notion.site/Franchise-Ready-Admin-From-MVP-to-Growth-Driver-1ea21919550a80a3884ee52352659d02"
  },
  // {
  //   title: "E-commerce UI",
  //   titleText: "E-commerce UI",
  //   img: "/case4.jpg"
  // },
];

export default function CaseStudySection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-6">
          {CASE_STUDIES.map((cs) => {
            const isFranchise = cs.titleText === "Franchise-Ready Admin: From MVP to Growth Driver";
            const isPOS = cs.titleText === "How I Reinvented POS UX—and Drove +40% Growth";
            const isGov = cs.titleText === "What is getting a Government Certificate took just 10 seconds?";
            let bgStyle = {};
            if (isFranchise) bgStyle = { backgroundColor: 'rgb(69, 93, 254)' };
            if (isPOS || isGov) bgStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };
            return cs.link ? (
              <a
                key={cs.titleText}
                href={cs.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group rounded-[2.5rem] overflow-hidden shadow hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-[#455dfe]"
                style={bgStyle}
              >
                <Image
                  src={cs.img}
                  alt={cs.titleText}
                  width={800}
                  height={600}
                  className="w-full h-[30rem] sm:h-80 lg:h-[28rem] object-cover rounded-[2.5rem] group-hover:brightness-50 transition-all duration-400 select-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0"
                  style={{ userSelect: 'none' }}
                  tabIndex={-1}
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/40 rounded-[2.5rem]">
                  <span className="text-white text-xl lg:text-2xl font-semibold px-4 py-2 text-center w-full break-words">{cs.title}</span>
                </div>
              </a>
            ) : (
              <div key={cs.titleText} className="relative group rounded-[2.5rem] overflow-hidden shadow hover:shadow-lg transition-shadow" style={bgStyle}>
                <Image
                  src={cs.img}
                  alt={cs.titleText}
                  width={800}
                  height={600}
                  className="w-full h-[30rem] sm:h-80 lg:h-[28rem] object-cover rounded-[2.5rem] group-hover:brightness-50 transition-all duration-400 select-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0"
                  style={{ userSelect: 'none' }}
                  tabIndex={-1}
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/40 rounded-[2.5rem]">
                  <span className="text-white text-xl lg:text-2xl font-semibold px-4 py-2 text-center w-full break-words">{cs.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 