import tashkent from "../../assets/Images/places/tashkent.jpg";
import Home from "../Home/Home";

export default function Tashkent() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0) 100%), url("${tashkent}") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}
