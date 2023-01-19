import React from "react";

export default function Description({ reverse, src, HoverElement, title, desc, bgColor, Footer }) {
	return (
		<div className={`padding-container md:gap-8 ${bgColor || "bg-[#FAFAFF]"}`}>
			<div
				className={`flex gap-8 md:gap-16 items-center ${
					reverse ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"
				}`}>
				<div className="w-full md:w-1/2 h-max relative p-4 md:p-16">
					<img src={src} className="w-full h-auto" />
					{HoverElement && <HoverElement />}
				</div>
				<div className="w-full md:w-1/2 flex flex-col gap-4">
					<h3 className="text-[#515151] text-2xl md:text-4xl font-semibold expand cursor-default">
						{title}
					</h3>
					<span className="h-1 w-16 bg-secondary"></span>
					<p className="text-sm md:text-base leading-6">{desc}</p>
					{Footer && <Footer />}
				</div>
			</div>
		</div>
	);
}
