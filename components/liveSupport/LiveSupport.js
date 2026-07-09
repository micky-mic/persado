"use client";

import { useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const LiveSupport = () => {
  useEffect(() => {
    if (window.__liveChatLoaded) return;

    window.__lc = window.__lc || {};
    window.__lc.license = 19764910;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";

    (function (n, t, c) {
      function i(args) {
        return e._h ? e._h.apply(null, args) : e._q.push(args);
      }

      const e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on() {
          i(["on", c.call(arguments)]);
        },
        once() {
          i(["once", c.call(arguments)]);
        },
        off() {
          i(["off", c.call(arguments)]);
        },
        get() {
          if (!e._h) {
            throw new Error(
              "[LiveChatWidget] You can't use getters before load."
            );
          }
          return i(["get", c.call(arguments)]);
        },
        call() {
          i(["call", c.call(arguments)]);
        },
        init() {
          const script = t.createElement("script");
          script.async = true;
          script.type = "text/javascript";
          script.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(script);
        },
      };

      if (!n.__lc.asyncInit) {
        e.init();
      }

      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, [].slice);

    window.__liveChatLoaded = true;
  }, []);

  return (
    <a
      href="https://t.me/NexosAI_Support"
      target="_blank"
      rel="noopener noreferrer"
      className="telegram-support"
      aria-label="Telegram Support"
    >
      <FaTelegramPlane size={28} />
      <span>Telegram Support</span>
    </a>
  );
};

export default LiveSupport;