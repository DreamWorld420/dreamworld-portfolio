import Image from "next/image";
import Link from "next/link";

export interface ProjectItemProps {
	imageSrc: string;
	imageAlt: string;
	projectLink: string;
	title: string;
	body: string;
	labels?: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
	body,
	imageAlt,
	imageSrc,
	labels,
	projectLink,
	title,
}) => {
	return (
		<div className="flex min-h-fit flex-col gap-2">
			<div className="relative aspect-video min-w-full border border-solid border-neutral-100">
				<Image fill alt={imageAlt} src={imageSrc} quality={100} />
			</div>
			<div className="flex min-h-fit flex-col gap-1">
				<Link href={projectLink} target="blank" className="group">
					<h3 className="font-serif text-xl font-semibold">
						{title}&nbsp;
						<i className="bi bi-arrow-up-right text-base transition-all group-hover:text-blue-500"></i>
					</h3>
				</Link>
				<p className="min-h-fit text-neutral-300">{body}</p>
				{labels?.length && (
					<div className="flex gap-2">
						{labels.map((item) => {
							return (
								<div
									className="rounded-3xl border border-solid border-blue-200 bg-blue-200 bg-opacity-15 px-2 text-sm font-bold text-blue-200"
									key={item}
								>
									{item}
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectItem;
