import React from "react";
import Hulu from "../assets/images/hulu.png";
import Adobe from "../assets/images/adobe.png";
import BBC from "../assets/images/bbc.png";
import Universal from "../assets/images/universal.png";

export default function Clients() {
	return (
		<div className="container">
			<div className="w-full pl-[10%] pr-[5%] flex justify-between py-16">
				<div className="relative w-1/3">
					<span className="h-1 w-12 bg-secondary absolute -top-2 "></span>
					<span className="text-[#515151] text-2xl font-semibold">
						See why over 100,000 teams choose TeamFlow.com
					</span>
				</div>
				<div className="w-2/3 flex space-x-12 justify-end">
					<img src={Hulu} alt="hulu" className="w-auto h-[60%]" />
					<img src={BBC} alt="hulu" className="w-auto h-[60%]" />
					<img src={Universal} alt="hulu" className="w-auto h-[60%]" />
					<img src={Adobe} alt="hulu" className="w-auto h-[60%]" />
				</div>
			</div>
		</div>
	);
}
