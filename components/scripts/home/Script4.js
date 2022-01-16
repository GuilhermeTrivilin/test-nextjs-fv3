import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `
            var IS_HOME = true;
            var LOCATION = null;
            var CONTENT_TYPE = 'home_cover';
            `
        }}
    />
}