"use client";

import { Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };
const initialTime: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
const batchStartDate = process.env.NEXT_PUBLIC_BATCH_START_DATE ?? "2026-12-01T12:00:00+05:30";
const startedMessage = process.env.NEXT_PUBLIC_BATCH_STARTED_MESSAGE ?? "NEW BATCH STARTED";

function getTimeLeft(targetTime: number): TimeLeft {
  const difference = Math.max(0, targetTime - Date.now());
  const totalSeconds = Math.floor(difference / 1000);
  return { days: Math.floor(totalSeconds / 86_400), hours: Math.floor((totalSeconds % 86_400) / 3_600), minutes: Math.floor((totalSeconds % 3_600) / 60), seconds: totalSeconds % 60 };
}

function getSessionBoundary(nowTime: number): number {
  const now = new Date(nowTime);
  const todayStart = new Date(now);
  todayStart.setHours(12, 0, 0, 0);
  const todayEnd = new Date(now);
  todayEnd.setHours(15, 0, 0, 0);

  if (nowTime < todayStart.getTime()) return todayStart.getTime();
  if (nowTime < todayEnd.getTime()) return todayEnd.getTime();

  const nextStart = new Date(todayStart);
  nextStart.setDate(nextStart.getDate() + 1);
  return nextStart.getTime();
}

function pad(value: number) { return value.toString().padStart(2, "0"); }

export function CountdownTimer({ variant = "header" }: { variant?: "header" | "hero" }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime);
  const [isReady, setIsReady] = useState(false);
  const targetTime = new Date(batchStartDate).getTime();
  const isValidDate = Number.isFinite(targetTime);

  useEffect(() => {
    if (variant === "header" && !isValidDate) { setIsReady(true); return; }
    const update = () => {
      const countdownTarget = variant === "hero" ? getSessionBoundary(Date.now()) : targetTime;
      setTimeLeft(getTimeLeft(countdownTarget));
      setIsReady(true);
    };
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [isValidDate, targetTime, variant]);

  const reachedZero = isReady && timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds === 0;
  const units = ["hours", "minutes", "seconds"] as const;
  return <section className={`countdown${variant === "hero" ? " hero-countdown" : ""}`} aria-label="Countdown to the next batch" data-complete={reachedZero}>
    <div className="countdown-heading"><Clock3 aria-hidden="true" className="countdown-clock" strokeWidth={1.8} /><span>{reachedZero ? startedMessage : "NEXT BATCH STARTS IN"}</span></div>
    {!reachedZero && <div className="countdown-values" aria-live="off" aria-atomic="true">
      {units.map((unit, index) => <div className="countdown-unit" key={unit}>
        {index > 0 && <span className="countdown-separator" aria-hidden="true" />}
        <span className="countdown-number">{isReady && isValidDate ? pad(unit === "hours" ? timeLeft.days * 24 + timeLeft.hours : timeLeft[unit]) : "00"}</span>
        <span className="countdown-label">{variant === "hero" ? unit.toUpperCase() : unit === "hours" ? "HRS" : unit === "minutes" ? "MIN" : "SEC"}</span>
      </div>)}
    </div>}
    {!isValidDate && <span className="sr-only">Countdown date is invalid.</span>}
  </section>;
}
