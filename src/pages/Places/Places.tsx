import { MdOutlineDateRange } from "react-icons/md";
import stars from "../../assets/Images/generals/Group 1000001721.png";
import cardOne from "../../assets/Images/generals/Rectangle 19305 (1).png";
import cardTwo from "../../assets/Images/generals/Rectangle 19305 (2).png";
import cardThree from "../../assets/Images/generals/Rectangle 19305 (3).png";
import cardFour from "../../assets/Images/generals/Rectangle 19305.png";
import cardFive from "../../assets/Images/generals/1.png";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";

export default function Places() {
	const [cardLength, setCardLength] = useState(3);
	const cardData = [
		{
			imgSrc: cardFour,
			duration: "2 kun",
			people: "20 ta odam",
			title: "Sherwood Resort",
			location: "O'zbekiston",
			price: "1,000$",
			oldPrice: "1,200$",
			description:
				"Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi.",
		},
		{
			imgSrc: cardOne,
			duration: "2 kun",
			people: "20 ta odam",
			title: "Wellmore Resort",
			location: "O'zbekiston",
			price: "1,000$",
			oldPrice: "1,200$",
			description:
				"Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi.",
		},
		{
			imgSrc: cardTwo,
			duration: "2 kun",
			people: "20 ta odam",
			title: "Parkent ijod uyi",
			location: "O'zbekiston",
			price: "1,000$",
			oldPrice: "1,200$",
			description:
				"Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi.",
		},
		{
			imgSrc: cardThree,
			duration: "2 kun",
			people: "20 ta odam",
			title: "Oasis Garden",
			location: "O'zbekiston",
			price: "1,000$",
			oldPrice: "1,200$",
			description:
				"Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi.",
		},
		{
			imgSrc: cardFive,
			duration: "2 kun",
			people: "20 ta odam",
			title: "Sherwood Resort",
			location: "O'zbekiston",
			price: "1,000$",
			oldPrice: "1,200$",
			description:
				"Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi.",
		},
		{
			imgSrc: cardOne,
			duration: "2 kun",
			people: "20 ta odam",
			title: "Wellmore Resort",
			location: "O'zbekiston",
			price: "1,000$",
			oldPrice: "1,200$",
			description:
				"Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi.",
		},
	];

	return (
		<section id="turpaket" className="w-full">
			<div className="lg:max-w-[1250px] mx-auto">
				<div className="text-center mt-6 tracking-wide text-black/80">
					<h2 className="text-[30px] font-bold">Dam olish maskanlarimiz</h2>
					<p className="text-[18px] mt-2 font-medium">
						Quyida taklif qilingan dam olish maskanlari bilan tanishib chiqing
					</p>
				</div>

				<div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-14 my-10">
					{cardData.slice(0, cardLength).map((card, index) => (
						<div
							key={index}
							className="w-[19rem] p-3 rounded-[10px] custom-shadow"
						>
							<img src={card.imgSrc} alt="imgs" className="w-full" />
							<div>
								<div className="flex justify-between font-medium mt-2">
									<span className="flex items-center">
										<MdOutlineDateRange className="mr-2" /> {card.duration}
									</span>
									<span className="flex items-center">
										<FaRegUser className="mr-2" />
										{card.people}
									</span>
								</div>
								<div className="flex items-center justify-between mt-1">
									<h3 className="font-bold text-[19px] text-black/90">
										{card.title}
									</h3>
									<img src={stars} alt="stars" />
								</div>
								<span className="flex items-center font-medium">
									<HiOutlineLocationMarker className="mr-1" />
									{card.location}
								</span>
								<div className="flex justify-between font-medium my-1 text-[17px]">
									<span className="text-amber-600">{card.price}</span>
									<span className="line-through">{card.oldPrice}</span>
								</div>
								<p className="text-[13px] leading-4 font-medium">
									{card.description}
								</p>
								<a href="#contact">
									<button className="mt-4 py-3 w-full px-9 bg-sky-400 hover:bg-sky-500 font-semibold text-white text-[17px] rounded-[8px] transition-all">
										Ko'proq ma'lumot olish
									</button>
								</a>
							</div>
						</div>
					))}

					<button
						onClick={() => setCardLength(6)}
						className={`${
							cardLength > 3 ? "hidden" : "block"
						} py-4 px-16 bg-green-400 custom-shadow hover:bg-green-500 font-semibold text-white text-[17px] rounded-[8px] transition-all`}
					>
						Ko'proq ko'rish
					</button>
				</div>
			</div>
		</section>
	);
}
