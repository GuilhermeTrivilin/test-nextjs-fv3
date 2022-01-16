import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `
            var OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
                OneSignal.init({
                    appId: "86262e88-ad44-4301-aa95-bfe3d7ad1484",
                });
            });
            `
        }}
    />
}