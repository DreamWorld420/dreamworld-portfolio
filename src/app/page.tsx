"use client";

import { useMemo } from "react";

import Image from "next/image";
import Link from "next/link";

import ProjectItem from "@/components/ProjectItem";

export default function Home() {
	const age = useMemo(() => {
		const birthDate = new Date(2000, 5, 11);
		const now = new Date();

		let years = now.getFullYear() - birthDate.getFullYear();
		const hasHadBirthdayThisYear =
			now.getMonth() > birthDate.getMonth() ||
			(now.getMonth() === birthDate.getMonth() &&
				now.getDate() >= birthDate.getDate());

		if (!hasHadBirthdayThisYear) {
			years--;
		}

		return years;
	}, []);

	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center">
			<div className="mx-auto grid h-full max-w-screen-lg grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12">
				<div className="flex max-h-[560px] flex-col gap-4 md:col-span-4">
					<div className="flex items-center gap-4">
						<Image
							alt="profile"
							src="/personal-profile.jpeg"
							width={100}
							height={100}
							className="rounded-full border border-solid border-neutral-100"
							quality={100}
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

				<div className="hide-scrollbar flex max-h-[calc(100vh_-_80px)] flex-col gap-8 overflow-auto md:col-span-8">
					<section className="flex flex-col gap-2">
						<h2 className="mb-2 border-b border-solid border-neutral-100 font-serif text-3xl font-bold">
							About Me
						</h2>
						<p>
							Hi, I’m Kasra, a <strong>{age}-year-old</strong> front-end
							developer who enjoys building{" "}
							<strong>clean and fast web apps</strong> with Next.js, TypeScript,
							and React. I like turning{" "}
							<strong>
								old code into something simple and easy to work with
							</strong>
							. Whether I’m working alone or with a team, I focus on writing{" "}
							<strong>clean code</strong> that everyone can understand and
							improve. Outside of work, I love{" "}
							<strong>learning new things and sharing what I know</strong> with
							others.
						</p>
					</section>
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
				</div>
			</div>
		</div>
	);
}
