import Home from "../Home/Home";

export default function Villa() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0) 100%), 
				url("https://static.realting.com/uploads/images/3f1/445e22c2280ba1273ef81a36f446a.webp") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}
