import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { GlobalContextProvider } from "./context/global-context";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import WhyUsPage from "./pages/WhyUs/WhyUs";
import Places from "./pages/Places/Places";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Tashkent from "./pages/Cities/Tashkent";
import Turkiston from "./pages/Cities/Turkistan";
import Villa from "./pages/Cities/Villa";
import Zomin from "./pages/Cities/Zomin";
import Networks from "./components/Networks";
import FaqPage from "./pages/FAQ/FaqPage";
import Buxoro from "./pages/Cities/Buxoro";
import Samarkand from "./pages/Cities/Samarkand";

function App() {
	return (
		//max-w-[1540px]
		<main className="mx-auto overflow-x-hidden">
			<GlobalContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Villa />} />
					<Route path="/buxoro" element={<Buxoro />} />
					<Route path="/tashkent" element={<Tashkent />} />
					<Route path="/samarkand" element={<Samarkand />} />
					<Route path="/turkiston" element={<Turkiston />} />
					<Route path="/zomin" element={<Zomin />} />
				</Routes>
				<About />
				<WhyUsPage />
				<Services />
				<Places />
				<FaqPage />
				<Contact />
				<Footer />
				<Networks />
			</GlobalContextProvider>
		</main>
	);
}

export default App;
