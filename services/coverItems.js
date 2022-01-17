import { axiosInstance } from "./axios";

const defaultEndpoint = "resource/content"
const assetsUri = "https://assets.folhavitoria.com.br/images"

export const getCoverItems = async (segment = null) => (
    await axiosInstance.get(`${defaultEndpoint}/cover-items.json?${buildSegmentsParams(segment)}`)
)

const buildSegmentsParams = (segments) => (
    segments.map(segment => `segment[]=${segment}`).join("&")
)

export const getImageUrl = async ({ position, crop_hash }) => {
    const positionConverted = position.replace(/\//g, ":")

    const response = await axiosInstance.get(
        `${defaultEndpoint}/cover-items/${positionConverted}/image.json`,
    )

    if (response.data.item) {
        const { base, extension } = response.data.item.file
        const cropHash = crop_hash ? `--${crop_hash}` : ''
        const imageUrl = `${assetsUri}/${base}${cropHash}.${extension}`

        return imageUrl
    }
}