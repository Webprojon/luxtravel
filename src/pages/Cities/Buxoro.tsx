import buxoro from "../../assets/Images/places/buxoro.png";
import Home from "../Home/Home";

export default function Buxoro() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0) 100%), url("${buxoro}") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}