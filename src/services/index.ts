import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.rss2json.com",
});

export default axiosInstance;

export const getRSSFeed = () => {
	return axiosInstance
		.get<{
			status: string;
			feed: {
				url: string;
				title: string;
				link: string;
				author: string;
				description: string;
				image: string;
			};
			items: Array<{
				title: string;
				pubDate: string;
				link: string;
				guid: string;
				author: string;
				thumbnail: string;
				description: string;
				categories: string[];
			}>;
		}>("/v1/api.json", {
			params: {
				rss_url: process.env.NEXT_PUBLIC_RSS_FEED,
			},
		})
		.then((res) => res.data);
};
