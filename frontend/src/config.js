const config = {
  apiBaseUrl:
    process.env.NODE_ENV === "production"
      ? "https://smm-panel-f217.onrender.com/"
      : "http://localhost:5000",
};

export default config;
