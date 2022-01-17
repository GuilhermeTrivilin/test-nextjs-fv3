import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
        //     __html: `
        //     const allowCookies = localStorage.getItem("allow-cookies");
        //   const cookieConsentVersion = localStorage.getItem("cookie-consent-version");
        //   const validShowCookies = allowCookies !== "true" || cookieConsentVersion !== "0.1";

        //   if (validShowCookies) {
        //     document.querySelector(".overlay").style.visibility = "visible";
        //     }
        //     `
        }}
    />
}