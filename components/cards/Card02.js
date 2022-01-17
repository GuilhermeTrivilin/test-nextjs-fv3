import Image from "next/image"
import { useState, useEffect } from "react"

export default function ({ findPosition, coverItems, position }) {
    let imageSize;
    
    if (typeof window !== 'undefined') {
        const { innerWidth: width } = window;
        
        imageSize = width > 1199 ? "116" : "94"
    }

    const [data, setData] = useState(null)

    useEffect(() => { coverItems.length > 0 && getData() }, [coverItems])

    const getData = async () => {
        const response = await findPosition(position)
        setData(response)
    }

    const renderImage = () => data?.image && <a href={`${data?.link}.html`} className="image-link" target={data?.target}><Image className="lazy" src={data?.image} alt="" width={imageSize} height={imageSize} /></a>

    return <div className="card-theme card-model-2 ga-event-track" data-ga-event-label={data?.position}>
        {renderImage()}
        <div className="card-title">
            <div className="card-info">
                <span className={`hat font-color-${data?.hat?.toLowerCase()}`}>{data?.hat?.toUpperCase()}</span>
            </div>
            <h2><a href={`${data?.link}.html`} target={data?.target}>{data?.title}</a></h2>
        </div>
    </div>
}