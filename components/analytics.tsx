"use client"

import Script from "next/script"

export function Analytics() {
  return (
    <>
      {/* Google Analytics Script - Replace with your own Google Analytics ID */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-KZMG37103X`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KZMG37103X');
        `}
      </Script>
    </>
  )
}
