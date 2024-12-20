import { FlipWords } from "./flip-words";

interface DynamicTextProps {
	words: string[];
}

export default function DynamicText({ words }: DynamicTextProps) {
	return (
		<div className="my-4 flex justify-center items-center px-4">
			<div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
				I&apos;m a
				<FlipWords words={words} duration={1500} /> <br />
			</div>
		</div>
	);
}
