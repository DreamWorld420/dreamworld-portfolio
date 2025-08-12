import Image from "next/image";
import Link from "next/link";

import AboutMe from "@/components/AboutMe";
import BlogFeed from "@/components/BlogFeed";
import ExperienceItem from "@/components/ExperienceItem";
import Projects from "@/components/Projects";
import { getRSSFeed } from "@/services";

export default async function Home() {
	let blogFeed;
	try {
		blogFeed = await getRSSFeed();
	} catch {
		blogFeed = null;
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
						Experience
					</h2>
					<div className="flex flex-col gap-2">
						<ExperienceItem
							name="CanDo"
							link="https://cando.ac/"
							date="Jan. 2025 ‐ Present"
							items={[
								"Refactored legacy student and teacher panels using React, Next.js, and TypeScript, improving UI performance by 35%",
								"Optimized front‐end rendering, reducing page load times by 45%.",
								"Standardized code practices, decreasing bug frequency by 30%",
								"Collaborated with stakeholders to prioritize features, improving development efficiency by 25%.",
							]}
						/>
						<ExperienceItem
							name="Nercidev"
							link="https://www.google.com/url?sa=D&q=https://web.archive.org/web/20241006162417/http://nercidev.com/&ust=1755087600000000&usg=AOvVaw0otjZpPb7DmIRipXtfmrk3&hl=en"
							date="Nov. 2023 – Jan. 2025"
							items={[
								"Built multiple CRM dashboards and modernized a fragile legacy codebase using Next.js and TypeScript, improving system stability by 30%.",
								"Streamlined team workflows, helping deliver projects 20% faster.",
								"Maintained and fixed legacy code from multiple developers, reducing recurring bugs by 25%.",
								"Worked closely with designers to ensure pixel‐perfect, user‐friendly interfaces.",
							]}
						/>
						<ExperienceItem
							name="SeBuDA"
							link="https://sebuda.com/"
							date="Jan. 2022 – Nov. 2023"
							items={[
								"Added multi‐language support, reaching 5+ markets and increasing sign‐ups by 20%.",
								"Enabled multi‐currency, handling 10+ currencies and boosting sales by 18%.",
								"Built WebSocket escrow, cutting processing time by 50% and ensuring 99.9% uptime.",
								"Created admin/user panels, reducing task time by 45% and raising productivity.",
								"Improved technical SEO, increasing organic traffic 25% in six months.",
								"Refactored a legacy codebase to improve performance by 35%",
							]}
						/>
						<ExperienceItem
							name="Cygen"
							link="https://cygenco.com/"
							date="Apr. 2021 – Jan. 2022"
							items={[
								"Built and optimized features using React, Next.js, and TypeScript, improving speed by 25%.",
								"Refactored legacy code, reducing bugs by 30% and improving maintainability.",
								"Updated older projects in HTML/CSS/JS, reducing cross‐browser issues by 40%.",
								"Collaborated with designers and stakeholders to deliver features on time and to spec.",
							]}
						/>
						<ExperienceItem
							name="Avangard Tech"
							link="https://avangardtech.com/"
							date="Mar. 2020 – Apr. 2021"
							items={[
								"Built websites using Next.js and TypeScript, meeting 100% of client deadlines.",
								"Optimized site performance, reducing load times by 40% and improving Core Web Vitals scores.",
								"Implemented SEO best practices, increasing organic traffic by up to 25% for client sites.",
								"Collaborated directly with clients to align deliverables with business goals.",
							]}
						/>
						<ExperienceItem
							name="Freelancing"
							link="https://dreamworld-protfolio.netlify.app/"
							date="Jun. 2019 – Mar. 2020"
							items={[
								"Developed websites using React and TypeScript.",
								"Delivered custom web solutions aligned with client requirements.",
								"Integrated REST APIs and third‐party services.",
								"Optimized for SEO, accessibility, and performance.",
								"Provided support, troubleshooting, and feature updates.",
							]}
						/>
					</div>
				</section>
				<BlogFeed blogFeed={blogFeed} />
				<Projects />
			</div>
		</div>
	);
}
