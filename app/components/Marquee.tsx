"use client";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  speed?: string;
};

export default function Marquee({ items, reverse = false, speed = "28s" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gray-100 bg-white py-3 no-scrollbar">
      <div
        className={`marquee-track ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: speed }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 whitespace-nowrap text-sm font-medium text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
