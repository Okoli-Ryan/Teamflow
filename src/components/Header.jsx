import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { BsChevronDown } from "react-icons/bs";
import { Popover } from "antd";
import { RiMenu2Fill } from "react-icons/ri";

export default function Header({ openSideBar }) {
	return (
		<>
			<div className="flex justify-between h-max py-4 items-center relative z-10 w-full ">
				<span className="flex md:hidden w-1/2 absolute top-4 " onClick={openSideBar}>
					<RiMenu2Fill size={24} className="text-white" />
				</span>
				<span className="md:flex lg:hidden hidden w-1/3 " onClick={openSideBar}>
					<RiMenu2Fill size={24} className="text-white" />
				</span>
				<div className="flex space-x-2 items-center justify-end text-center md:w-auto mx-auto md:mx-0">
					<img className="w-6 h-6" src={Logo} />
					<h3 className="text-white font-bold text-xl">TeamFlow</h3>
				</div>
				<div className="hidden lg:flex space-x-8 ">
					{HeaderMenu.map((item) => (
						<HeaderMenuItem {...item} />
					))}
				</div>
				<div className="space-x-4 hidden md:flex justify-end">
					<button className="btn btn-ghost">Login</button>
					<button className="btn btn-secondary">Sign up</button>
				</div>
			</div>
		</>
	);
}

export const HeaderMenuItem = (props) => {
	const { links, isDropdown, label, noHover } = props;

	const Content = (
		<div className="relative p-8 grid grid-cols-3 gap-x-8 gap-y-4 items-center ">
			{links &&
				links.map((link) => (
					<a
						href="#"
						className="hover:text-textPrimary text-textPrimary flex text-xs md:text-sm link">
						{link}
					</a>
				))}
		</div>
	);

	if (isDropdown && !noHover)
		return (
			<Popover content={Content} trigger="hover">
				{HeaderItem({ isDropdown, label })}
			</Popover>
		);

	return <HeaderItem isDropdown={isDropdown} label={label} />;
};

const HeaderItem = ({ isDropdown, label }) => (
	<span className="relative">
		<span className="flex items-center top-[3rem] space-x-1 text-white hover:-translate-y-[2px] transition-transform duration-150 cursor-pointer">
			<span className="font-light text-xs md:text-sm">{label}</span>
			<span>{isDropdown && <BsChevronDown size={14} />}</span>
		</span>
	</span>
);
export const HeaderMenu = [
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
