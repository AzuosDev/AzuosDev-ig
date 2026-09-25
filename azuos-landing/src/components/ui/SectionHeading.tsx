import type { ReactNode } from "react";

type Props = {
  id?: string;
  linha1: string;
  linha2: string;
  children?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
};

// Título em duas linhas: a afirmação em tinta, a resposta em lilás.
export default function SectionHeading({
  id,
  linha1,
  linha2,
  children,
  align = "center",
  as: Tag = "h2",
  className = "",
}: Props) {
  const centro = align === "center";
  return (
    <div className={`${centro ? "mx-auto max-w-5xl text-center" : "max-w-3xl"} ${className}`}>
      <Tag id={id} className="heading text-[2.2rem] sm:text-[2.9rem] lg:text-[3.4rem]">
        {linha1}
        <span className="block text-accent">{linha2}</span>
      </Tag>
      {children && (
        <div
          className={`mt-6 max-w-[58ch] text-base leading-relaxed text-body sm:text-lg ${
            centro ? "mx-auto" : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
