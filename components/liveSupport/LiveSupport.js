"use client";

import { useEffect } from "react";

export default function LiveSupport() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // prevent duplicate loading
    if (window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/69da5437d8a4811c366f3bfa/1jludhukj";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // optional cleanup
      document.body.removeChild(script);
    };
  }, []);

  return null;
}