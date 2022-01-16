import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `
            const audimaAudioIsPaused = () => {
                const element = document.getElementsByClassName("fa-play");
                const isPaused = element.length != 0;
  
                return isPaused;
              };
  
              const soundCloudAudioIsPaused = () => {
                const element = document.getElementsByClassName("playing");
                const isPaused = element.length == 0;
  
                return isPaused;
              };
  
              const tagIsPaused = (tagHTML) => {
                const element = document.querySelector(tagHTML);
  
                if (!!element) {
                  element.onpause = (event) => {
                    return true; 
                  };
                } else {
                  return false;
                };
  
                return true;
              }
  
              setInterval(() => {
                const elementsArePaused = 
                  audimaAudioIsPaused() 
                  && tagIsPaused('video') 
                  && tagIsPaused('audio')
                  && soundCloudAudioIsPaused();
  
                if (elementsArePaused) {
                  location.reload()
                }
              }, 300000);
            `
        }}
    />
}