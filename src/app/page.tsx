import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 py-20">
			<div className="md:col-span-3 flex flex-col gap-4">
				<div className="flex items-center gap-4 ">
					<Image
						alt="profile"
						src={"/personal-profile.jpeg"}
						width={100}
						height={100}
						className="rounded-full border border-solid border-neutral-100"
						quality={100}
					/>
					<div>
						<h1 className="text-xl font-bold">Kasra Bozorgmehr</h1>
						<p className="text-sm text-neutral-400">Front-End Developer</p>
						<Link
							href="mailto:dreamworld420@protonmail.com"
							className="text-blue-500 hover:underline"
						>
							Let's Talk
						</Link>
					</div>
				</div>
				<p className="text-neutral-300">
					Welcome to my space—where modern, responsive, and creative web
					experiences come to life.
				</p>
				<div className="flex gap-2 items-center">
					<div className="h-[1px] bg-neutral-100 grow"></div>
					<span>~</span>
					<div className="h-[1px] bg-neutral-100 grow"></div>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-lg font-semibold">Connect with me</h2>

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
			<div className="md:col-span-9"></div>
		</div>
	);
}
