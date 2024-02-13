import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/to-my-princess_2.0/",
  server: {
    host: "192.168.18.35", // Utiliza la dirección IP de tu adaptador de red Wi-Fi
    port: 4000, // Puedes especificar el puerto que desees aquí
  },
});
