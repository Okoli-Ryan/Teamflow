import React from "react";
import Hulu from "../assets/images/hulu.png";
import Adobe from "../assets/images/adobe.png";
import BBC from "../assets/images/bbc.png";
import Universal from "../assets/images/universal.png";

export default function Clients() {
	return (
		<div className="padding-container">
			<div className="w-full px:0 xl:pl-[10%] xl:pr-[5%] flex flex-col gap-8 lg:flex-row justify-between py-16">
				<div className="relative w-full lg:w-1/3 lg:mx-0 mx-auto">
					<span className="text-[#515151] text-lg lg:text-2xl font-semibold top-line relative">
						See why over 100,000 teams choose TeamFlow.com
					</span>
				</div>
				<div className="w-full lg:w-2/3 flex space-x-4 lg:gap-x-12 lg:justify-end justify-between">
					<img src={Hulu} alt="hulu" className="w-[20%] lg:w-auto h-[60%]" />
					<img src={BBC} alt="BBC" className="w-[20%] lg:w-auto h-[60%]" />
					<img src={Universal} alt="Universal" className="w-[20%] lg:w-auto h-[60%]" />
					<img src={Adobe} alt="Adobe" className="w-[20%] lg:w-auto h-[60%]" />
				</div>
			</div>
		</div>
	);
}
