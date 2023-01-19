import { useState } from "react";
import "./App.css";
import "./styles/index.css";
import Hero from "./components/Hero";
import Circle from "./assets/images/circle.svg";
import Triangle from "./assets/images/triangle.svg";
import Square from "./assets/images/square.svg";
import GreenMouse from "./assets/images/green-mouse.svg";
import Body from "./components/Body";
import { HeaderMenu, HeaderMenuItem } from "./components/Header";

function App() {
	return (
		<div className="w-full relative bg-[#FAFAFF]">
			<div className=" bg-blueBg  outer-hero-mobile sm:outer-hero w-[65%] h-screen absolute z-10">
				<img src={Circle} className="absolute w-6 h-6 top-[25%] left-[40%] z-20" />
				<img src={GreenMouse} className="absolute w-12 h-12 top-[50%] right-[30%] z-20" />
				<img src={Square} className="absolute w-6 h-6 top-[20%] right-[30%] z-20" />
				<img src={Triangle} className="absolute w-6 h-6 top-[60%] left-[45%] z-20" />
				<div className="inner-hero flex justify-end p-4"></div>
			</div>
			<div className="w-full flex flex-col items-center">
				<Hero />
				<Body />
			</div>
		</div>
	);
}

export default App;
