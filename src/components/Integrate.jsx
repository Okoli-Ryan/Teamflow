import React from "react";
import Integrate1 from "../assets/images/Integrate1.png";
import Integrate2 from "../assets/images/Integrate2.png";
import Integrate3 from "../assets/images/Integrate3.png";
import Integrate4 from "../assets/images/Integrate4.png";
import Integrate5 from "../assets/images/Integrate5.png";

export default function Integrate() {
	return (
		<div className="container relative">
			<div className="w-full flex flex-col items-center space-y-12 mt-24">
				<h3 className="text-4xl text-[#515151] font-semibold">
					Our
					<span className="text-secondary"> Features</span>
				</h3>
				<div className="flex justify-center space-x-24 mt-12">
					<img src={Integrate2} alt="" className="w-36 h-36 shadow-lg" />
					<img src={Integrate3} alt="" className="w-36 h-36 shadow-lg" />
					<img src={Integrate4} alt="" className="w-36 h-36 shadow-lg" />
					<img src={Integrate5} alt="" className="w-36 h-36 shadow-lg" />
				</div>
				<button className="btn btn-secondary">View All</button>
				<span className="w-2 h-2 rounded-full bg-primary absolute top-[30%] left-[30%]"></span>
				<span className="w-4 h-4 rounded-full bg-primary absolute right-[30%] bottom-4"></span>
			</div>
		</div>
	);
}
