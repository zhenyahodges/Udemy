/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,cjs,mjs,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily:{
                title: ['"Pacifico"', 'cursive']
            }
        },
    },
    plugins: [],
};
