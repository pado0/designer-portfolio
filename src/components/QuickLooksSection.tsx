'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import Image from 'next/image';

const QUICK_LOOKS = [
  {
    img: "/asset/quick1.gif",
    title: "Mobile QR Ordering",
    titleText: "Mobile QR Ordering",
    desc: "Built a review-friendly ordering flow and scaled it from scratch to 1,000 franchise locations.",
  },
  {
    img: "/asset/quick2.png",
    title: <>Paying Fines<br />—Before They&apos;re Late</>,
    titleText: "Paying Fines—Before They&apos;re Late",
    desc: "Partnered with traffic enforcement to integrate fine notifications and payments into one seamless flow.",
  },
  {
    img: "/asset/quick3.png",
    title: "Branding for a New Ordering Habit",
    titleText: "Branding for a New Ordering Habit",
    desc: "Collaborated with the brand team to introduce QR ordering to customers unfamiliar with the experience.",
  },
  {
    img: "/asset/quick4.png",
    title: "Better QR Sticker",
    titleText: "Better QR Sticker",
    desc: "After 1 month of research, found that owners preferred stickers that matched their store's colors.",
  },
];

const ROLL_INTERVAL = 4000;

export default function QuickLooksSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback((newIndex: number, dir: number) => {
    if (animating) return;
    const safeNewIndex = ((newIndex % QUICK_LOOKS.length) + QUICK_LOOKS.length) % QUICK_LOOKS.length;
    setPrevIndex(index >= QUICK_LOOKS.length ? 0 : index);
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setIndex(safeNewIndex);
      setAnimating(false);
    }, 500); // 애니메이션 지속시간과 맞춤
  }, [animating, index]);

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      next();
    }, ROLL_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, next]);

  const current = QUICK_LOOKS[index % QUICK_LOOKS.length];
  const prevItem = QUICK_LOOKS[prevIndex % QUICK_LOOKS.length];

  const getImageClass = (isCurrent: boolean) => {
    if (isCurrent) {
      return `absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 z-10 ` +
        (direction === 1 ? 'animate-fadeInRight' : direction === -1 ? 'animate-fadeInLeft' : '');
    } else {
      return `absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 z-0 ` +
        (direction === 1 ? 'animate-fadeOutLeft' : direction === -1 ? 'animate-fadeOutRight' : '');
    }
  };
  const getTextClass = (isCurrent: boolean) => {
    if (isCurrent) {
      return `transition-all duration-500 z-10 ` +
        (direction === 1 ? 'animate-fadeInUp' : direction === -1 ? 'animate-fadeInUp' : '');
    } else {
      return `absolute top-0 left-0 w-full transition-all duration-500 z-0 ` +
        'animate-fadeOut';
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Quick Looks</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3 flex items-center justify-center relative lg:w-[64rem] md:w-[32rem]">
            {/* 이미지 슬라이드 */}
            <div className="relative w-full h-80 md:h-[28rem] overflow-hidden rounded-lg shadow">
              {/* 이전 이미지 (애니메이션) */}
              <Image
                key={`prev-${prevItem.titleText}-${prevIndex}`}
                src={prevItem.img}
                alt={prevItem.titleText}
                width={800}
                height={600}
                className={getImageClass(false)}
                style={{ pointerEvents: 'none' }}
                priority
              />
              {/* 현재 이미지 (애니메이션) */}
              <Image
                key={`curr-${current.titleText}-${index}`}
                src={current.img}
                alt={current.titleText}
                width={800}
                height={600}
                className={getImageClass(true)}
                style={{ pointerEvents: 'none' }}
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-[38%] flex flex-col items-center justify-between text-center h-80 md:h-[28rem]">
            <div className="flex flex-col items-center justify-start w-full h-full relative">
              {/* 이전 텍스트 (애니메이션) */}
              {animating && (
                <div className={getTextClass(false)} key={`prev-${prevItem.titleText}-${prevIndex}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{typeof prevItem.title === 'string' ? prevItem.title : prevItem.title}</h3>
                  <p className="text-gray-700 text-base md:text-lg mb-4">{prevItem.desc}</p>
                </div>
              )}
              {/* 현재 텍스트 (애니메이션) */}
              <div className={getTextClass(true)} key={`curr-${current.titleText}-${index}`}>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{typeof current.title === 'string' ? current.title : current.title}</h3>
                <p className="text-gray-700 text-base md:text-lg mb-4">{current.desc}</p>
              </div>
            </div>
            {/* 방향키 버튼: 박스 하단에 고정, 가운데 정렬 */}
            <div className="flex flex-row items-center justify-center gap-4 w-full mb-2">
              <button
                className="bg-white/80 hover:bg-[#455dfe]/10 border border-gray-200 rounded-full p-2 shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#455dfe]"
                aria-label="이전 이미지"
                onClick={prev}
                type="button"
                disabled={animating}
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
                disabled={animating}
              >
                <svg width="28" height="28" fill="none" stroke="#455dfe" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 커스텀 애니메이션 */}
      <style jsx>{`
        .animate-fadeInRight {
          animation: fadeInRight 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fadeOutLeft {
          animation: fadeOutLeft 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fadeOutRight {
          animation: fadeOutRight 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fadeOut {
          animation: fadeOut 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes fadeOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(40px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </section>
  );
} 