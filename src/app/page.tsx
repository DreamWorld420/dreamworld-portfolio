"use client";

import { useMemo } from "react";

import Image from "next/image";
import Link from "next/link";

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
			<div className="mx-auto grid h-full max-w-screen-lg grid-cols-1 gap-10 px-6 pt-20 md:grid-cols-12">
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
					<div className="flex items-center gap-2">
						<div className="h-[1px] grow bg-neutral-100"></div>
						<span>~</span>
						<div className="h-[1px] grow bg-neutral-100"></div>
					</div>
					<p>About Me</p>
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
							Skills
						</h2>
						<div className="grid w-full grid-cols-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="100px"
								height="100px"
								className="w-full transition-all ease-out hover:scale-110"
							>
								<path fill="#ffd600" d="M6,42V6h36v36H6z" />
								<path
									fill="#000001"
									d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0 0 48 48"
								className="w-full transition-all ease-out hover:scale-110"
							>
								<rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
								<polygon
									fill="#fff"
									points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
								></polygon>
								<path
									fill="#fff"
									d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
								></path>
							</svg>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
