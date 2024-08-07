import { MdOutlineDateRange } from "react-icons/md";
import stars from "../../assets/Images/generals/Group 1000001721.png";
import cardOne from "../../assets/Images/generals/Rectangle 19305 (1).png";
import cardTwo from "../../assets/Images/generals/Rectangle 19305 (2).png";
import cardThree from "../../assets/Images/generals/Rectangle 19305 (3).png";
import cardFour from "../../assets/Images/generals/Rectangle 19305.png";
import { FaRegUser } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Places() {
	const location = useLocation();
	const pathname = location.pathname === "/";
	const { t } = useTranslation();

	const cardData = {
		fourCards: [
			{
				imgSrc: cardFour,
				icon: "",
				icon2: "",
				duration: "",
				people: "",
				title: t("placecard1.title"),
				location: t("placecard1.location"),
				price: "",
				oldPrice: "",
				description: t("placecard1.description"),
				btn: t("placecard1.btn"),
			},
			{
				imgSrc: cardOne,
				title: t("placecard2.title"),
				location: t("placecard1.location"),
				description: t("placecard2.description"),
				btn: t("placecard1.btn"),
			},
			{
				imgSrc: cardTwo,
				title: t("placecard3.title"),
				location: t("placecard1.location"),
				description: t("placecard3.description"),
				btn: t("placecard1.btn"),
			},
			{
				imgSrc: cardThree,
				title: t("placecard4.title"),
				location: t("placecard1.location"),
				description: t("placecard4.description"),
				btn: t("placecard1.btn"),
			},
		],

		threeCards: [
			{
				imgSrc:
					"https://optim.tildacdn.one/tild3364-6134-4564-b964-386463353339/-/resize/818x/-/format/webp/Rectangle_19305.png",
				icon: <MdOutlineDateRange className="mr-2" />,
				icon2: <FaRegUser className="mr-2" />,
				duration: t("placecard5.duration"),
				people: t("placecard5.people"),
				title: t("placecard5.title"),
				location: t("placecard5.location"),
				price: t("placecard5.price"),
				description: t("placecard5.description"),
				btn: t("placecard5.btn"),
			},
			{
				imgSrc:
					"https://optim.tildacdn.one/tild3362-3663-4338-b165-663632343737/-/resize/818x/-/format/webp/buxoortur.png",
				icon: <MdOutlineDateRange className="mr-2" />,
				icon2: <FaRegUser className="mr-2" />,
				duration: t("placecard6.duration"),
				people: t("placecard6.people"),
				title: t("placecard6.title"),
				location: t("placecard5.location"),
				price: t("placecard6.price"),
				description: t("placecard6.description"),
				btn: t("placecard5.btn"),
			},
			{
				imgSrc:
					"https://optim.tildacdn.one/tild3631-3461-4262-b462-666264353238/-/resize/818x/-/format/webp/xivatur.png",
				icon: <MdOutlineDateRange className="mr-2" />,
				icon2: <FaRegUser className="mr-2" />,
				duration: t("placecard7.duration"),
				people: t("placecard7.people"),
				title: t("placecard7.title"),
				location: t("placecard5.location"),
				price: t("placecard7.price"),
				description: t("placecard7.description"),
				btn: t("placecard5.btn"),
			},
		],
	};

	return (
		<section id="turpaket" className="mt-14 w-full">
			<div className="lg:max-w-[1250px] mx-auto">
				<div className="text-center tracking-wide text-black/80">
					<h2 className="text-[30px] font-bold">
						{pathname ? t("place-h2") : t("place-h2-sub")}
					</h2>
					<p className="text-[18px] mt-2 font-medium">
						{pathname ? t("place-p") : t("place-p-sub")}
					</p>
				</div>

				<div className="flex flex-wrap justify-between gap-y-12 mt-10">
					{(pathname ? cardData.fourCards : cardData.threeCards).map(
						(card, index) => (
							<div key={index} className="w-[390px] rounded-[10px]">
								<img src={card.imgSrc} alt="imgs" className="w-full" />
								<div>
									<div className="flex justify-between font-medium mt-2 text-black/70">
										<span className="flex items-center text-[20px]">
											{card.icon} {card.duration}
										</span>

										<span className="flex items-center text-[20px]">
											{card.icon2}
											{card.people}
										</span>
									</div>
									<div className="flex items-center justify-between mt-2">
										<h3 className="font-bold text-[28px] text-black/90">
											{card.title}
										</h3>
										<img src={stars} alt="stars" />
									</div>
									<span className="flex items-center font-medium text-[24px] my-2 text-black/70">
										<GrLocation className="mr-3 size-6" />
										{card.location}
									</span>
									<span className="text-amber-600 font-medium text-[24px]">
										{card.price}
									</span>
									<p className="text-[15px] h-[17vh] text-black/70 mt-2 font-medium">
										{card.description}
									</p>
									<a href="#contact">
										<button className="custom-shadow mt-4 py-3 px-8 bg-green-400 hover:bg-green-500 text-white rounded-[8px] transition-all">
											{card.btn}
										</button>
									</a>
								</div>
							</div>
						),
					)}
				</div>
			</div>
		</section>
	);
}
