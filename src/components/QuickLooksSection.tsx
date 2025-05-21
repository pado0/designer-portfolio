'use client';

import { useState, useEffect, useRef } from "react";

const QUICK_LOOKS = [
  {
    img: "/asset/quick1.gif",
    title: "Landing Page UI",
    desc: "깔끔한 랜딩페이지 디자인과 인터랙션."
  },
  {
    img: "/asset/quick2.png",
    title: "Dashboard Widgets",
    desc: "데이터 시각화와 위젯 UI."
  },
  {
    img: "/asset/quick3.png",
    title: "Mobile App Concept",
    desc: "모바일 앱 UX 플로우."
  },
  {
    img: "/asset/quick4.png",
    title: "Brand Identity",
    desc: "브랜드 컬러와 로고 디자인."
  }
];

const ROLL_INTERVAL = 4000;

export default function QuickLooksSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (newIndex: number, dir: number) => {
    setPrevIndex(index);
    setDirection(dir);
    setIndex((newIndex + QUICK_LOOKS.length) % QUICK_LOOKS.length);
  };

  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goTo(index + 1, 1);
    }, ROLL_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line
  }, [index]);

  const current = QUICK_LOOKS[index];
  const prevItem = QUICK_LOOKS[prevIndex];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Quick Looks</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3 flex items-center justify-center relative lg:w-[64rem] md:w-[32rem]">
            {/* 이미지 슬라이드 */}
            <div className="relative w-full h-80 md:h-[28rem] overflow-hidden rounded-lg shadow">
              {/* 이전 이미지 (애니메이션) */}
              <img
                key={prevItem.img + prevIndex}
                src={prevItem.img}
                alt={prevItem.title}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700
                  ${direction === 1 ? '-translate-x-full opacity-0' : direction === -1 ? 'translate-x-full opacity-0' : 'opacity-0'}
                  ${prevIndex === index ? 'hidden' : ''}
                `}
                style={{ transitionProperty: 'opacity, transform' }}
              />
              {/* 현재 이미지 (애니메이션) */}
              <img
                key={current.img + index}
                src={current.img}
                alt={current.title}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700
                  ${direction === 1 ? 'translate-x-0 opacity-100' : direction === -1 ? 'translate-x-0 opacity-100' : 'opacity-100'}
                `}
                style={{ transitionProperty: 'opacity, transform' }}
              />
            </div>
          </div>
          {/* 텍스트 박스: 상단 정렬, 가운데 정렬, 버튼은 하단 고정 */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-between text-center h-64 md:h-80">
            <div className="flex flex-col items-center justify-start w-full flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-[#455dfe] mb-2 mt-2">{current.title}</h3>
              <p className="text-gray-700 text-base md:text-lg mb-4">{current.desc}</p>
            </div>
            {/* 방향키 버튼: 박스 하단에 고정, 가운데 정렬 */}
            <div className="flex flex-row items-center justify-center gap-4 w-full mb-2">
              <button
                className="bg-white/80 hover:bg-[#455dfe]/10 border border-gray-200 rounded-full p-2 shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#455dfe]"
                aria-label="이전 이미지"
                onClick={prev}
                type="button"
              >
                <svg width="28" height="28" fill="none" stroke="#455dfe" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="bg-white/80 hover:bg-[#455dfe]/10 border border-gray-200 rounded-full p-2 shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#455dfe]"
                aria-label="다음 이미지"
                onClick={next}
                type="button"
              >
                <svg width="28" height="28" fill="none" stroke="#455dfe" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 