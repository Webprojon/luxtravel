import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { GlobalContextProvider } from "./context/global-context";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import WhyUsPage from "./pages/WhyUs/WhyUs";
import Places from "./pages/Places/Places";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Buxoro from "./pages/Buxoro";
import Tashkent from "./pages/Tashkent";
import Samarkand from "./pages/Samarkand";
import Turkiston from "./pages/Turkistan";
import Villa from "./pages/Villa";
import Zomin from "./pages/Zomin";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<main className="max-w-[1540px] mx-auto overflow-x-hidden">
			<GlobalContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Buxoro />} />
					<Route path="/tashkent" element={<Tashkent />} />
					<Route path="/samarkand" element={<Samarkand />} />
					<Route path="/turkiston" element={<Turkiston />} />
					<Route path="/villa" element={<Villa />} />
					<Route path="/zomin" element={<Zomin />} />
				</Routes>
				<About />
				<WhyUsPage />
				<Places />
				<Services />
				<Contact />
				<Footer />
				<Toaster position="top-center" />
			</GlobalContextProvider>
		</main>
	);
}

export default App;
