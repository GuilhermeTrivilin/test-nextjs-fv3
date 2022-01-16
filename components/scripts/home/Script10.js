import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
            googletag.cmd.push(function () {
            googletag.pubads().disableInitialLoad();
            try {
                var name, col, persona = JSON.parse(window.localStorage.getItem("nvgpersona14410"));
                for (col in persona) {
                    name = "nvg_" + col;
                    name = name.substring(0, 10);
                    googletag.pubads().setTargeting(name, persona[col]);
                }
            } catch (e) {}
            });
            `
        }}
    />
}