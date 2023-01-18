import React from "react";

export default function Description({ reverse, src, HoverElement, title, desc, bgColor, Footer }) {
	return (
		<div className={`container ${bgColor || "bg-[#FAFAFF]"}`}>
			<div
				className={`flex gap-16 items-center ${reverse ? "flex-row-reverse" : "flex-row"}`}>
				<div className="w-1/2 h-max relative p-16">
					<img src={src} className="w-full h-auto" />
					{HoverElement && <HoverElement />}
				</div>
				<div className="w-1/2 flex flex-col space-y-4">
					<h3 className="text-[#515151] text-4xl font-semibold expand cursor-default">
						{title}
					</h3>
					<span className="h-1 w-16 bg-secondary"></span>
					<p>{desc}</p>
					{Footer && <Footer />}
				</div>
			</div>
		</div>
	);
}
