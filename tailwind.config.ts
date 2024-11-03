import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
