import { MdOutlineDateRange } from "react-icons/md";
import stars from "../../assets/Images/generals/Group 1000001721.png";
import cardOne from "../../assets/Images/generals/Rectangle 19305 (1).png";
import cardTwo from "../../assets/Images/generals/Rectangle 19305 (2).png";
import cardThree from "../../assets/Images/generals/Rectangle 19305 (3).png";
import cardFour from "../../assets/Images/generals/Rectangle 19305.png";
import { FaRegUser } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { useLocation } from "react-router-dom";

export default function Places() {
	const location = useLocation();
	const pathname = location.pathname === "/";

	const cardData = {
		fourCards: [
			{
				imgSrc: cardFour,
				icon: "",
				icon2: "",
				duration: "",
				people: "",
				title: "Sherwood Resort",
				location: "O'zbekiston",
				price: "",
				oldPrice: "",
				description:
					"O'zbekistondagi zamonaviy sifat va xavfsizlik standartlariga javob beradigan butun yil davomida ishlaydigan xalqaro darajadagi tog'li kurort!",
				btn: "Ko'proq ma'lumot olish",
			},
			{
				imgSrc: cardOne,
				title: "Wellmore Resort",
				location: "O'zbekiston",
				description:
					"Wellmore Resort Hotel-Charvak mehmonxona majmuasi Chorvoq suv ombori sohilidagi eng go'zal joylardan birida oilaviy dam olish uchun ideal manzil",
				btn: "Ko'proq ma'lumot olish",
			},
			{
				imgSrc: cardTwo,
				title: "Parkent ijod uyi",
				location: "O'zbekiston",
				description:
					"Toza havo va tog‘lar bag‘irda joylashgan dam olish maskani Korporativ tadbirlar va oila davrida dam olish uchun barcha sharoitlar mavjud",
				btn: "Ko'proq ma'lumot olish",
			},
			{
				imgSrc: cardThree,
				title: "Oasis Garden",
				location: "O'zbekiston",
				description:
					"Oasis Garden restorani - turli tadbirlarni o'tkazish uchun ajoyib joy: do'stlar bilan tushlik va romantik kechki ovqatlardan tortib, katta ijtimoiy qabul va to'y marosimlarigacha",
				btn: "Ko'proq ma'lumot olish",
			},
		],

		threeCards: [
			{
				imgSrc:
					"https://optim.tildacdn.one/tild3364-6134-4564-b964-386463353339/-/resize/818x/-/format/webp/Rectangle_19305.png",
				icon: <MdOutlineDateRange className="mr-2" />,
				icon2: <FaRegUser className="mr-2" />,
				duration: "2 kun",
				people: "50 ta odam",
				title: "Samarqand",
				location: "O'zbekiston",
				price: "1 074 000 so'm",
				description:
					"Samarqand bo'ylab 2 kunlik sayohat. Samarqandning eng qiziqarli joylariga tashrif buyuriladi. Ushbu sayohatda siz qadimiy shahar tarixi bilan tanishib, me'morchilik asarlarini ko'rasiz. Mahalliy taomlar tatib ko'ring va unutilmas lahzalarni boshdan kechiring",
				btn: "Joyni band qilish",
			},
			{
				imgSrc:
					"https://optim.tildacdn.one/tild3362-3663-4338-b165-663632343737/-/resize/818x/-/format/webp/buxoortur.png",
				icon: <MdOutlineDateRange className="mr-2" />,
				icon2: <FaRegUser className="mr-2" />,
				duration: "3 kun",
				people: "50 ta odam",
				title: "Buxoro",
				location: "O'zbekiston",
				price: "1 440 000 so'm",
				description:
					"Buxoro bo'ylab 3 kunlik sayohat. Sayohat davomida 50 kishigacha jamoa yig'iladi va Buxoroning eng mashxur obidalariga sayohat qilinadi. Bu sayohatda siz tarixiy yodgorliklarni ko'rasiz, mahalliy madaniyat bilan yaqindan tanishasiz va mazali milliy taomlarni ko'rasiz",
				btn: "Joyni band qilish",
			},
			{
				imgSrc:
					"https://optim.tildacdn.one/tild3631-3461-4262-b462-666264353238/-/resize/818x/-/format/webp/xivatur.png",
				icon: <MdOutlineDateRange className="mr-2" />,
				icon2: <FaRegUser className="mr-2" />,
				duration: "3 kun",
				people: "20 ta odam",
				title: "Xiva",
				location: "O'zbekiston",
				price: "1 737 000 so'm",
				description:
					"Xiva bo'ylab 3 kunlik sayohat. Tarixiy Ichan-Qala shahri, unutilmas choyxonalar va o'zbek milliy taomlari bilan tanishing. Yangi do'stlar topish va O'zbekistonning zamonaviy joylarini kashf etish imkoniyati!",
				btn: "Joyni band qilish",
			},
		],
	};

	return (
		<section id="turpaket" className="mt-14 w-full">
			<div className="lg:max-w-[1250px] mx-auto">
				<div className="text-center tracking-wide text-black/80">
					<h2 className="text-[30px] font-bold">
						{pathname ? "Dam olish maskanlarimiz" : "Yana boshqa tur paketlar"}
					</h2>
					<p className="text-[18px] mt-2 font-medium">
						{pathname
							? "Quyida taklif qilingan dam olish maskanlari bilan tanishib chiqing"
							: "Quyidagi tur paketlar bilan tanishib chiqing"}
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
