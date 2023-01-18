import React from "react";
import LogoBlue from "../assets/images/logo-blue.svg";
import { IoLogoYoutube, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
	return (
		<div className="w-full px-8">
			<div className="grid grid-cols-6 w-full py-12 gap-8">
				<div className="col-span-2">
					<span className="flex space-x-2 items-center">
						<img src={LogoBlue} className="w-6 h-6" />
						<span className="text-primary font-bold text-xl">
							Team
							<span className="text-[#D77F3F]">Flow</span>
						</span>
					</span>
					<p className="mt-4 text-textLight">All Rights Reserved © teamflow.com</p>
					<div className="flex flex-col space-y-2 mt-12">
						<p className="text-textSecondary font-semibold">Address</p>
						<p className="text-textLight">26 W 12th St. New York, NY 10342, NYC</p>
					</div>
					<div className="flex flex-col space-y-2 mt-12">
						<p className="text-textSecondary font-semibold">Social Media</p>
						<span className="items-center flex space-x-4">
							<IoLogoFacebook className="w-6 h-6 text-[#373C59]" />
							<IoLogoInstagram className="w-6 h-6 text-[#373C59]" />
							<IoLogoTwitter className="w-6 h-6 text-[#373C59]" />
							<IoLogoYoutube className="w-6 h-6 text-[#373C59]" />
						</span>
					</div>
				</div>
				{footerLinks.map((footerColumn) => (
					<FooterLink {...footerColumn} />
				))}
			</div>
		</div>
	);
}

function FooterLink({ label, links }) {
	return (
		<div className="flex flex-col space-y-8">
			<p className="text-textPrimary font-semibold text-sm">{label}</p>
			<div className="flex flex-col space-y-4">
				{links.map((link) => (
					<a href="#" className="text-textPrimary flex text-sm link">
						<span className="flex items-center">{link}</span>
					</a>
				))}
			</div>
		</div>
	);
}

const footerLinks = [
	{
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
		label: "Team",
		links: ["About Us", "Contact Us", "Careers", "Find a Partner", "In the News"],
	},
	{
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
		label: "Resources",
		links: [
			"Knowledge Base",
			"Guides",
			"Daily Webinars",
			"Community",
			"Customer Sales",
			"Templates",
			"Professional Services",
			"Video Tutorials",
			"Blog",
			"Podcast",
		],
	},
];
