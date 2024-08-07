import Home from "../Home/Home";

export default function Turkiston() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0) 100%), 
				url("https://www.nomadasaurus.com/wp-content/uploads/2017/01/Kazakhstan-Turkestan-HDR-2.jpg") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}
