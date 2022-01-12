import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `
            function toggleNavegMenu() {
                var el = document.getElementById("r7-main-navigation");
                el.classList.toggle("active");
            }
            `
        }}
    />
}