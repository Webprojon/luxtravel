import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
export default function WhyUsPage() {
	const { t } = useTranslation();
	const location = useLocation();
	const pathname = location.pathname === "/";

	// Background imgs
	const firstBgImg =
		"https://uzbekistan.travel/storage/app/media/fed/cropped-images/Dsc_0513---khiva-0-0-0-0-1582806011.jpg";
	const secondBgImg =
		"https://beaufortpoolcompany.com/wp-content/uploads/2023/01/Fiberglass-Pool-Installation.webp";

	// Card items
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
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 100%, rgba(0, 0, 0, 0) 100%),
				 url("${pathname ? secondBgImg : firstBgImg}") no-repeat center/cover`,
			}}
			id="whyus"
			className="mt-14 scroll-mt-20 flex flex-col justify-center py-8 lg:h-[90vh]"
		>
			<div className="flex flex-col justify-center items-center lg:max-w-[1250px] mx-auto tracking-wide">
				<div className="text-center">
					<h2 className="text-white font-bold text-[18px] xs:text-[29px] md:text-[34px]">
						{t("whyus-h2")}
					</h2>
					<p className="text-white font-medium mb-5 xs:text-[22px]">
						{t("whyus-p")}
					</p>
				</div>

				<div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-y-10 md:gap-x-12 mt-6">
					{cards.map((card, index) => (
						<div
							key={index}
							className="w-[90%] h-[20vh] xs:h-auto mx-auto bg-white opacity-90 py-7 px-5 md:w-[275px] rounded-[20px] custom-shadow cursor-pointer hover:-translate-y-1 transition-all"
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
