module.exports = {
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
    relative: true,
    files: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
    {
      pattern: /taos:.*/,
    },
  ],
  plugins: [require('taos/plugin')],
};