import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
	return (
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
	);
};

export default Projects;
