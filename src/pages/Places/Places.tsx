import { MdOutlineDateRange } from "react-icons/md";
import stars from "../../assets/Images/generals/Group 1000001721.png";
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
				imgSrc:
					"https://tooroom.pro/uploads/hotel/2023/04/23/sherwood-exclusive-kemer-general-view-01-1682256614.jpg",
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
				imgSrc:
					"https://cf.bstatic.com/xdata/images/hotel/max1024x768/548338603.jpg?k=c65862ff30a227114eca7e930ba6a7ee683b8af9bc83c9b0fa35c98f8472c937&o=&hp=1",
				title: t("placecard2.title"),
				location: t("placecard1.location"),
				description: t("placecard2.description"),
				btn: t("placecard1.btn"),
			},
			{
				imgSrc:
					"https://avatars.mds.yandex.net/get-altay/4381564/2a00000181edddb6b7ec3cd8d70f305b6d30/L_height",
				title: t("placecard3.title"),
				location: t("placecard1.location"),
				description: t("placecard3.description"),
				btn: t("placecard1.btn"),
			},
			{
				imgSrc:
					"https://www.manadosafaris.com/wp/wp-content/uploads/2016/09/Oasis01.jpg",
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
		<section id="turpaket" className="mt-10 w-full md:mt-14">
			<div className="mx-auto px-2 max-w-[385px] xs:max-w-[460px] sm:max-w-[880px] md:max-w-[925px] lg:max-w-[1250px]">
				<div className="text-center tracking-wide text-black/80">
					<h2 className="text-[24px] font-bold md:text-[30px]">
						{pathname ? t("place-h2") : t("place-h2-sub")}
					</h2>
					<p className="mt-2 font-medium md:text-[18px]">
						{pathname ? t("place-p") : t("place-p-sub")}
					</p>
				</div>

				<div className="grid gap-y-12 mt-10 sm:grid-cols-2 lg:grid-cols-3">
					{(pathname ? cardData.fourCards : cardData.threeCards).map(
						(card, index) => (
							<div
								key={index}
								className="mx-auto rounded-[10px] xs:w-[450px] sm:w-[300px] md:w-[400px]"
							>
								<img
									src={card.imgSrc}
									alt="imgs"
									className="h-[35vh] w-full rounded-[10px] xs:h-[47vh] md:h-[40vh] md:rounded-[20px]"
								/>
								<div>
									<div className="flex justify-between font-medium mt-3 text-black/70">
										<span className="flex items-center text-[18px] md:text-[20px]">
											{card.icon} {card.duration}
										</span>

										<span className="flex items-center text-[18px] md:text-[20px]">
											{card.icon2}
											{card.people}
										</span>
									</div>
									<div className="flex items-center justify-between mt-2">
										<h3 className="font-bold text-[26px] text-black/90 md:text-[28px]">
											{card.title}
										</h3>
										<img src={stars} alt="stars" />
									</div>
									<span className="flex items-center font-medium text-[20px] my-2 text-black/70 md:text-[24px]">
										<GrLocation className="mr-3 size-6" />
										{card.location}
									</span>
									<span className="text-amber-600 font-medium text-[22px] md:text-[24px]">
										{card.price}
									</span>
									<p className="text-[14px] text-black/70 mt-2 font-medium md:h-[17vh]">
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
