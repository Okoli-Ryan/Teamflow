import React from "react";
import { HiMail } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Support() {
	return (
		<div className="padding-container py-24">
			<div className="w-full flex flex-col items-center gap-12">
				<div>
					<h3 className="text-lg md:text-xl text-secondary font-semibold text-center">
						Support
					</h3>
					<h3 className="text-textPrimary text-xl md:text-3xl font-semibold text-center mt-2">
						Subscribe to Newsletter & Get
					</h3>
					<h3 className="text-lg text-textPrimary md:text-3xl text-center mt-2">
						Company News
					</h3>
				</div>
				<div className="relative w-full max-w-sm">
					<input className="focus:border-0 active:border-0 focus:outline-none active:outline-none text-sm pl-10 pr-20 py-3 shadow-xl rounded-[10px] bg-white text-textPrimary w-full" />
					<span className="absolute h-full top-[12px] left-3">
						<HiMail size={20} className="text-lightgray" />
					</span>
					<button className="!px-3 !py-2 btn bg-primary !absolute right-2 top-[6.5px]">
						<span className="flex space-x-2 items-center">
							<span>
								<RiSendPlaneFill className="text-white" />
							</span>
							<span className="text-white text-xs">Subscribe</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
