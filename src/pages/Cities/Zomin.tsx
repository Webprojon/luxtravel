import Home from "../Home/Home";

export default function Zomin() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0) 100%),
				 url("https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/zaamin-0-0-0-0-1592480374.jpg") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}
