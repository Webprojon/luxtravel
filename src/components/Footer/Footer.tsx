import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "..//../assets/Images/generals/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const [title, setTitle] = useState("Dam olish maskanlari");
	const { t } = useTranslation();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<footer>
			<div
				className="max-w-[500px] mt-14 md:mt-[8rem] pl-6 grid xs:grid-cols-2 sm:grid-cols-3
			 md:grid-cols-4 gap-y-8 gap-x-20 mb-10 mx-auto xs:max-w-[460px] sm:max-w-[760px] md:max-w-[925px] lg:max-w-[1250px]"
			>
				<div className="w-[250px]">
					<a href="#main">
						<img
							src={logo}
							alt="logo img"
							className="border-2 border-green-500 rounded-full w-[4.5rem]"
						/>
					</a>
					<p className="my-4 text-black/70 font-medium">{t("footer-p")}</p>
					<div className="flex gap-x-5 text-green-600">
						<a
							href="https://www.instagram.com/latifov_izzat?igsh=MTh6d3I3M2V1cnFmYg=="
							target="blank"
						>
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
					<h2 className="font-bold text-[20px]">{t("footer-one")}</h2>
					<a href="#about" className="text-black/70 font-medium">
						{t("footerlink1")}
					</a>
					<a href="#whyus" className="text-black/70 font-medium">
						{t("footerlink2")}
					</a>
					<a href="#contact" className="text-black/70 font-medium">
						{t("footerlink3")}
					</a>
					<a href="#service" className="text-black/70 font-medium">
						{t("footerlink4")}
					</a>
				</div>

				<div onClick={scrollToTop} className="flex flex-col gap-y-2">
					<h2 className="font-bold text-[20px]">{t("footer-two")}</h2>
					<Link
						onClick={() => setTitle("Samarkand")}
						to="/samarkand"
						className="text-black/70 font-medium"
					>
						{t("footerlink5")}
					</Link>
					<Link
						onClick={() => setTitle("Buxoro")}
						to="/buxoro"
						className="text-black/70 font-medium"
					>
						{t("footerlink6")}
					</Link>
					<Link
						onClick={() => setTitle("Tashkent")}
						to="/tashkent"
						className="text-black/70 font-medium"
					>
						{t("footerlink7")}
					</Link>
					<Link
						onClick={() => setTitle("Turkiston")}
						to="/turkiston"
						className="text-black/70 font-medium"
					>
						{t("footerlink8")}
					</Link>
				</div>

				<div onClick={scrollToTop} className="flex flex-col gap-y-2">
					<Link
						onClick={() => setTitle("Zomin")}
						to="/zomin"
						className="text-black/70 font-medium"
					>
						{t("footerlink9")}
					</Link>
					<Link
						onClick={() => setTitle("Dam olish maskanlari")}
						to="/"
						className="text-black/70 font-medium"
					>
						{t("footerlink10")}
					</Link>
				</div>
			</div>

			<div className="border-t text-center">
				<p className="font-medium my-5 tracking-wider text-black/70">
					{t("footer-p2")}
				</p>
			</div>
		</footer>
	);
}
