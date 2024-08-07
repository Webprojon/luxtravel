import Home from "../Home/Home";

export default function Samarkand() {
	return (
		<main
			className="h-[100vh] w-full"
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0) 100%), 
				url("https://ufez.uz/wp-content/uploads/2021/06/d65209f1-0218-450f-b28b-3c7c72cee23b.jpeg") no-repeat center/cover`,
			}}
		>
			<Home />
		</main>
	);
}
