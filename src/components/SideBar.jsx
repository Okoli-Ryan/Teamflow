import React, { useLayoutEffect } from "react";
import { HeaderMenu } from "./Header";
import { Collapse } from "antd";
import { BsChevronDown } from "react-icons/bs";

const { Panel } = Collapse;

export default function SideBar({ isOpen, closeSidebar }) {
	useLayoutEffect(() => {
		if (isOpen) document.getElementById("root").style.position = "fixed";
		else {
			document.getElementById("root").style.position = "static";
		}
	}, [isOpen]);

	return (
		<div className={`h-screen w-full flex fixed z-[200] transition-all duration-700 `}>
			<div
				// onBlur={closeSidebar}
				className={`relative flex flex-col gap-8 bg-primary h-full w-2/3 p-8 max-w-[15rem] overflow-y-auto transition-all duration-700 ${
					isOpen ? "slideIn" : "slideOut"
				}`}>
				{HeaderMenu.map((item) => (
					<SidebarItem {...item} noHover />
				))}
			</div>
			<div
				className={`transition-all bg-black/25  duration-700 flex flex-1 ${
					isOpen ? "fadeIn" : "fadeOut"
				}`}
				onClick={closeSidebar}></div>
		</div>
	);
}

const SidebarItem = ({ isDropdown, label, links }) => {
	if (isDropdown)
		return (
			<Collapse ghost accordion>
				<Panel
					showArrow={false}
					header={<SidebarOptionComponent isDropdown={isDropdown} label={label} />}>
					<div className="flex flex-col gap-4">
						{links.map((link) => (
							<a
								href="#"
								className="hover:text-textPrimary text-white flex text-xs md:text-sm font-Nunito link">
								{link}
							</a>
						))}
					</div>
				</Panel>
			</Collapse>
		);

	return <SidebarOptionComponent isDropdown={isDropdown} label={label} />;
};

const SidebarOptionComponent = ({ isDropdown, label }) => {
	return (
		<span className="relative">
			<span className="flex items-center top-[3rem] space-x-1 text-white hover:-translate-y-[2px] transition-transform duration-150 cursor-pointer font-Nunito">
				<span className="font-light text-xs md:text-sm">{label}</span>
				<span>{isDropdown && <BsChevronDown size={14} />}</span>
			</span>
		</span>
	);
};
