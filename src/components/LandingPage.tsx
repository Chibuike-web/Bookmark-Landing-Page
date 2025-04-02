import CallToAction from "./CallToAction";
import FAQs from "./FAQs";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function LandingPage() {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<CallToAction />
			<FAQs />
		</>
	);
}
