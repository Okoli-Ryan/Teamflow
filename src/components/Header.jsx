import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { BsChevronDown } from "react-icons/bs";
import Fade from "react-reveal/Fade";

export default function Header() {
	return (
		<div className="flex justify-between h-max py-4 items-center relative z-10">
			<div className="flex space-x-2 items-center">
				<img className="w-6 h-6" src={Logo} />
				<h3 className="text-white font-bold text-xl">TeamFlow</h3>
			</div>
			<div className="flex space-x-8">
				{HeaderMenu.map((item) => (
					<HeaderMenuItem {...item} />
				))}
			</div>
			<div className="flex space-x-4">
				<button className="btn btn-ghost">Login</button>
				<button className="btn btn-secondary">Sign up</button>
			</div>
		</div>
	);
}

const HeaderMenuItem = (props) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const { links, isDropdown, label } = props;

	return (
		<span
			className="relative"
			onMouseLeave={() => setShowDropdown(false)}
			onMouseEnter={() => setShowDropdown(true)}>
			<span className="flex items-center space-x-2 text-white hover:-translate-y-[2px] transition-transform duration-150 cursor-pointer">
				<span className="font-light">{label}</span>
				<span>{isDropdown && <BsChevronDown size={14} />}</span>
			</span>
			<div
				className=""
				onMouseLeave={() => setShowDropdown(false)}
				onMouseEnter={() => setShowDropdown(true)}>
				<Fade when={showDropdown && isDropdown}>
					<div className="absolute rounded-md shadow-md bg-white z-[120] ">
						<div className="relative p-8 grid grid-cols-3 gap-x-8 gap-y-4 w-max">
							{links &&
								links.map((link) => (
									<a href="#" className="text-textPrimary flex text-sm link">
										<span className="flex items-center">{link}</span>
									</a>
								))}
						</div>
					</div>
				</Fade>
			</div>
		</span>
	);
};

const HeaderMenu = [
	{
		isDropdown: true,
		label: "Product",
		links: [
			"Product",
			"Pricing",
			"Enterprise",
			"Partners",
			"Affiliate",
			"Integrations",
			"Developers",
			"Students",
			"Work OS",
		],
	},
	{
		isDropdown: true,
		label: "Solutions",
		links: [
			"Project Management",
			"Marketing",
			"CRM and Sales",
			"Software Development",
			"Constructions",
			"Creative Production",
			"Remote Work",
			"HR",
			"IT",
			"See More Solutions",
		],
	},
	{
		label: "Enterprise",
	},
	{
		label: "Pricing",
	},
];
