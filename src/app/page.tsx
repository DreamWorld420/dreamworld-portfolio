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
								"Refactored and modernized legacy student and teacher panels by upgrading outdated technologies and restructuring UI logic, improving Lighthouse performance scores from 68 to 88 and reducing key render times by ~1.5 seconds.",
								"Implemented lazy loading and rendering optimizations, decreasing Largest Contentful Paint (LCP) by ~40% across main dashboard pages.",
								"Established consistent coding standards with a custom ESLint and Prettier configuration.",
								"Collaborated with the CEO and admin staff in agile sprints to prioritize high-impact features.",
								"Worked with the design team to establish design standards, cutting front-end design-to-development time.",
							]}
						/>
						<ExperienceItem
							name="Nercidev"
							link="https://web.archive.org/web/20241006162417/http://nercidev.com/"
							date="Nov. 2023 – Jan. 2025"
							items={[
								"Developed and deployed 12 CRM dashboards for both admin and user-facing panels using Next.js and TypeScript, replacing outdated codebases while improving load times by ~35% through tree shaking and bundle size optimization.",
								"Integrated a centralized design system and reusable UI components, ensuring consistent branding and reducing time-to-deliver for new features.",
								"Implemented automated testing along with ESLint, Prettier, and Husky configurations.",
								"Collaborated with in-house and client design teams to deliver pixel-perfect, responsive, and accessible interfaces across all dashboards.",
							]}
						/>
						<ExperienceItem
							name="SeBuDA"
							link="https://sebuda.com/"
							date="Jan. 2022 – Nov. 2023"
							items={[
								"Implemented multi-language support for over 6 languages, including RTL languages such as Arabic and Persian, expanding the product’s reach to multiple international markets.",
								"Integrated multi-currency handling for over 6 currencies (EUR, USD, Indian Rupee, Ruble, etc.) using Recoil.js for efficient state management in a complex pricing environment.",
								"Built a WebSocket-based escrow system to enable real-time transaction status updates, improving reliability and user trust.",
								"Maintained legacy admin and user panels before rebuilding them from scratch, resulting in improved user productivity and streamlined workflows.",
								"Led comprehensive technical SEO improvements, including fixing 4xx and 5xx error pages, which contributed to the product reaching the first page of Google search results for key terms.",
								"Refactored the entire legacy codebase, enhancing performance by approximately 35% as measured by Lighthouse scores.",
							]}
						/>
						<ExperienceItem
							name="Cygen"
							link="https://cygenco.com/"
							date="Apr. 2021 – Jan. 2022"
							items={[
								"Developed 5 dashboards and landing pages using React, Next.js, and TypeScript, while also maintaining and fixing legacy projects involving pure HTML, CSS, and JavaScript.",
								"Refactored legacy codebases to improve maintainability and reduce issues such as responsive bugs and application crashes, supported by automated testing and linting practices.",
								"Updated and fixed cross-browser compatibility issues across 5+ projects, enhancing user experience and reliability.",
								"Collaborated closely with product managers and clients using Jira within an Agile development process to deliver features on time and according to specifications.",
							]}
						/>
						<ExperienceItem
							name="Avangard Tech"
							link="https://avangardtech.com/"
							date="Mar. 2020 – Apr. 2021"
							items={[
								"Developed 3 dashboards and landing pages using Next.js and TypeScript, implementing performance optimizations such as lazy loading that improved real user load times on key projects.",
								"Optimized site performance, reducing load times by up to 40% and improving Core Web Vitals scores as measured by Lighthouse.",
								"Collaborated directly with clients through meetings and calls to align deliverables with business goals, delivering projects on schedule within an Agile team.",
							]}
						/>
						<ExperienceItem
							name="Freelancing"
							link="https://dreamworld-protfolio.netlify.app/"
							date="Jun. 2019 – Mar. 2020"
							items={[
								"Developed custom dashboards and P2P platforms for 2 clients in the gaming services industry using React and TypeScript.",
								"Built dynamic, responsive forms and interfaces tailored to client requirements.",
								"Integrated REST APIs and third-party services to enable essential business functionalities.",
								"Focused on optimizing website performance and user experience.",
								"Provided ongoing support and feature updates, collaborating with other freelancers to meet client needs.",
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
