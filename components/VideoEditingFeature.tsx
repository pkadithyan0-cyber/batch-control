import { Clapperboard } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

export function VideoEditingFeature() {
  return (
    <div className="video-feature" aria-label="Batch video editing">
      <Clapperboard className="video-feature-icon" size={23} strokeWidth={1.5} aria-hidden="true" />
      <h1>BATCH VIDEO EDITING</h1>
      <p className="batch-range">12 TO 3</p>
      <CountdownTimer variant="hero" />
      <span className="video-feature-rule" aria-hidden="true" />
    </div>
  );
}
