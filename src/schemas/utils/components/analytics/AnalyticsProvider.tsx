import { useEffect } from 'react';
import { CONFIG } from '@/config';

// THIS LINE IS CRITICAL: It must be "export function", not just "function"
export function AnalyticsProvider() {
  useEffect(() => {
    if (!CONFIG.analytics.ga4Id) return;

    // 1. Inject Google Analytics 4 (GA4)
    const gaScript1 = document.createElement('script');
    gaScript1.async = true;
    gaScript1.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.analytics.ga4Id}`;
    document.head.appendChild(gaScript1);

    const gaScript2 = document.createElement('script');
    gaScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${CONFIG.analytics.ga4Id}');
    `;
    document.head.appendChild(gaScript2);

    // 2. Inject Google Tag Manager (GTM)
    if (CONFIG.analytics.gtmId) {
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${CONFIG.analytics.gtmId}');
      `;
      document.head.appendChild(gtmScript);
    }

    // 3. Inject Microsoft Clarity
    if (CONFIG.analytics.clarityId) {
      const clarityScript = document.createElement('script');
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CONFIG.analytics.clarityId}");
      `;
      document.head.appendChild(clarityScript);
    }
  }, []);

  return null; // This component renders nothing visually
}