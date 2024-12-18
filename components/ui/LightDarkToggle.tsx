"use client";
import { useTheme } from "next-themes";
import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "./tooltip";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function DarkLightToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<TooltipProvider disableHoverableContent>
			<Tooltip delayDuration={100}>
				<TooltipTrigger asChild>
					<Button
						className="rounded-full w-10 h-10 bg-background"
						variant="outline"
						size="icon"
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
					>
						<SunIcon className="w-[1.5rem] h-[1.5rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
						<MoonIcon className="absolute w-[1.5rem] h-[1.5rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
						<span className="sr-only">Switch Theme</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent side="bottom">Switch Theme</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
