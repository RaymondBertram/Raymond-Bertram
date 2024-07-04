"use client";
import Slider from "@/components/slider/slider.component";
import { ITestemonial } from "@/types";

export default function Testemonials() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="flex flex-row text-3xl p-8 mb-2.5 tracking-wide font-semibold overline justify-center">
        Testemonials
      </h1>
      <div className="flex flex-row">
        <Slider />
      </div>
    </div>
  );
}
