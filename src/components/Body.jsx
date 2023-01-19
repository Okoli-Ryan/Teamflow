import React from "react";
import Clients from "./Clients";
import WhatYouCanDo from "./WhatYouCanDo";
import Features from "./Features";
import Integrate from "./Integrate";
import Features2 from "./Features2";
import Testimonials from "./Testimonials";
import Support from "./Support";
import Footer from "./Footer";

export default function Body() {
	return (
		<>
			<Clients />
			<WhatYouCanDo />
			<Features />
			<Integrate />
			<Features2 />
			<Testimonials />
			<Support />
			<Footer />
		</>
	);
}
