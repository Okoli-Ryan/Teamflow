import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { BsChevronDown } from "react-icons/bs";
import { Popover } from "antd";
import { RiMenu2Fill } from "react-icons/ri";

export default function Header() {
	return (
		<div className="flex justify-between h-max py-4 items-center relative z-10">
			<span className="flex sm:hidden">
				<RiMenu2Fill size={24} className="text-white" />
			</span>
			<div className="flex space-x-2 items-center">
				<img className="w-6 h-6" src={Logo} />
				<h3 className="text-white font-bold text-xl">TeamFlow</h3>
			</div>
			<div className="hidden sm:flex space-x-8">
				{HeaderMenu.map((item) => (
					<HeaderMenuItem {...item} />
				))}
			</div>
			<div className="hidden sm:flex">
				<div className="flex space-x-4">
					<button className="btn btn-ghost">Login</button>
					<button className="btn btn-secondary">Sign up</button>
				</div>
			</div>
		</div>
	);
}

const HeaderMenuItem = (props) => {
	const { links, isDropdown, label } = props;

	const Content = (
		<div className="relative p-8 grid grid-cols-3 gap-x-8 gap-y-4 items-center ">
			{links &&
				links.map((link) => (
					<a
						href="#"
						className="hover:text-textPrimary text-textPrimary flex text-sm link">
						{link}
					</a>
				))}
		</div>
	);

	const HeaderItem = () => (
		<span className="relative">
			<span className="flex items-center top-[3rem] space-x-2 text-white hover:-translate-y-[2px] transition-transform duration-150 cursor-pointer">
				<span className="font-light">{label}</span>
				<span>{isDropdown && <BsChevronDown size={14} />}</span>
			</span>
		</span>
	);

	if (isDropdown)
		return (
			<Popover content={Content} trigger="hover">
				{HeaderItem()}
			</Popover>
		);

	return <HeaderItem />;
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
