import { useDispatch, useSelector } from "react-redux";
import clietOne from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420711 1.png";
import clietTwo from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420721 1.png";
import clietThree from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420721 2.png";
import clietFour from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420727 1.png";
import clietFive from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420727 2 (1).png";
import clietSix from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420727 3.png";
import clietSeven from "../../assets/Images/clients-imgs/telegram-cloud-photo-size-2-5188647207891491395-y 1.png";
import clietEight from "../../assets/Images/clients-imgs/telegram-cloud-photo-size-2-5188647207891491395-y 2.png";
import clietNine from "../../assets/Images/clients-imgs/telegram-cloud-photo-size-2-5188647207891491395-y 3.png";
import { useTranslation } from "react-i18next";

export default function About() {
	const { t } = useTranslation();

	const clientImages = [
		{ src: clietOne, alt: "user img" },
		{ src: clietTwo, alt: "user img" },
		{
			src: "",
			alt: "Placeholder",
			text: t("img-text"),
		},
		{ src: clietThree, alt: "user img" },
		{ src: clietFour, alt: "user img" },
		{ src: clietFive, alt: "user img" },
		{ src: clietSix, alt: "user img" },
		{ src: clietSeven, alt: "user img" },
		{ src: clietEight, alt: "user img" },
		{ src: clietNine, alt: "user img" },
	];

	return (
		<section
			id="about"
			className="scroll-mt-32 mx-auto tracking-wide text-black/90 md:mt-14 lg:max-w-[1250px]"
		>
			<div className="mt-5 text-center md:mt-10">
				<h2 className="font-bold text-[20px] md:font-medium md:text-[27px] md:leading-5">
					<span className="font-bold">2,000</span> {t("about-h2")}
				</h2>
				<p className="font-medium my-4 leading-5 md:text-[18px]">
					{t("about-p")}
				</p>
			</div>

			<div className="grid gap-y-10 mt-10 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6 lg:grid-cols-5">
				{clientImages.map((client, index) => {
					return client.src ? (
						<img
							key={index}
							src={client.src}
							alt={client.alt}
							className="w-[90%] mx-auto h-[240px] object-cover rounded-[12px] hover:scale-105 transition-all cursor-pointer custom-shadow md:w-[230px] md:h-[160px]"
						/>
					) : (
						<div
							key={index}
							className="flex justify-center text-center font-medium items-center w-[90%] px-4 mx-auto h-[220px] rounded-[12px] custom-shadow hover:scale-105 transition-all cursor-pointer md:px-0 md:w-[230px] md:h-[160px]"
						>
							<p>{client.text}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
