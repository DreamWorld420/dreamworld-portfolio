"use client";

import { useMemo } from "react";

const AboutMe: React.FC = (props) => {
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
		<section className="flex flex-col gap-2">
			<h2 className="mb-2 border-b border-solid border-neutral-100 font-serif text-3xl font-bold">
				About Me
			</h2>
			<p>
				Hi, I’m Kasra, a <strong>{age}-year-old</strong> front-end developer who
				enjoys building <strong>clean and fast web apps</strong> with Next.js,
				TypeScript, and React. I like turning{" "}
				<strong>old code into something simple and easy to work with</strong>.
				Whether I’m working alone or with a team, I focus on writing{" "}
				<strong>clean code</strong> that everyone can understand and improve.
				Outside of work, I love{" "}
				<strong>learning new things and sharing what I know</strong> with
				others.
			</p>
		</section>
	);
};

export default AboutMe;
