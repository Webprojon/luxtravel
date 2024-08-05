export default function Home() {
	return (
		<section
			id="main"
			className="pt-[9rem] mx-auto lg:max-w-[1250px] tracking-wide"
		>
			<h1 className="font-bold text-[46px] leading-[3.9rem] text-white">
				LUX TRAVEL unutilmas onlaringizni <br /> biz bilan kashf qiling!
			</h1>
			<p className="text-white text-[18px] font-medium mt-4">
				Bepul konsultatsiya uchun ro’yxatdan o’ting
			</p>

			<div className="flex gap-x-7 mt-14">
				<div className="bg-white opacity-90 py-8 px-5 w-[240px] rounded-[20px] custom-shadow cursor-pointer hover:scale-105 transition-all">
					<h2 className="font-bold leading-5 text-black/80 text-[25px]">
						Tajriba
					</h2>
					<p className="font-medium leading-5 text-black/70 pt-4">
						<span className="text-sky-600">10 yildan</span> ortiq tajribaga ega
						jamoa
					</p>
				</div>

				<div className="bg-white opacity-90 py-8 px-5 w-[240px] rounded-[20px] custom-shadow cursor-pointer hover:scale-105 transition-all">
					<h2 className="font-bold leading-5 text-black/80 text-[25px]">
						Qulay narxlar
					</h2>
					<p className="font-medium leading-5 text-black/70 pt-4">
						7 kunlik sayohat
						<span className="text-sky-600"> $100 dan </span>
						boshlanadi
					</p>
				</div>

				<div className="bg-white opacity-90 py-8 px-5 w-[240px] rounded-[20px] custom-shadow cursor-pointer hover:scale-105 transition-all">
					<h2 className="font-bold leading-5 text-black/80 text-[25px]">
						Keng tanlov
					</h2>
					<p className="font-medium leading-5 text-black/70 pt-4">
						Sayohatingiz davomida
						<span className="text-sky-600"> 10dan...</span>
					</p>
				</div>
			</div>

			<div className="flex gap-x-8 mt-12">
				<a
					href="#contact"
					className="py-5 px-9 bg-green-400 font-semibold text-white tracking-wide text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow"
				>
					Bepul konsultatsiya
				</a>
				<a href="#turpaket">
					<button className="py-5 px-9 bg-sky-400 font-semibold text-white tracking-wide text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow">
						Tayyor tur paketlar
					</button>
				</a>
			</div>
		</section>
	);
}
