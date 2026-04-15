"use client";

import { useMemo, useState } from "react";

const steps = [
  {
    title: "Lizu, can I have one tiny chance?",
    text: "I know we had a fight, and I really hate that I made things feel heavy between us.",
  },
  {
    title: "Can I say sorry properly?",
    text: "Not in a rushed way. Not just words. In the gentle way your heart deserves.",
  },
  {
    title: "Do you know how precious you are to me?",
    text: "Because even when things are messy, my feelings for you stay soft.",
  },
  {
    title: "Can I keep trying until your smile comes back?",
    text: "Patiently, sweetly, and with more care than before.",
  },
  {
    title: "So… will you forgive me?",
    text: "Just a little maybe? I’ll treasure that chance with my whole heart. ♡",
  },
];

const noLabels = [
  "no",
  "really?",
  "still no?",
  "tiny no",
  "so small",
  "that’s a baby no",
];

export default function Page() {
  const [step, setStep] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [forgiven, setForgiven] = useState(false);

  const current = steps[Math.min(step, steps.length - 1)];

  const noScale = useMemo(() => {
    const value = 1 - noCount * 0.14;
    return Math.max(value, 0.28);
  }, [noCount]);

  const yesScale = useMemo(() => {
    const value = 1 + noCount * 0.08;
    return Math.min(value, 1.35);
  }, [noCount]);

  const handleYes = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
      setNoCount(0);
      return;
    }

    setForgiven(true);
  };

  const handleNo = () => {
    setNoCount((prev) => prev + 1);
  };

  const restart = () => {
    setStep(0);
    setNoCount(0);
    setForgiven(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff8fb] px-4 py-6 text-[#7a3555] sm:px-6 sm:py-10">
      {/* soft background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,192,218,0.45),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,220,232,0.7),transparent_35%),linear-gradient(180deg,#fffafd_0%,#fff4f8_100%)]" />

      {/* floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute select-none text-pink-300/50"
            style={{
              left: `${4 + ((i * 5.3) % 92)}%`,
              top: `${5 + ((i * 11) % 85)}%`,
              fontSize: `${10 + (i % 5) * 5}px`,
              transform: `rotate(${(i % 7) * 8 - 20}deg)`,
            }}
          >
            ♡
          </span>
        ))}
      </div>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] max-w-[760px] items-center justify-center">
        <div className="w-full rounded-[28px] border border-pink-200/70 bg-white/90 p-5 shadow-[0_20px_80px_rgba(244,160,191,0.22)] backdrop-blur-sm sm:rounded-[36px] sm:p-8 md:p-10">
          {!forgiven ? (
            <>
              <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-pink-500 sm:mb-6">
                <span>for lizu</span>
                <span>♡</span>
              </div>

              <div className="text-center">
                <div className="text-[13px] font-medium text-pink-400 sm:text-sm">
                  question {step + 1} / {steps.length}
                </div>

                <h1 className="mx-auto mt-3 max-w-[520px] text-[28px] font-semibold leading-[1.15] text-[#a34770] sm:text-[40px]">
                  {current.title}
                </h1>

                <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-7 text-[#b56b8f] sm:mt-5 sm:text-[17px]">
                  {current.text}
                </p>
              </div>

              <div className="mt-8 flex min-h-[120px] flex-col items-center justify-center gap-4 sm:mt-10 sm:min-h-[130px] sm:flex-row sm:gap-5">
                <button
                  onClick={handleYes}
                  className="rounded-full bg-gradient-to-r from-pink-300 via-pink-200 to-white px-8 py-3 text-[15px] font-semibold text-[#8b355c] shadow-[0_12px_30px_rgba(244,170,196,0.35)] transition duration-300 hover:-translate-y-0.5 sm:px-10 sm:py-4 sm:text-base"
                  style={{ transform: `scale(${yesScale})` }}
                >
                  yes ♡
                </button>

                <button
                  onClick={handleNo}
                  className="rounded-full border border-pink-200 bg-white px-6 py-3 text-[14px] font-medium text-pink-400 shadow-sm transition duration-300 sm:text-[15px]"
                  style={{
                    transform: `scale(${noScale})`,
                    transformOrigin: "center",
                  }}
                >
                  {noLabels[Math.min(noCount, noLabels.length - 1)]}
                </button>
              </div>

              <div className="mt-6 text-center text-[12px] tracking-[0.18em] text-pink-300 uppercase sm:mt-8">
                every no gets smaller because my apology is bigger ♡
              </div>
            </>
          ) : (
            <div className="py-6 text-center sm:py-10">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-4xl shadow-[0_10px_30px_rgba(244,170,196,0.28)] sm:h-24 sm:w-24">
                ♡
              </div>

              <h2 className="text-[30px] font-semibold text-[#a34770] sm:text-[44px]">
                yay ♡
              </h2>

              <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-7 text-[#b56b8f] sm:text-[18px]">
                you made my whole heart smile.
              </p>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={restart}
                  className="rounded-full border border-pink-200 bg-white px-6 py-3 text-sm font-medium text-pink-500 transition hover:bg-pink-50 sm:text-base"
                >
                  do it again ♡
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  ); 
}