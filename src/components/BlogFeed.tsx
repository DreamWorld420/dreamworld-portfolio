import Link from "next/link";

export interface BlogFeedProps {
	blogFeed: {
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
	} | null;
}

const BlogFeed: React.FC<BlogFeedProps> = ({ blogFeed }) => {
	function formatDate(date: Date) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}/${month}/${day}`;
	}

	return (
		blogFeed &&
		blogFeed?.items?.length && (
			<section className="flex flex-col gap-2">
				<h2 className="mb-2 border-b border-solid border-neutral-100 font-serif text-3xl font-bold">
					Blog Posts
				</h2>
				<div className="flex flex-col gap-4">
					{blogFeed.items.map(({ title, pubDate, link, categories }) => (
						<Link key={title} href={link} target="blank" className="group">
							<div className="flex flex-col gap-1">
								<p className="text-sm text-neutral-300">
									{formatDate(new Date(pubDate))}
								</p>
								<h3 className="font-serif text-xl font-semibold">
									{title}{" "}
									<i className="bi bi-arrow-up-right text-base transition-all group-hover:text-blue-500"></i>
								</h3>
								{categories.length && (
									<div className="mt-1 flex flex-wrap gap-2">
										{categories.map((item) => {
											return (
												<div
													className="text-nowrap rounded-3xl border border-solid border-blue-200 bg-blue-200 bg-opacity-15 px-2 text-xs font-bold text-blue-200 md:text-sm"
													key={item}
												>
													{item}
												</div>
											);
										})}
									</div>
								)}
							</div>
						</Link>
					))}
				</div>
			</section>
		)
	);
};

export default BlogFeed;
