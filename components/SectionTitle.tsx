"use client";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}