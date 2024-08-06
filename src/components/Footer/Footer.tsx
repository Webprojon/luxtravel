import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "..//../assets/Images/generals/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
	const [title, setTitle] = useState("Dam olish maskanlari");

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<footer className="">
			<div className="mt-[8rem] flex justify-between mb-10 mx-auto lg:max-w-[1250px]">
				<div className="w-[250px]">
					<a href="#main">
						<img
							src={logo}
							alt="logo img"
							className="border-2 border-green-500 rounded-full w-[4.5rem]"
						/>
					</a>
					<p className="my-4 text-black/70 font-medium">
						O’zbekiston va qo’shni davlatlar bo’ylab tur xizmatlari
					</p>
					<div className="flex gap-x-5 text-green-600">
						<a href="https://www.instagram.com/" target="blank">
							<FaInstagram className="size-7" />
						</a>
						<a href="https://www.whatsapp.com/" target="blank">
							<FaWhatsapp className="size-7" />
						</a>
						<a href="https://www.twitter.com/" target="blank">
							<FaTwitter className="size-7" />
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-y-2">
					<h2 className="font-bold text-[20px]">Kampaniya</h2>
					<a href="#about" className="text-black/70 font-medium">
						Biz haqimizda
					</a>
					<a href="#whyus" className="text-black/70 font-medium">
						Nega biz ?
					</a>
					<a href="#contact" className="text-black/70 font-medium">
						Bog'laish
					</a>
					<a href="#service" className="text-black/70 font-medium">
						Xizmatlar
					</a>
				</div>

				<div onClick={scrollToTop} className="flex flex-col gap-y-2">
					<h2 className="font-bold text-[20px]">Yo'nalishlar</h2>
					<Link
						onClick={() => setTitle("Samarkand")}
						to="/samarkand"
						className="text-black/70 font-medium"
					>
						Samarqand
					</Link>
					<Link
						onClick={() => setTitle("Buxoro")}
						to="/buxoro"
						className="text-black/70 font-medium"
					>
						Buxoro
					</Link>
					<Link
						onClick={() => setTitle("Tashkent")}
						to="/tashkent"
						className="text-black/70 font-medium"
					>
						Tashkent
					</Link>
					<Link
						onClick={() => setTitle("Turkiston")}
						to="/turkiston"
						className="text-black/70 font-medium"
					>
						Turkiston
					</Link>
				</div>

				<div onClick={scrollToTop} className="flex flex-col gap-y-2">
					<Link
						onClick={() => setTitle("Zomin")}
						to="/zomin"
						className="text-black/70 font-medium"
					>
						Zomin
					</Link>
					<Link
						onClick={() => setTitle("Dam olish maskanlari")}
						to="/"
						className="text-black/70 font-medium"
					>
						Dam olish maskanlari
					</Link>
				</div>
			</div>

			<div className="border-t text-center">
				<p className="font-medium my-5 tracking-wider text-black/70">
					Copyright @Lux Travel
				</p>
			</div>
		</footer>
	);
}
