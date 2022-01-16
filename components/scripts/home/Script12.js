import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `
            window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        var div = document.getElementById(event.slot.getSlotElementId()).parentNode;
        if(!event.isEmpty && event.slotContentChanged && div.id == "stickybottom-r7"){
          div = div.parentNode;
          div.style.width = event.size[0]+'px';
          div.style.height = event.size[1]+'px';
          div.style.display = 'block';
        }
      });
      });
      (function() {
      var el = document.body || document.documentElement,
      wd = el.clientWidth || window.innerWidth, sz = "[[970,90],[728,90]]";
      if (wd < 720) {
        sz = '[[320,50],[300,50]]';
      } else if(wd < 960){
        sz = '[[728,90]]';
      }
      document.write('<scr'+'ipt data-sizes="'+sz+'" data-vendor="r7.com" data-pos="sticky_ad" data-context="rodapefixo" src="https://sc.r7.com/r7/js/adPartner.min.js"><\/scr'+'ipt>');
      })();
            `
        }}
    />
}