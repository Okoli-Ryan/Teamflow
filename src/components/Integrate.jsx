import React from "react";
import Integrate1 from "../assets/images/Integrate1.png";
import Integrate2 from "../assets/images/Integrate2.png";
import Integrate3 from "../assets/images/Integrate3.png";
import Integrate4 from "../assets/images/Integrate4.png";
import Integrate5 from "../assets/images/Integrate5.png";

export default function Integrate() {
	return (
		<div className="padding-container relative">
			<div className="w-full flex flex-col items-center gap-4 md:gap-12 mt-24">
				<h3 className="text-2xl md:text-4xl text-[#515151] font-semibold text-center">
					<span className="text-secondary text-center">Integrate </span>with your existing
					tools in a few clicks
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-8 md:gap-24 mt:8 md:mt-12">
					<img src={Integrate2} alt="" className="w-36 h-36 shadow-lg" />
					<img src={Integrate3} alt="" className="w-36 h-36 shadow-lg" />
					<img src={Integrate4} alt="" className="w-36 h-36 shadow-lg" />
					<img src={Integrate5} alt="" className="w-36 h-36 shadow-lg" />
				</div>
				<button className="btn btn-secondary">View All</button>
				<span className="w-2 h-2 rounded-full bg-primary absolute top-[30%] left-[30%] hidden md:block"></span>
				<span className="w-4 h-4 rounded-full bg-primary absolute right-[30%] bottom-4 hidden md:block"></span>
			</div>
		</div>
	);
}
