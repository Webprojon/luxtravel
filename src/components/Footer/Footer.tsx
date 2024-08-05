import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "..//../assets/Images/generals/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<footer className="mt-[10rem]">
			<div className="flex justify-between mb-10 mx-auto lg:max-w-[1070px]">
				<div className="w-[250px]">
					<a href="#main">
						<img
							src={logo}
							alt="logo img"
							className="border-2 border-amber-600 rounded-full w-[4.5rem]"
						/>
					</a>
					<p className="my-4 text-black/70 font-medium">
						O’zbekiston va qo’shni davlatlar bo’ylab tur xizmatlari
					</p>
					<div className="flex gap-x-5 text-amber-600">
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
					<Link to="/samarkand" className="text-black/70 font-medium">
						Samarqand
					</Link>
					<Link to="/buxoro" className="text-black/70 font-medium">
						Buxoro
					</Link>
					<Link to="/tashkent" className="text-black/70 font-medium">
						Tashkent
					</Link>
					<Link to="/turkiston" className="text-black/70 font-medium">
						Turkiston
					</Link>
				</div>

				<div onClick={scrollToTop} className="flex flex-col gap-y-2">
					<Link to="/zomin" className="text-black/70 font-medium">
						Zomin
					</Link>
					<Link to="/villa" className="text-black/70 font-medium">
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
