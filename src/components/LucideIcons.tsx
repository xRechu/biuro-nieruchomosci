import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const BASE_PROPS: Omit<IconProps, "viewBox" | "children"> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconBed(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="M2 11h20" />
      <path d="M4 11V8.5A2.5 2.5 0 0 1 6.5 6h3A2.5 2.5 0 0 1 12 8.5V11" />
      <path d="M12 11V9.5A2.5 2.5 0 0 1 14.5 7h3A2.5 2.5 0 0 1 20 9.5V11" />
      <path d="M3 11v7" />
      <path d="M21 11v7" />
      <path d="M3 18h18" />
    </svg>
  );
}

export function IconBath(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="M3 13h18" />
      <path d="M5 13v2.5A4.5 4.5 0 0 0 9.5 20h5A4.5 4.5 0 0 0 19 15.5V13" />
      <path d="M8 13V8a2.5 2.5 0 0 1 5 0v1.5" />
      <path d="M13 9.5h-2.5" />
      <path d="M6 21v-1" />
      <path d="M18 21v-1" />
    </svg>
  );
}

export function IconRuler(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="m3 21 18-18" />
      <path d="m14 4 6 6" />
      <path d="m9 9 3 3" />
      <path d="m6 12 3 3" />
      <path d="m3 15 3 3" />
    </svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="M12 22c4.6-1.7 8-4.6 8-9.3V5.6L12 2 4 5.6v7.1c0 4.7 3.4 7.6 8 9.3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconZap(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7Z" />
      <path d="m5 16 .8 2L8 19l-2.2 1.2L5 22l-.8-1.8L2 19l2.2-1.1Z" />
      <path d="m19 14 .9 2.2L22 17l-2.1.8L19 20l-.9-2.2L16 17l2.1-.8Z" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="m12 3 2.8 5.6 6.2.9-4.5 4.4 1.1 6.1L12 17.2 6.4 20l1.1-6.1L3 9.5l6.2-.9Z" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="M12 22s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.8" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="M22 16.9v2.8a2 2 0 0 1-2.2 2C10.9 20.8 3.2 13.1 2.3 4.2A2 2 0 0 1 4.3 2h2.8a2 2 0 0 1 2 1.7l.6 3.8a2 2 0 0 1-.6 1.8l-1.6 1.6a15 15 0 0 0 5.9 5.9l1.6-1.6a2 2 0 0 1 1.8-.6l3.8.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...BASE_PROPS} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
