/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          '2xl': '2rem',
        },
      },
      backgroundImage: {
        'profile-bg': "url('/src/pages/dashboard/assets/images/banner-profile.png')",
        'pasir-icon': "url('/src/pages/dashboard/assets/icon/icon-pasir-selfie.png')",
        'car-banner': "url('/src/pages/dashboard/assets/images/car-placeir.png')",
        'click-banner': "url('/src/pages/dashboard/assets/images/click-placeir.png')"
      },
    },
  },
  plugins: [],
}