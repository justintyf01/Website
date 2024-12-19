import { JSX } from "react";
import {
    FaReact, FaGithub,
    FaGitlab,
    FaDocker,
    FaPython,
    FaAws,
    FaJava,
    FaJs,
    FaGit,
    FaLinux
} from "react-icons/fa";
import {
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiKubernetes,
    SiNextdotjs,
    SiExpress,
    SiSpringboot,
    SiFlask,
    SiTypescript,
    SiGo,
    SiC,
    SiCircleci,
    SiGin
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface TechstackIconProps {
	iconSlugs: string[];
}

const techIconMap: Record<string, JSX.Element> = {
	// Programming Languages
	typescript: <SiTypescript className="text-blue-500" />,
	javascript: <FaJs className="text-yellow-500" />,
	java: <FaJava className="text-red-500" />,
	python: <FaPython className="text-yellow-400" />,
	go: <SiGo className="text-blue-400" />,
	c: <SiC className="text-blue-600" />,
	// Cloud Infra
	aws: <FaAws className="text-orange-500" />,
	kubernetes: <SiKubernetes className="text-blue-500" />,
	docker: <FaDocker className="text-blue-500" />,
	// Tools
	git: <FaGit className="text-orange-500" />,
	github: <FaGithub className="text-gray-500" />,
	gitlab: <FaGitlab className="text-orange-600" />,
	circleci: <SiCircleci className="text-black" />,
	linux: <FaLinux className="text-orange-500" />,
	postgresql: <SiPostgresql className="text-blue-700" />,
	mongodb: <SiMongodb className="text-green-600" />,
	mysql: <SiMysql className="text-blue-600" />,
	visualstudiocode: <VscVscode className="text-blue-400" />,
	// Frameworks
	nextjs: <SiNextdotjs className="text-gray-300" />,
	reactjs: <FaReact className="text-blue-500" />,
	expressjs: <SiExpress className="text-gray-500" />,
	gin: <SiGin className="text-green-500" />,
	springboot: <SiSpringboot className="text-green-600" />,
	flask: <SiFlask className="text-gray-500" />
};

// Function to render the icons dynamically
function renderTechstackIcons(iconSlugs: string[]) {
	return iconSlugs.map((slug, index) => (
		<div
			key={index}
			className="flex flex-col items-center justify-center p-2 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-auto"
		>
			<div className="text-2xl my-2">{techIconMap[slug] || "❓"}</div>
			<div className="text-sm text-center text-white dark:text-white">{slug}</div>
		</div>
	));
}

export default function TechstackIcon({ iconSlugs }: TechstackIconProps) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2 py-2 w-full">
			{renderTechstackIcons(iconSlugs)}
		</div>
	);
}