import React from "react";
import Image from "next/image";

export default function AboutPage() {
  const profiles = [
    {
      img: "/asset/about1.png",
      title: "Keep Calm and Bring It On",
      desc: (
        <>
          I like solving tough problems without losing my cool. Curiosity keeps me moving—and I love seeing things through, start to finish.<br />
          <br />
          Feel free to contact me: <a href="mailto:fullpomos@gmail.com" className="underline text-[#455dfe]">fullpomos@gmail.com</a>
        </>
      )
    },
    {
      img: "/asset/about2.png",
      title: "Team Player? I Made a Whole Band",
      desc: (
        <>

          <p className="aboutme-section-desc">
            I formed an office rock band from scratch—recruited devs, jammed at work, and performed four times for 2,000+ employees. That&apos;s how much I love cross-functional collaboration.
          </p>
        </>
      )
    },
    {
      img: "/asset/about3.png",
      title: "When in Doubt, Dive Deep",
      desc: (
        <>
          <p className="aboutme-section-desc">
            When I need a reset, I freedive. Holding my breath underwater is my version of meditation—it clears my head and recharges my creativity.
          </p>
        </>
      )
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-16">
        {profiles.map((profile) => (
          <div key={profile.img} className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-4/5 flex items-center justify-center">
              <div className="relative w-full h-80 md:h-[28rem] overflow-hidden rounded-lg shadow">
                <Image
                  src={profile.img}
                  alt={profile.title ? profile.title + ' 이미지' : 'About 이미지'}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[2.5rem]"
                  width={448}
                  height={448}
                  style={{objectFit: 'cover'}}
                  priority
                />
              </div>
            </div>
            {/* 우측 텍스트 */}
            <div className="w-full md:w-1/5 flex flex-col items-start justify-center max-w-md md:items-start md:justify-start self-start">
              {profile.title && (
                <h1 className="text-lg md:text-2xl font-bold text-black mb-4 font-[var(--font-inter)]">{profile.title}</h1>
              )}
              <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                {typeof profile.desc === 'string' ? profile.desc :
                  // desc가 JSX일 경우 h2에도 Inter 적용
                  <> {
                    React.Children.toArray((profile.desc as React.ReactElement<{ children: React.ReactNode }> ).props.children).map((child) => {
                      if (React.isValidElement(child) && child.type === 'h2') {
                        return React.cloneElement(child as React.ReactElement<{className?: string}>, {
                          className: `${(child.props as { className?: string }).className || ''} font-[var(--font-inter)]`.trim()
                        });
                      }
                      return child;
                    })
                  } </>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 