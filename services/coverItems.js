import { axiosInstance } from "./axios";

export const getCoverItems = async (segment = null) => (
    await axiosInstance.get(`resource/content/cover-items.json?${buildSegmentsParams(segment)}`)
)

const buildSegmentsParams = (segments) => (
    segments.map(segment => `segment[]=${segment}`).join("&")
)