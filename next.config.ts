import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    EMAILJS_SERVICE_ID: "service_1rakc4l",
    EMAILJS_TEMPLATE_ID: "template_bvj0l5n",
    EMAILJS_PUBLIC_KEY: "N_58djKIYO4a4t-D3",
    MONGODB_URI: "mongodb+srv://Kiyohiro:DCCI9egxOCkN2cmI@cluster0.mvh0o.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0"
  }
};

export default nextConfig;
