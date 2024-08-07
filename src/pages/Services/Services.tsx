import { useTranslation } from "react-i18next";
import { GiCheckMark } from "react-icons/gi";
import { useLocation } from "react-router-dom";

export default function Services() {
	const location = useLocation();
	const pathname1 = location.pathname === "/";
	const pathname = location.pathname;
	const { t } = useTranslation();

	const informations = {
		buxoro: {
			buxoroData: [
				{
					day: "1",
					title: t("servicecard1.title"),
					description: t("servicecard1.description"),
				},
				{
					day: "2",
					title: t("servicecard2.title"),
					description: t("servicecard2.description"),
				},
				{
					day: "3",
					title: t("servicecard3.title"),
					description: t("servicecard3.description"),
				},
			],

			buxoroServices: {
				servicesHead: [
					{
						countOfPeople: t("servicecard4.countOfPeople"),
						price: "1.440.000",
					},
				],
				firstColumnServices: [
					t("servicecard5.one"),
					t("servicecard5.two"),
					t("servicecard5.three"),
					t("servicecard5.four"),
					t("servicecard5.five"),
					t("servicecard5.six"),
				],
				secondColumnServices: [
					t("servicecard6.one"),
					t("servicecard6.two"),
					t("servicecard6.three"),
					t("servicecard6.four"),
					t("servicecard6.five"),
					t("servicecard6.six"),
				],
			},
		},
		samarkand: {
			samarkandData: [
				{
					day: "1",
					title: t("servicecard7.title"),
					description: t("servicecard7.description"),
				},
				{
					day: "2",
					title: t("servicecard8.title"),
					description: t("servicecard8.description"),
				},
				{
					day: "3",
					title: t("servicecard9.title"),
					description: t("servicecard9.description"),
				},
			],

			samarkandServices: {
				servicesHead: [
					{
						countOfPeople: t("servicecard10.countOfPeople"),
						price: "1 074 000",
					},
				],
				firstColumnServices: [
					t("servicecard11.one"),
					t("servicecard11.two"),
					t("servicecard11.three"),
					t("servicecard11.four"),
					t("servicecard11.five"),
					t("servicecard11.six"),
				],
				secondColumnServices: [
					t("servicecard12.one"),
					t("servicecard12.two"),
					t("servicecard12.three"),
					t("servicecard12.four"),
					t("servicecard12.five"),
					t("servicecard12.six"),
				],
			},
		},
		tashkent: {
			tashkentData: [
				{
					day: "1",
					title: t("servicecard13.title"),
					description: t("servicecard13.description"),
				},
				{
					day: "2",
					title: t("servicecard14.title"),
					description: t("servicecard14.description"),
				},
				{
					day: "3",
					title: t("servicecard15.title"),
					description: t("servicecard15.description"),
				},
			],

			toshkentServices: {
				servicesHead: [
					{
						countOfPeople: t("servicecard16.countOfPeople"),
						price: "2 350 000",
					},
				],
				firstColumnServices: [
					t("servicecard17.one"),
					t("servicecard17.two"),
					t("servicecard17.three"),
					t("servicecard17.four"),
					t("servicecard17.five"),
					t("servicecard17.six"),
				],
				secondColumnServices: [
					t("servicecard18.one"),
					t("servicecard18.two"),
					t("servicecard18.three"),
					t("servicecard18.four"),
					t("servicecard18.five"),
					t("servicecard18.six"),
				],
			},
		},
		zomin: {
			zominData: [
				{
					day: "1",
					title: t("servicecard19.title"),
					description: t("servicecard19.description"),
				},
				{
					day: "2",
					title: t("servicecard20.title"),
					description: t("servicecard20.description"),
				},
				{
					day: "3",
					title: t("servicecard21.title"),
					description: t("servicecard21.description"),
				},
			],

			zominServices: {
				servicesHead: [
					{
						countOfPeople: t("servicecard22.countOfPeople"),
						price: "1 700 000",
					},
				],
				firstColumnServices: [
					t("servicecard23.one"),
					t("servicecard23.two"),
					t("servicecard23.three"),
					t("servicecard23.four"),
					t("servicecard23.five"),
					t("servicecard23.six"),
				],
				secondColumnServices: [
					t("servicecard24.one"),
					t("servicecard24.two"),
					t("servicecard24.three"),
					t("servicecard24.four"),
					t("servicecard24.five"),
					t("servicecard24.six"),
				],
			},
		},
		turkiston: {
			turkistonData: [
				{
					day: "1",
					title: t("servicecard25.title"),
					description: t("servicecard25.description"),
				},
				{
					day: "2",
					title: t("servicecard26.title"),
					description: t("servicecard26.description"),
				},
				{
					day: "3",
					title: t("servicecard27.title"),
					description: t("servicecard27.description"),
				},
			],

			turkistonServices: {
				servicesHead: [
					{
						countOfPeople: t("servicecard28.countOfPeople"),
						price: "1 500 000",
					},
				],
				firstColumnServices: [
					t("servicecard29.one"),
					t("servicecard29.two"),
					t("servicecard29.three"),
					t("servicecard29.four"),
					t("servicecard29.five"),
					t("servicecard29.six"),
				],
				secondColumnServices: [
					t("servicecard30.one"),
					t("servicecard30.two"),
					t("servicecard30.three"),
					t("servicecard30.four"),
					t("servicecard30.five"),
					t("servicecard30.six"),
				],
			},
		},
	};

	const changeInformations =
		pathname === "/buxoro"
			? informations.buxoro.buxoroData
			: pathname === "/samarkand"
			? informations.samarkand.samarkandData
			: pathname === "/tashkent"
			? informations.tashkent.tashkentData
			: pathname === "/zomin"
			? informations.zomin.zominData
			: pathname === "/turkiston"
			? informations.turkiston.turkistonData
			: [];

	const changeFirstColumnServices =
		pathname === "/buxoro"
			? informations.buxoro.buxoroServices.firstColumnServices
			: pathname === "/samarkand"
			? informations.samarkand.samarkandServices.firstColumnServices
			: pathname === "/tashkent"
			? informations.tashkent.toshkentServices.firstColumnServices
			: pathname === "/zomin"
			? informations.zomin.zominServices.firstColumnServices
			: pathname === "/turkiston"
			? informations.turkiston.turkistonServices.firstColumnServices
			: [];

	const changeSecondColumnServices =
		pathname === "/buxoro"
			? informations.buxoro.buxoroServices.secondColumnServices
			: pathname === "/samarkand"
			? informations.samarkand.samarkandServices.secondColumnServices
			: pathname === "/tashkent"
			? informations.tashkent.toshkentServices.secondColumnServices
			: pathname === "/zomin"
			? informations.zomin.zominServices.secondColumnServices
			: pathname === "/turkiston"
			? informations.turkiston.turkistonServices.secondColumnServices
			: [];

	const changeHeadings =
		pathname === "/buxoro"
			? informations.buxoro.buxoroServices.servicesHead
			: pathname === "/samarkand"
			? informations.samarkand.samarkandServices.servicesHead
			: pathname === "/tashkent"
			? informations.tashkent.toshkentServices.servicesHead
			: pathname === "/zomin"
			? informations.zomin.zominServices.servicesHead
			: pathname === "/turkiston"
			? informations.turkiston.turkistonServices.servicesHead
			: [];

	return (
		<section
			id="service"
			className={`mt-14 scroll-mt-28 ${pathname1 ? "hidden" : "block"}`}
		>
			<div className="flex flex-col items-center lg:max-w-[1250px] mx-auto">
				<div className="text-center tracking-wide text-black/80">
					<h2 className="text-[30px] font-bold">{t("service-h2")}</h2>
					<p className="text-[18px] mt-2 font-medium">{t("service-p")}</p>
				</div>

				<div className="flex justify-between w-full mt-12">
					{changeInformations.map((item) => (
						<div key={item.day} className="h-[34vh] w-[350px] text-black/85">
							<p className="flex justify-center items-center font-medium text-[24px] text-white w-16 h-16 bg-black/85 rounded-full">
								{item.day}
							</p>
							<h3 className="font-bold my-3 text-[20px]">{item.title}</h3>
							<p className="font-medium">{item.description}</p>
						</div>
					))}
				</div>
				<button className="mt-6 py-3 px-9 bg-green-400 font-semibold text-white tracking-wide text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow">
					{t("service-btn")}
				</button>

				<div className="relative w-full flex justify-between p-12 tracking-wide border-2 border-green-400 rounded-[20px] mt-20">
					<div className="absolute -top-9 left-[4rem] bg-green-400 text-white px-12 py-[3px] rounded-t-[15px] flex justify-center items-center font-bold text-[20px]">
						{t("service-cost")}
					</div>
					<div className="absolute top-[1px] left-[5.4rem] shape bg-green-400 w-[100px] h-[80px]"></div>

					{
						<div className="flex flex-col gap-y-4">
							{changeFirstColumnServices.map((service, index) => (
								<span key={index} className="flex items-center">
									<GiCheckMark className="size-4 bg-green-400 text-white rounded-full w-[1.4rem] h-[1.4rem] p-1 mr-4" />
									{service}
								</span>
							))}
						</div>
					}

					{
						<div className="flex flex-col gap-y-4">
							{changeSecondColumnServices.map((service, index) => (
								<span key={index} className="flex items-center">
									<GiCheckMark className="size-4 bg-green-400 text-white rounded-full w-[1.4rem] h-[1.4rem] p-1 mr-4" />
									{service}
								</span>
							))}
						</div>
					}

					<div className="flex flex-col items-center">
						{changeHeadings.map((item) => (
							<>
								<span className="px-6 uppercase py-[4px] text-white text-[14px] bg-green-400 font-medium rounded-md">
									{item.countOfPeople}
								</span>
								<p className="font-medium text-[34px] mt-4 text-black/80">
									{item.price} so'm
								</p>
							</>
						))}
						<button className="mt-8 py-3 px-10 bg-green-400 text-white rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow">
							{t("service-bron-btn")}
						</button>
						<p className="font-medium mt-4 text-black/70 text-[17px]">
							{t("service-limited-place")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
