/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateRows: {
                12: 'repeat(12, minmax(0, 1fr))',
                24: 'repeat(24, minmax(0, 1fr))',
                42: 'repeat(42, minmax(0, 1fr))',
                52: 'repeat(52, minmax(0, 1fr))',
                60: 'repeat(60, minmax(0, 1fr))',
                84: 'repeat(84, minmax(0, 1fr))',
                100: 'repeat(100, minmax(0, 1fr))',
            },
            gridTemplateColumns: {
                12: 'repeat(12, minmax(0, 1fr))',
                24: 'repeat(24, minmax(0, 1fr))',
                42: 'repeat(42, minmax(0, 1fr))',
                52: 'repeat(52, minmax(0, 1fr))',
                60: 'repeat(60, minmax(0, 1fr))',
                84: 'repeat(84, minmax(0, 1fr))',
                100: 'repeat(100, minmax(0, 1fr))',
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: ['prettier-plugin-tailwindcss'],
};
