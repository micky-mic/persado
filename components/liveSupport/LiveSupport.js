"use client";

import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const LiveSupport = () => {
  return (
    <a
      href="https://t.me/NexosAI_Support"
      target="_blank"
      rel="noopener noreferrer"
      className="telegram-support"
      aria-label="Telegram Support"
    >
      <FaTelegramPlane size={28} />
      <span>Live Support</span>
    </a>
  );
};

export default LiveSupport;