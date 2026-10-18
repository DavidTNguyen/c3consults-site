import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --font-sans: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji';

    --bg: #fbf8f5;
    --surface: #ffffff;
    --surface-2: #f3ede7;
    --text: #1d1b19;
    --muted: #5c5650;
    --border: #e7dfd7;
    --accent: #a3101a;
    --accent-hover: #86101a;
    --accent-soft: #f8e7e6;
    --on-accent: #ffffff;
    --header-bg: rgba(251, 248, 245, 0.78);
    --shadow-sm: 0 1px 2px rgba(29, 27, 25, 0.06);
    --shadow: 0 1px 2px rgba(29, 27, 25, 0.05), 0 10px 30px -12px rgba(29, 27, 25, 0.18);

    --radius: 16px;
    --radius-sm: 10px;
    --container: 1120px;
    --gutter: clamp(1.25rem, 4vw, 2rem);
    --section-space: clamp(4rem, 9vw, 7rem);
    --header-h: 96px;
  }

  [data-theme='dark'] {
    --bg: #121011;
    --surface: #1b1819;
    --surface-2: #252021;
    --text: #f2ede9;
    --muted: #b6ada7;
    --border: #332c2c;
    --accent: #f0646b;
    --accent-hover: #ff8a8f;
    --accent-soft: rgba(240, 100, 107, 0.14);
    --on-accent: #1d0a0b;
    --header-bg: rgba(18, 16, 17, 0.72);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 12px 32px -12px rgba(0, 0, 0, 0.6);
  }

  *, *::before, *::after { box-sizing: border-box; }

  * { margin: 0; }

  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-h) + 1rem);
  }

  body {
    min-height: 100vh;
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    line-height: 1.65;
    color: var(--text);
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  img, picture, video, canvas, svg, iframe { display: block; max-width: 100%; }

  input, button, textarea, select { font: inherit; color: inherit; }

  button { cursor: pointer; background: none; border: 0; padding: 0; }

  h1, h2, h3, h4 {
    line-height: 1.15;
    letter-spacing: -0.02em;
    font-weight: 750;
    text-wrap: balance;
    overflow-wrap: break-word;
  }

  h1 { font-size: clamp(2.5rem, 4.2vw + 1rem, 4.5rem); letter-spacing: -0.035em; }
  h2 { font-size: clamp(1.9rem, 2.2vw + 1rem, 2.75rem); }
  h3 { font-size: 1.25rem; }

  p { text-wrap: pretty; }
  p + p { margin-top: 1em; }

  a { color: var(--accent); text-underline-offset: 0.2em; }
  a:hover { color: var(--accent-hover); }

  ol, ul { padding-left: 1.25em; }

  ::selection { background: var(--accent); color: var(--on-accent); }

  :focus-visible {
    outline: 3px solid var(--accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  .container {
    width: 100%;
    max-width: calc(var(--container) + var(--gutter) * 2);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }

  .section { padding-block: var(--section-space); }

  .section--alt {
    background: var(--surface-2);
  }

  .section-head {
    max-width: 680px;
    margin-bottom: clamp(2rem, 4vw, 3rem);
  }

  .section-head p:not(.eyebrow) {
    margin-top: 0.85rem;
    color: var(--muted);
    font-size: 1.125rem;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.85rem;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .eyebrow::before {
    content: '';
    width: 1.75rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 48px;
    padding: 0.75rem 1.4rem;
    border-radius: 999px;
    border: 1.5px solid transparent;
    font-weight: 650;
    font-size: 1rem;
    line-height: 1;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease,
      transform 0.2s ease, box-shadow 0.2s ease;
  }

  .btn:hover { transform: translateY(-1px); }

  .btn--primary {
    background: var(--accent);
    color: var(--on-accent);
    box-shadow: 0 8px 20px -10px var(--accent);
  }

  .btn--primary:hover { background: var(--accent-hover); color: var(--on-accent); }

  .btn--ghost {
    border-color: currentColor;
    color: inherit;
  }

  .btn--ghost:hover { background: rgba(127, 127, 127, 0.12); color: inherit; }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .skip-link {
    position: absolute;
    left: 1rem;
    top: -100px;
    z-index: 2000;
    padding: 0.75rem 1rem;
    border-radius: var(--radius-sm);
    background: var(--accent);
    color: var(--on-accent);
    font-weight: 600;
  }

  .skip-link:focus { top: 1rem; color: var(--on-accent); }

  /* Progressive enhancement: scroll-driven reveal with zero JavaScript. */
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      .reveal {
        animation: c3-reveal linear both;
        animation-timeline: view();
        animation-range: entry 0% entry 40%;
      }
    }
  }

  @keyframes c3-reveal {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`
