"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;

  badge?: string;
  eyebrow?: string;

  align?: "left" | "center";

  size?: "sm" | "md" | "lg";

  maxWidth?: "sm" | "md" | "lg" | "xl";

  gradientTitle?: boolean;

  divider?: boolean;

  glow?: boolean;

  className?: string;

  children?: ReactNode;
}

const widths = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
  xl: "max-w-5xl",
};

const titleSizes = {
  sm: "text-3xl md:text-4xl",
  md: "text-4xl md:text-5xl",
  lg: "text-5xl md:text-6xl lg:text-7xl",
};

export default function SectionTitle({
  subtitle,
  title,
  description,
  badge,
  eyebrow,
  align = "center",
  size = "md",
  maxWidth = "md",
  gradientTitle = false,
  divider = true,
  glow = true,
  className,
  children,
}: SectionTitleProps) {
  const center = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={clsx(
        "relative mx-auto overflow-hidden",
        widths[maxWidth],
        center ? "text-center" : "text-left",
        className
      )}
    >
      {/* Background Glow */}
      {glow && (
        <div
          className={clsx(
            "absolute top-0 h-56 w-56 rounded-full bg-amber-500/10 blur-[120px]",
            center ? "left-1/2 -translate-x-1/2" : "-left-20"
          )}
        />
      )}

      <div className="relative z-10">

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className={clsx(center && "flex justify-center")}
          >
            <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300 backdrop-blur-md">
              ✦ {badge}
            </span>
          </motion.div>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-6 text-xs uppercase tracking-[0.45em] text-gray-500"
          >
            {eyebrow}
          </motion.p>
        )}

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-sm uppercase tracking-[0.4em] text-amber-400"
        >
          {subtitle}
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={clsx(
            "mt-5 font-bold leading-[1.1]",
            titleSizes[size],
            gradientTitle
              ? "bg-gradient-to-r from-white via-gray-100 to-amber-300 bg-clip-text text-transparent"
              : "text-white"
          )}
        >
          {title}
        </motion.h2>

        {/* Divider */}
        {divider && (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className={clsx(
              "mt-8 h-[3px] rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300",
              center ? "mx-auto" : ""
            )}
          />
        )}

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            viewport={{ once: true }}
            className={clsx(
              "mt-8 text-lg leading-9 text-gray-300 md:text-xl",
              center && "mx-auto max-w-3xl"
            )}
          >
            {description}
          </motion.p>
        )}

        {/* Bottom Decorative Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className={clsx(
            "mt-10 flex items-center gap-2",
            center ? "justify-center" : ""
          )}
        >
          <div className="h-2 w-2 rounded-full bg-amber-400" />
          <div className="h-2 w-2 rounded-full bg-white/50" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </motion.div>

        {/* Extra Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            {children}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}