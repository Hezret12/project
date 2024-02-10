// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {},
//     colors:{
//    primary:"#00040f",
//    lightWhite:'rgba(255,255,255,0.7)',
//    White:"#FFFFFF"
//     },
//    screens:{
//       xs:"480px",
//       ss:"628px",
//       sm:"768px",
//       md:"1061px",
//       lg:"1200px",
//       xl:"1700px",
//   }
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  screens:{
    xs:"480px",
    ss:"628px",
    sm:"768px",
    md:"1061px",
    lg:"1200px",
    xl:"1700px",}
}