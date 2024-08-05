import bgImg from "../../assets/Images/generals/image 109.png";
const cards = [
	{
		title: "Tajriba",
		description: "ortiq tajribaga ega jamoa",
		highlight: "10 yildan",
	},
	{
		title: "Qulay narxlar",
		description: "sayohat $100 dan boshlanadi",
		highlight: "7 kunlik",
	},
	{
		title: "Keng tanlov",
		description: "Sayohatingiz davomida 10dan...",
	},
	{
		title: "Go'zal shaharlar",
		description: "Sayohatingiz davomida 10dan...",
	},
	{
		title: "Go'zal shaharlar",
		description: "Sayohatingiz davomida 10dan...",
	},
	{
		title: "Keng tanlov",
		description: "Sayohatingiz davomida 10dan...",
	},
	{
		title: "Tajriba",
		description: "ortiq tajribaga ega jamoa",
		highlight: "10 yildan",
	},
	{
		title: "Qulay narxlar",
		description: "sayohat $100 dan boshlanadi",
		highlight: "7 kunlik",
	},
];

export default function WhyUsPage() {
	return (
		<section
			style={{
				background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0) 100%), url("${bgImg}") no-repeat center/cover`,
			}}
			id="whyus"
			className="scroll-mt-20 flex flex-col justify-center h-[90vh] mt-12"
		>
			<div className="flex flex-col justify-center items-center lg:max-w-[1250px] mx-auto tracking-wide">
				<div className="text-center">
					<h2 className="text-white font-bold text-[30px]">
						Nega aynan bizni tanlashingiz kerak?
					</h2>
					<p className="text-white font-medium mb-5 text-[18px]">
						Bizni tanlashingiz uchun 8 ta sabab
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
								<span className="text-sky-600">{card.highlight}</span>{" "}
								{card.description}
							</p>
						</div>
					))}
				</div>

				<a href="#contact">
					<button className="mt-12 py-4 px-9 bg-green-400 font-semibold text-white tracking-wide text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow">
						Bepul konsultatsiya
					</button>
				</a>
			</div>
		</section>
	);
}
