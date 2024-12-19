import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export default function GitHubIcon() {
	return (
		<a
			href="https://github.com/justintyf01"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Button
				className="rounded-full w-10 h-10 bg-background flex items-center justify-center"
				variant="outline"
				size="icon"
			>
				<FaGithub className="!w-[1.5rem] !h-[1.5rem] text-black dark:text-white" />
			</Button>
		</a>
	);
}
