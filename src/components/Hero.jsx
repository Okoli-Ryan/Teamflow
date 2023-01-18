import React from "react";
import Header from "./Header";
import HeroImage1 from "../assets/images/Hero-image-1.png";
import HeroImage2 from "../assets/images/Hero-image-2.png";
import HeroCard2 from "../assets/images/Hero-card-2.svg";
import HeroCard1 from "../assets/images/Hero-card-1.svg";
import YellowMouse from "../assets/images/yellow-mouse.svg";

export default function Hero() {
	return (
		<div className="container">
			<div className="h-screen w-full relative flex flex-col">
				<Header />
				<div className="grid grid-cols-2 z-10  flex-1">
					<div className="flex flex-col justify-center">
						<span className="px-4 py-2 bg-white w-max rounded-md">
							<p className="text-lightgray">👋Welcome to TeamFlow</p>
						</span>
						<h3 className="text-white text-6xl font-bold mt-4 leading-[82px]">
							Work the way that works for you
						</h3>
						<span className="w-16 h-1 bg-customgreen my-12"></span>
						<h3 className="text-white text-2xl">
							Create, Build, Collaborate and ship products very faster{" "}
						</h3>
						<div className="flex mt-4">
							<button className="btn btn-secondary">Get Started</button>
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<div className="flex items-center">
							<div className="w-1/2">
								<img src={HeroImage1} className="w-auto h-auto bounce z-20" />
							</div>
							<div className="w-1/2 relative">
								<img src={HeroCard1} className="w-auto h-auto shadow-md  z-20" />
								<img
									src={YellowMouse}
									className="w-12 h-12 absolute right-[5%] -bottom-[1.5rem]  z-20"
								/>
							</div>
						</div>
						<div className="flex items-center">
							<div className="w-1/2">
								<img src={HeroCard2} className=" w-auto h-auto shadow-md  z-20" />
							</div>
							<div className="w-1/2 p-12">
								<img
									src={HeroImage2}
									className=" w-auto h-auto bounce bounce-delay  z-20"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
