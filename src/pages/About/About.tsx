import tashkentVideo from "../../assets/videos/tashkent-video.mp4";
import tashkent from "../../assets/Images/places/tashkent.jpg";
import clietOne from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420711 1.png";
import clietTwo from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420721 1.png";
import clietThree from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420721 2.png";
import clietFour from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420727 1.png";
import clietFive from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420727 2 (1).png";
import clietSix from "../../assets/Images/clients-imgs/telegram-cloud-document-2-5188232451033420727 3.png";
import clietSeven from "../../assets/Images/clients-imgs/telegram-cloud-photo-size-2-5188647207891491395-y 1.png";
import clietEight from "../../assets/Images/clients-imgs/telegram-cloud-photo-size-2-5188647207891491395-y 2.png";
import clietNine from "../../assets/Images/clients-imgs/telegram-cloud-photo-size-2-5188647207891491395-y 3.png";

export default function About() {
	const clientImages = [
		{ src: clietOne, alt: "user img" },
		{ src: clietTwo, alt: "user img" },
		{
			src: "",
			alt: "Placeholder",
			text: "Bu yerda sizning suratingiz bo'lishi mumkin",
		},
		{ src: clietThree, alt: "user img" },
		{ src: clietFour, alt: "user img" },
		{ src: clietFive, alt: "user img" },
		{ src: clietSix, alt: "user img" },
		{ src: clietSeven, alt: "user img" },
		{ src: clietEight, alt: "user img" },
		{ src: clietNine, alt: "user img" },
	];

	return (
		<section className="lg:max-w-[1250px] mx-auto tracking-wide text-black/90">
			<div className="hidden">
				<h1 className="text-center mt-10 font-bold leading-5 text-[30px]">
					Shahar haqida quyidagi video orqali batafsil bilib oling
				</h1>

				<video
					loop
					muted
					controls
					preload="auto"
					poster={tashkent}
					src={tashkentVideo}
					className="w-[50%] h-[60vh] mx-auto"
				></video>
			</div>

			<div className="text-center mt-14">
				<h2 className="font-medium text-[27px] leading-5">
					<span className="font-bold">2,000</span> dan ortiq mijozlarimiz
					bizning xizmatlarimizdan mamnun
				</h2>
				<p className="font-medium text-[18px] my-4 leading-5">
					Bizga ishonch bildirgan mijozlarimizning suratlaridan namunalar
				</p>
			</div>

			<div className="flex flex-wrap gap-6 mt-10">
				{clientImages.map((client, index) => {
					return client.src ? (
						<img
							key={index}
							src={client.src}
							alt={client.alt}
							className="w-[230px] h-[160px] object-cover rounded-[12px] hover:scale-105 transition-all cursor-pointer custom-shadow"
						/>
					) : (
						<div
							key={index}
							className="flex justify-center text-center font-medium items-center w-[230px] h-[160px] rounded-[12px] custom-shadow hover:scale-105 transition-all cursor-pointer"
						>
							<p>{client.text}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
