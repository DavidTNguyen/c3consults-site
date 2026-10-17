/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
const React = require('react')

// Runs before first paint so the correct theme is applied without a flash.
const themeScript = `
(function () {
  var root = document.documentElement;
  var stored;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  var query = window.matchMedia('(prefers-color-scheme: dark)');
  window.__onThemeChange = function () {};
  function apply(theme) {
    window.__theme = theme;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    window.__onThemeChange(theme);
  }
  window.__setPreferredTheme = function (theme) {
    stored = theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
    apply(theme);
  };
  var onSystemChange = function (e) { if (!stored) apply(e.matches ? 'dark' : 'light'); };
  if (query.addEventListener) query.addEventListener('change', onSystemChange);
  else if (query.addListener) query.addListener(onSystemChange);
  apply(stored === 'dark' || stored === 'light' ? stored : query.matches ? 'dark' : 'light');
})();
`

exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: 'en' })
  setPreBodyComponents([
    React.createElement('script', {
      key: 'theme-script',
      dangerouslySetInnerHTML: { __html: themeScript },
    }),
  ])
}
