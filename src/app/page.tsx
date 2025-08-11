import Image from "next/image";
import Link from "next/link";

import AboutMe from "@/components/AboutMe";
import ProjectItem from "@/components/ProjectItem";
import { getRSSFeed } from "@/services";

export default async function Home() {
	let blogFeed;
	try {
		blogFeed = await getRSSFeed();
	} catch {
		blogFeed = null;
	}

	function formatDate(date: Date) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}/${month}/${day}`;
	}

	return (
		<div className="hide-scrollbar mx-auto grid h-screen max-w-screen-lg grid-cols-1 gap-10 overflow-auto px-6 py-10 md:grid-cols-12 md:py-20">
			<div className="flex flex-col gap-4 md:col-span-4 md:max-h-[560px]">
				<div className="flex items-center gap-4">
					<Image
						alt="profile"
						src="/personal-profile.jpeg"
						width={100}
						height={100}
						className="rounded-full border border-solid border-neutral-100"
						quality={100}
						priority
					/>
					<div>
						<h1 className="font-serif text-xl font-bold">Kasra Bozorgmehr</h1>
						<p className="font-serif text-sm font-medium text-neutral-400">
							Front-End Developer
						</p>
						<Link
							href="mailto:dreamworld420@protonmail.com"
							className="text-blue-500 hover:underline"
						>
							Let&apos;s Talk
						</Link>
					</div>
				</div>
				<p className="text-neutral-300">
					Welcome to my space—where modern, responsive, and creative web
					experiences come to life.
				</p>
				<Link
					href="https://drive.google.com/file/d/1xXs4MIrT4nsTddvL_HQp1pnufTgY_bEg/view?usp=sharing"
					target="blank"
					className="w-full"
					download
				>
					<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 py-2 font-bold transition-all hover:bg-blue-700">
						<i className="bi bi-download"></i>
						Download Resume
					</button>
				</Link>

				<div className="flex items-center gap-2">
					<div className="h-[1px] grow bg-neutral-100"></div>
					<span>~</span>
					<div className="h-[1px] grow bg-neutral-100"></div>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="mb-2 font-serif text-lg font-semibold">
						Connect With Me
					</h2>

					<div className="flex items-center gap-2">
						<i className="bi bi-linkedin"></i>
						<Link
							href="https://www.linkedin.com/in/kasra-bozorgmehr/"
							className="hover:underline"
						>
							Linkedin
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<i className="bi bi-github"></i>
						<Link
							href="https://github.com/DreamWorld420"
							className="hover:underline"
						>
							Github
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<i className="bi bi-stack-overflow"></i>
						<Link
							href="https://stackoverflow.com/users/11162007/kasra?tab=profile"
							className="hover:underline"
						>
							Stackoverflow
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<i className="bi bi-envelope-fill" />
						<Link
							href="mailto:dreamworld420@protonmail.com"
							className="hover:underline"
						>
							dreamworld420@protonmail.com
						</Link>
					</div>
				</div>
			</div>

			<Link
				href="#detail"
				className="my-10 flex animate-bounce items-center justify-center text-[40px] md:hidden"
			>
				<i className="bi bi-chevron-down"></i>
			</Link>

			<div
				id="detail"
				className="hide-scrollbar flex h-fit flex-col gap-8 overflow-auto pb-10 md:col-span-8 md:max-h-[calc(100vh_-_80px)] md:pb-20 md:pt-0"
			>
				<AboutMe />
				<section className="flex flex-col gap-2">
					<h2 className="mb-2 border-b border-solid border-neutral-100 font-serif text-3xl font-bold">
						Projects
					</h2>
					<div className="flex flex-col gap-10">
						<ProjectItem
							title="Triangle Studio"
							body="A creative media studio based in Vienna specializing in
										photography, video production, and 360° virtual tours.
										Developed a modern, responsive website using React.js and
										Tailwind CSS to showcase their portfolio and improve client
										engagement"
							projectLink="https://trianglestudio.org/"
							imageAlt="triangle_studio"
							imageSrc="/triangle_studio.png"
							labels={["React", "Framer Motion", "Tailwind CSS"]}
						/>
						<ProjectItem
							title="DigiProxy"
							body="A platform offering secure, high‑speed proxies for privacy
										and performance. Built a responsive Next.js interface with
										Tailwind CSS, optimizing UX for account management and
										subscription flows."
							projectLink="https://digiproxy.cc/"
							imageAlt="digiproxy"
							imageSrc="/digiproxy.png"
							labels={["React", "Next.js", "Tailwind CSS"]}
						/>

						<ProjectItem
							title="DigiProxy Dashboard"
							body="Developed a secure and responsive user dashboard for managing proxy subscriptions, built with React.js, Next.js and Tailwind CSS. Implemented optimized API integration and state management."
							projectLink="https://dashboard.digiproxy.cc/sign-in"
							imageAlt="digiproxy dashboard"
							imageSrc="/digiproxy_dashboard.png"
							labels={["React", "Next.js", "Framer Motion", "Tailwind CSS"]}
						/>
						<ProjectItem
							title="Resi.GG"
							body="A privacy‑focused service enabling secure internet access through alternate IP addresses. Developed a responsive marketing website using Next.js and Tailwind CSS to highlight features and improve conversion."
							projectLink="https://resi.gg/"
							imageAlt="resi.gg"
							imageSrc="/resi_gg.png"
							labels={["React", "Next.js", "Framer Motion", "Tailwind CSS"]}
						/>
						<ProjectItem
							title="Resi.GG Dashboard"
							body="Built a dynamic user dashboard for proxy management and subscription controls using React.js, Next.js and Tailwind CSS, improving usability and reducing account setup time by 25%."
							projectLink="https://dashboard.resi.gg/login"
							imageAlt="resi.gg dashboard"
							imageSrc="/resi_gg_dashboard.png"
							labels={["React", "Next.js", "Framer Motion", "Tailwind CSS"]}
						/>
						<ProjectItem
							title="Heavens Proxy"
							body="A high‑performance proxy service offering reliable and cost‑effective IP solutions for anonymous web crawling. Built a responsive Next.js platform with Tailwind CSS, improving onboarding flow and subscription management UX."
							projectLink="https://hproxy.com/"
							imageAlt="Heavens Proxy"
							imageSrc="/hproxy.png"
							labels={["React", "Next.js", "Framer Motion", "Tailwind CSS"]}
						/>
						<ProjectItem
							title="TrustProxy"
							body="A premium proxy solution providing fast, secure, and anonymous browsing through a vast IP pool. Built a responsive Next.js website with Tailwind CSS, enhancing SEO performance and user engagement."
							projectLink="https://trustproxy.io/"
							imageAlt="TrustProxy"
							imageSrc="/tproxy.png"
							labels={["React", "Next.js", "Framer Motion", "Tailwind CSS"]}
						/>
					</div>
				</section>
				{blogFeed && blogFeed?.items?.length && (
					<section className="flex flex-col gap-2">
						<h2 className="mb-2 border-b border-solid border-neutral-100 font-serif text-3xl font-bold">
							Blog
						</h2>
						<div className="flex flex-col gap-2">
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
				)}
			</div>
		</div>
	);
}
