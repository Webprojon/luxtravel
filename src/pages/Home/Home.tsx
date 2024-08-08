import { useTranslation } from "react-i18next";
import Modal from "../../components/Modal";
import { useGlobalContext } from "../../context/global-context";

export default function Home() {
	const { isModal } = useGlobalContext();
	const { t } = useTranslation();

	const sections = [
		{
			title: t("card1.title"),
			description: t("card1.description"),
		},
		{
			title: t("card2.title"),
			description: t("card2.description"),
		},
		{
			title: t("card3.title"),
			description: t("card3.description"),
		},
	];

	return (
		<section
			id="main"
			className="pt-[7rem] mx-auto md:pt-[8rem] lg:max-w-[1250px]"
		>
			<div className="tracking-wide text-center sm:p-4 sm:text-left md:w-[920px]">
				<h1 className="font-bold text-[28px] text-white md:leading-[3.9rem] lg:text-[46px]">
					{t("home-h1")}
				</h1>
				<p className="text-white text-[20px] font-medium mt-4">{t("home-p")}</p>

				<div className="gap-x-7 mt-14 hidden sm:flex">
					{sections.map((item, i) => (
						<div
							key={i}
							className="bg-white py-4 px-2 w-[270px] rounded-[10px] md:rounded-[20px] custom-shadow cursor-pointer hover:scale-105 transition-all md:py-8 md:px-5"
						>
							<h2 className="font-bold leading-5 text-black/80 md:text-[25px]">
								{item.title}
							</h2>
							<p className="font-medium leading-5 text-black/70 pt-2 sm:text-[13px] md:pt-4">
								{item.description}
							</p>
						</div>
					))}
				</div>

				<div className="flex flex-col gap-y-6 mt-14 sm:flex-row sm:gap-x-8">
					<a href="#contact">
						<button className="py-5 px-9 bg-green-400 font-semibold text-white tracking-wide text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow">
							{t("home-btn")}
						</button>
					</a>
					<a href="#turpaket">
						<button className="py-5 px-9 bg-sky-400 font-semibold text-white tracking-wide text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow">
							{t("home-btn2")}
						</button>
					</a>
				</div>

				{isModal ? <Modal /> : null}
			</div>
		</section>
	);
}
