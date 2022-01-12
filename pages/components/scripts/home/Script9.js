import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `
            (function(n,v,g){
                o='Navegg';
                if(!n[o]){
                    a=v.createElement('script');
                    a.src=g;b=document.getElementsByTagName('script')[0];
                    b.parentNode.insertBefore(a,b);
                    n[o]=n[o]||function(parms){
                        n[o].q=n[o].q||[];n[o].q.push([this, parms])};
                    } 
                }
            )
            (window, document, 'https://tag.navdmp.com/universal.min.js');
            window.naveggReady = window.naveggReady||[];
            window.nvg14410 = new Navegg({
                acc: 14410
            });
            `
        }}
    />
}