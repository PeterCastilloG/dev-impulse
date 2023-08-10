"use client";

import "./global.css";
import { Session } from "next-auth";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react"
import React from "react";
import Navbar from "@/shared/components/navbar/Navbar";
import background from "../assets/challengeBackground.png";
import Sidebar from "../shared/components/sidebar/Sidebar";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});


export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {

  const path = usePathname();

  const liveChat = (n: any, t: any, c: any) => {
    function i(n: any[]) {
      return e._h ? e._h.apply(null, n) : e._q.push(n);
    }
    var e = {
      _q: [] as any,
      _h: null as any,
      _v: '2.0',
      on: function () {
        i(['on', c.call(arguments)]);
      },
      once: function () {
        i(['once', c.call(arguments)]);
      },
      off: function () {
        i(['off', c.call(arguments)]);
      },
      get: function () {
        if (!e._h) throw new Error('[LiveChatWidget] You can\'t use getters before load.');
        return i(['get', c.call(arguments)]);
      },
      call: function () {
        i(['call', c.call(arguments)]);
      },
      init: function () {
        var n = t.createElement('script');
        n.async = true;
        n.type = 'text/javascript';
        n.src = 'https://cdn.livechatinc.com/tracking.js';
        t.head.appendChild(n);
      },
    };
    !n.__lc.asyncInit && e.init();
    n.LiveChatWidget = n.LiveChatWidget || e;
  };

  useEffect(() => {
    const lcWindow = window as any;
    lcWindow.__lc = lcWindow.__lc || {};
    lcWindow.__lc.license = 14793765;
    liveChat(lcWindow, document, [].slice);
  }, []);


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Impulse</title>
      </head>
      <body className={poppins.className}>
        <SessionProvider session={session}>
          <Image src={background} alt="background" className="background" />
          <div className="wrapper">
            {!path.includes("/r/") && <Sidebar />}
            <div
              className={`container ${path.includes("/r/") && "auth"
                }`}
            >
              {!path.includes("/r/") && <Navbar />}
              <div className="page"><div className="content">{children}</div></div>
            </div>
          </div>
          <div id="modal"></div>
        </SessionProvider>
      </body>
    </html>
  );
}
