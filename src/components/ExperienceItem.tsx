import Link from "next/link";

export interface ExperienceItemProps {
	link: string;
	name: string;
	role?: string;
	date: string;
	items?: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
	date,
	link,
	name,
	role = "Front-End Developer",
	items,
}) => {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between">
				<Link href={link} className="group" target="blank">
					<h3 className="font-serif text-xl font-semibold">
						{name}&nbsp;
						<i className="bi bi-arrow-up-right text-base transition-all group-hover:text-blue-500"></i>
					</h3>
				</Link>
				<p className="text-sm text-neutral-400">{date}</p>
			</div>
			<p className="mb-1 font-serif text-sm font-medium text-neutral-400">
				{role}
			</p>
			<ul className="list-disc pl-5 text-sm">
				{items?.length && items.map((item) => <li key={item}>{item}</li>)}
			</ul>
		</div>
	);
};

export default ExperienceItem;
