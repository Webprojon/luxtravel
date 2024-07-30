import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { GlobalContextProvider } from "./context/global-context";
import Home from "./pages/Home/Home";

function App() {
	return (
		<main className="max-w-[1540px] mx-auto overflow-x-hidden">
			<GlobalContextProvider>
				<Header />
				<Home />
				<Footer />
			</GlobalContextProvider>
		</main>
	);
}

export default App;
