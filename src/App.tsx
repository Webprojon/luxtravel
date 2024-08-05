import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { GlobalContextProvider } from "./context/global-context";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import WhyUsPage from "./pages/WhyUs/WhyUs";
import Places from "./pages/Places/Places";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

function App() {
	return (
		<main className="max-w-[1540px] mx-auto overflow-x-hidden">
			<GlobalContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<About />
				<WhyUsPage />
				<Places />
				<Services />
				<Contact />
				<Footer />
			</GlobalContextProvider>
		</main>
	);
}

export default App;
