import villa from "../assets/Images/places/villa.png";
import Home from "./Home/Home";

export default function Villa() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0) 100%), url("${villa}") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}
