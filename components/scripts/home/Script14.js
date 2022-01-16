import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `
            document.getElementById("accept-button").addEventListener("click", () => {
              localStorage.setItem("allow-cookies", "true");
            localStorage.setItem("cookie-consent-version", "0.1");
  
            document.querySelector(".overlay").style.visibility = "hidden";
              })
            `
        }}
    />
}