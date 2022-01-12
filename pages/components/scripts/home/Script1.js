import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","errorBeacon":"bam-cell.nr-data.net","licenseKey":"ce39ef2661","applicationID":"148230480","transactionName":"dFZcQhQNXF1WFBdbXlpcbVUJFFVDHBBRVkY=","queueTime":0,"applicationTime":2784,"agent":""}`
        }}
    />
}