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
			className="pt-[9rem] mx-auto lg:max-w-[1250px] tracking-wide"
		>
			<h1 className="font-bold text-[46px] leading-[3.9rem] text-white">
				{t("home-h1")} <br /> {t("home-h1-br")}
			</h1>
			<p className="text-white text-[18px] font-medium mt-4">{t("home-p")}</p>

			<div className="flex gap-x-7 mt-14">
				{sections.map((item, i) => (
					<div
						key={i}
						className="bg-white opacity-90 py-8 px-5 w-[250px] rounded-[20px] custom-shadow cursor-pointer hover:scale-105 transition-all"
					>
						<h2 className="font-bold leading-5 text-black/80 text-[25px]">
							{item.title}
						</h2>
						<p className="font-medium leading-5 text-black/70 pt-4">
							{item.description}
						</p>
					</div>
				))}
			</div>

			<div className="flex gap-x-8 mt-12">
				<a
					href="#contact"
					className="py-5 px-9 bg-green-400 font-semibold text-white tracking-wide text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow"
				>
					{t("home-btn")}
				</a>
				<a href="#turpaket">
					<button className="py-5 px-9 bg-sky-400 font-semibold text-white tracking-wide text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow">
						{t("home-btn2")}
					</button>
				</a>
			</div>

			{isModal ? <Modal /> : null}
		</section>
	);
}
