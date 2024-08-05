import samarqand from "../assets/Images/places/samarqand.png";
import Home from "./Home/Home";

export default function Samarkand() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0) 100%), url("${samarqand}") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}
