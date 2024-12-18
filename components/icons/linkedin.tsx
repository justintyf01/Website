import { Button } from "../ui/button";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedInIcon() {
	return (
		<a
			href="https://www.linkedin.com/in/justintyf/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Button
				className="rounded-full w-10 h-10 bg-background flex items-center justify-center"
				variant="outline"
				size="icon"
			>
				<FaLinkedin className="!w-[1.5rem] !h-[1.5rem]" />
			</Button>
		</a>
	);
}
