import Home from "../Home/Home";

export default function Villa() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 100%, rgba(0, 0, 0, 0) 100%), 
				url("https://www.alpsinluxury.com/attachments/photos/gallery/6481a5c3-4a50-47ae-be1d-43e20a000f09.jpg") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}
