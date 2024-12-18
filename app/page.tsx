import GitHubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import { BorderBeam } from "@/components/ui/border-beam";
import ToggleTheme from "@/components/ui/LightDarkToggle";
import Meteors from "@/components/ui/meteors";
import ShineBorder from "@/components/ui/shine-border";

export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen w-full">
			<div className="w-full p-5 flex justify-center">
				<div className="flex items-center justify-center max-w-[500px] w-full space-x-4">
					<LinkedInIcon />
					<GitHubIcon />
					<ToggleTheme />
				</div>
			</div>

			<div className="flex flex-col items-center justify-center flex-1 w-full px-4">
				<div className="flex flex-col items-center justify-center space-y-5 w-full max-w-[500px]">
					<div className="relative flex h-[250px] md:h-[350px] lg:h-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
						<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
							Justin Teo
						</span>
						<Meteors />
						<BorderBeam size={250} duration={12} delay={9} />
            <p>Software Engineer - Penultimate CS student in SMU</p>
					</div>
					<ShineBorder
						className="relative flex h-[300px] md:h-[400px] lg:h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
						color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
					>
						<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
							Tech Stack
						</span>
					</ShineBorder>
				</div>
			</div>
		</div>
	);
}
