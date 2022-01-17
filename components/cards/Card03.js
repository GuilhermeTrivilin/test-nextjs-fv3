import { useState, useEffect } from "react"

export default function ({ findPosition, coverItems, position }) {

    const [data, setData] = useState(null)

    useEffect(() => { coverItems.length > 0 && getData() }, [coverItems])

    const getData = async () => {
        const response = await findPosition(position)
        setData(response)
    }

    return <div className="card-theme card-model-3 ga-event-track" data-ga-event-label={data?.position}>
        <a href={`${data?.link}.html`} className="image-link" target={data?.target}><picture><img className="img-fluid lazy" data-original={data?.image} alt="" /></picture></a>
        <div className="card-title">
            <a href="#" className="button-more-click"></a>
            <div className="card-info">
                <span className={`hat font-color-${data?.hat?.toLowerCase()}`}>{data?.hat?.toUpperCase()}</span>
            </div>
            <h2><a href={`${data?.link}.html`} target={data?.target}>{data?.title}</a></h2>
        </div>
    </div>
}