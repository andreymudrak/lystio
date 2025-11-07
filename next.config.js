/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["api.lystio.co"],
  },
  env: {
    MAPBOX_TOKEN:
      "pk.eyJ1IjoibHlzdGlvIiwiYSI6ImNtMjA3cmFoejBnMngycXM4anNuNXFmaTQifQ.y-WiEerYZrFOm8Xd8a7GwQ",
    API_BASE_URL: "https://api.lystio.co",
  },
};
