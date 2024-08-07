import { useTranslation } from "react-i18next";
import bgImg from "../../assets/Images/generals/image 109.png";

export default function WhyUsPage() {
	const { t } = useTranslation();

	const cards = [
		{
			title: t("whyus-card1.title"),
			description: t("whyus-card1.description"),
		},
		{
			title: t("whyus-card2.title"),
			description: t("whyus-card2.description"),
		},
		{
			title: t("whyus-card3.title"),
			description: t("whyus-card3.description"),
		},
		{
			title: t("whyus-card4.title"),
			description: t("whyus-card4.description"),
		},
		{
			title: t("whyus-card5.title"),
			description: t("whyus-card5.description"),
		},
		{
			title: t("whyus-card6.title"),
			description: t("whyus-card6.description"),
		},
		{
			title: t("whyus-card7.title"),
			description: t("whyus-card7.description"),
		},
		{
			title: t("whyus-card8.title"),
			description: t("whyus-card8.description"),
		},
	];

	return (
		<section
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0) 100%), url("${bgImg}") no-repeat center/cover`,
			}}
			id="whyus"
			className="mt-14 scroll-mt-20 flex flex-col justify-center h-[90vh]"
		>
			<div className="flex flex-col justify-center items-center lg:max-w-[1250px] mx-auto tracking-wide">
				<div className="text-center">
					<h2 className="text-white font-bold text-[30px]">{t("whyus-h2")}</h2>
					<p className="text-white font-medium mb-5 text-[18px]">
						{t("whyus-p")}
					</p>
				</div>

				<div className="flex flex-wrap gap-y-8 gap-x-12 mt-6">
					{cards.map((card, index) => (
						<div
							key={index}
							className="bg-white opacity-90 py-7 px-5 w-[275px] rounded-[20px] custom-shadow cursor-pointer hover:-translate-y-1 transition-all"
						>
							<h2 className="font-bold leading-5 text-black/80 text-[25px]">
								{card.title}
							</h2>
							<p className="font-medium leading-5 text-black/70 pt-4">
								{card.description}
							</p>
						</div>
					))}
				</div>

				<a href="#contact">
					<button className="mt-12 py-4 px-9 bg-green-400 font-semibold text-white tracking-wide text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow">
						{t("home-btn")}
					</button>
				</a>
			</div>
		</section>
	);
}
