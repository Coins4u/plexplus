import type { ReactNode } from "react";

type IconName =
  | "bars"
  | "times"
  | "check-circle"
  | "check"
  | "clipboard-check"
  | "credit-card"
  | "tv"
  | "film"
  | "bolt"
  | "headset"
  | "cogs"
  | "shield-alt"
  | "windows"
  | "play-circle"
  | "info-circle"
  | "book-open"
  | "question-circle"
  | "amazon"
  | "android"
  | "apple"
  | "laptop"
  | "box"
  | "star"
  | "star-half"
  | "chevron-down"
  | "whatsapp";

const ICON_PATHS: Record<IconName, ReactNode> = {
  bars: (
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  ),
  times: (
    <path
      d="M6 6l12 12M18 6l-12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  ),
  "check-circle": (
    <>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8 12.5l2.5 2.5L16 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  check: (
    <path
      d="M5 13l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "clipboard-check": (
    <>
      <path
        d="M9 4h6l1 2h3v14H5V6h3l1-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  "credit-card": (
    <>
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
      <path d="M7 15h4" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  tv: (
    <>
      <rect
        x="3"
        y="5"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M9 21h6M12 17v4" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  film: (
    <>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M7 5v14M17 5v14" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h4M3 15h4M17 9h4M17 15h4" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  bolt: (
    <path
      d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
      fill="currentColor"
    />
  ),
  headset: (
    <>
      <path
        d="M4 13v-1a8 8 0 1 1 16 0v1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect x="4" y="13" width="4" height="6" rx="2" fill="currentColor" />
      <rect x="16" y="13" width="4" height="6" rx="2" fill="currentColor" />
    </>
  ),
  cogs: (
    <>
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  "shield-alt": (
    <path
      d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  ),
  windows: (
    <>
      <rect x="3" y="4" width="8" height="8" fill="currentColor" />
      <rect x="13" y="4" width="8" height="8" fill="currentColor" />
      <rect x="3" y="14" width="8" height="8" fill="currentColor" />
      <rect x="13" y="14" width="8" height="8" fill="currentColor" />
    </>
  ),
  "play-circle": (
    <>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M10 8l6 4-6 4z" fill="currentColor" />
    </>
  ),
  "info-circle": (
    <>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M12 10v6" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
    </>
  ),
  "book-open": (
    <>
      <path
        d="M4 5h7a3 3 0 0 1 3 3v11H7a3 3 0 0 0-3 3V5z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M20 5h-7a3 3 0 0 0-3 3v11h7a3 3 0 0 1 3 3V5z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  "question-circle": (
    <>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M9.5 9a2.5 2.5 0 1 1 4.5 1.5c-.6.7-1.5 1-1.5 2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </>
  ),
  amazon: (
    <>
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M7 17h10" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  android: (
    <>
      <rect
        x="5"
        y="9"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M8 6l-2-2M16 6l2-2" stroke="currentColor" strokeWidth="2" />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
      <circle cx="14" cy="12" r="1" fill="currentColor" />
    </>
  ),
  apple: (
    <>
      <path
        d="M12 6c-2 0-4 2-4 4 0 3 2 8 4 8s4-5 4-8c0-2-2-4-4-4z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M13 3c1 0 2 1 2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  laptop: (
    <>
      <rect
        x="4"
        y="6"
        width="16"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M2 18h20" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  box: (
    <>
      <path
        d="M3 7l9-4 9 4-9 4-9-4z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M3 7v10l9 4 9-4V7" stroke="currentColor" strokeWidth="2" />
      <path d="M12 11v10" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  star: (
    <path
      d="M12 2l3 6 6 .9-4.4 4.3 1 6.2L12 17l-5.6 3.4 1-6.2L3 8.9 9 8l3-6z"
      fill="currentColor"
    />
  ),
  "star-half": (
    <>
      <path
        d="M12 2l3 6 6 .9-4.4 4.3 1 6.2L12 17V2z"
        fill="currentColor"
      />
      <path
        d="M12 2l3 6 6 .9-4.4 4.3 1 6.2L12 17l-5.6 3.4 1-6.2L3 8.9 9 8l3-6z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  "chevron-down": (
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  whatsapp: (
    <>
      <path
        d="M20 12a8 8 0 1 1-14.6 4.4L4 20l3.8-1.3A8 8 0 0 1 20 12z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M9 10l1.5 3 3-1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
