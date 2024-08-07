import Home from "../Home/Home";

export default function Tashkent() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0) 100%), 
				url("https://voicesoncentralasia.org/wp-content/uploads/2018/06/city21.jpg") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}
