import { GiCheckMark } from "react-icons/gi";
import { useLocation } from "react-router-dom";

export default function Services() {
	const location = useLocation();
	const pathname1 = location.pathname === "/";
	const pathname = location.pathname;

	const informations = {
		buxoro: {
			buxoroData: [
				{
					day: "1",
					title: "Sayoxatchilar yig‘ini",
					description: "Avtobus Toshkent-Buxoro yo‘nalishida yo‘lga chiqiladi",
				},
				{
					day: "2",
					title: "Buxoro shaxrida nonushta",
					description:
						"Buxoro viloyatidagi 7 pir ziyorati boshlanadi. 1. Shayx Abdulla AbduAl Xoliq G‘ijduvoni,",
				},
				{
					day: "3",
					title: "Mexmonxonada nonushta",
					description:
						"Labi xovuz ansamblidan quyida ketma ketlikda sayoxat boshlanadi: Nodir devonbegi madrasasi..",
				},
			],

			buxoroServices: {
				servicesHead: [
					{
						countOfPeople: "joylar soni: 50 ta",
						price: "1.440.000",
					},
				],
				firstColumnServices: [
					"Nonushta",
					"Mehmonxonada tunash",
					"Transport xizmatlari",
					"Tropik bog'ga tashrif",
					"Ziyorat va ekskursiyalar",
					"Yo'lboshchi (gid) xizmatlari",
				],
				secondColumnServices: [
					"Tushlik",
					"Kechki ovqat va musiqiy xordiq",
					"Sitorai Molhi-Xossa saroyiga tashrif",
					"Amir qabulxonasi, Flora founa muzeyi tashrif",
					"Esdalik sovg'alar xaridi uchun do'konga tashrif",
					"Amirlik zindoni va boshqa tarixiy manzillarga tashrif",
				],
			},
		},
		samarkand: {
			samarkandData: [
				{
					day: "1",
					title: "Sayoxatchilar yig‘ini",
					description:
						"Toshkentdan Afrosiyob poezdi Toshkent-Samarqand yo‘nalishida yo‘lga chiqadi",
				},
				{
					day: "2",
					title: "Samarqand shaxrida nonushta",
					description:
						"Mehmonxonada shvedcha usulda nonushta. Sayohatchilar avtobusga chiqishadi va ekskursiya boshlanadi.",
				},
				{
					day: "3",
					title: "Sayohat",
					description:
						"Shahizinda ansambliga tashrif. U yerda qadimiy hukmdorlar, temuriylar va Payg'ambarimiz s.a.v.ning jiyanlari Qusam ibn Abbos rozio'llohu anhoning qabrlarini ziyorat qilinadi.",
				},
			],

			samarkandServices: {
				servicesHead: [
					{
						countOfPeople: "joylar soni: 50 ta",
						price: "1 074 000",
					},
				],
				firstColumnServices: [
					"Nonushta",
					"Transport xizmatlari",
					"Mehmonxonada tunash",
					"Registon ansambliga sayohat",
					"Guri-Amir majmuasiga tashrif",
					"Yo'lboshchi (gid) xizmatlari",
				],
				secondColumnServices: [
					"Shohizinda ansambliga tashrif",
					"Xoja Doniyor qadamjosiga tashrif",
					"Amir Temur masjidi (Bibixonim)ga tashrif",
					"Mirzo Ulug‘bek observatoriyasi va muzeyiga tashrif",
					"Hazrati Xizr masjidi va I. Karimov maqbarasiga ziyorat",
					"Amirlik zindoni va boshqa tarixiy manzillarni tomosha qilish",
				],
			},
		},
		tashkent: {
			tashkentData: [
				{
					day: "1",
					title: "Sayoxatchilar yig‘ini",
					description: "Avtobus Toshkent yo‘nalishida yo‘lga chiqiladi",
				},
				{
					day: "2",
					title: "Nonushta",
					description: "Toshkent shahrida jamoaviy nonushta",
				},
				{
					day: "3",
					title: "Sayohat",
					description:
						"Ikkinchi Jahon Urushi qahramonlari sharafiga ochilgan Pobeda bog'iga sayohat.",
				},
			],

			toshkentServices: {
				servicesHead: [
					{
						countOfPeople: "joylar soni: 9 ta",
						price: "2 350 000",
					},
				],
				firstColumnServices: [
					"Nonushta",
					"Mehmonxonada tunash",
					"Politechnik muzeyiga tashrif",
					"Yo'lboshchi (gid) xizmatlari",
					"Hazrati Imom majmuasiga tashrif",
					"Poezd yoki avtobus orqali transport",
				],
				secondColumnServices: [
					"Zangi-ota ziyorati",
					"Navruz parkida sayr",
					"Pobeda parkiga tashrif",
					"Timuriylar tarix muzeyiga tashrif",
					"Magic City parkida sayr va akvariumga tashrif",
					"Chorsu bozoriga tashrif va esdalik sovg‘alar xaridi",
				],
			},
		},
		zomin: {
			zominData: [
				{
					day: "1",
					title: "Dam oluvchilar yig‘ini",
					description: "Toshkentdan Zomin yo‘nalishida yo‘lga chiqish.",
				},
				{
					day: "2",
					title: "Sayr",
					description: "Zomin milliy tabiat bog‘i bo‘ylab sayr",
				},
				{
					day: "3",
					title: "Oyna yo'lak",
					description:
						"Osma dor yo‘li (kanatka) orqali yangi qurib bitkazilgan oynali yo‘lak (osma ko‘prik) “Suffa 2400” dam olish maskaniga tashrif.",
				},
			],

			zominServices: {
				servicesHead: [
					{
						countOfPeople: "kishi boshiga",
						price: "1 700 000",
					},
				],
				firstColumnServices: [
					"Mehmonxona",
					"Shahar sayrlari",
					"Transport xizmatlari",
					"Birinchi kun tushlik",
					"Birinchi kun kechki ovqat",
					"Suv ombori bo‘ylab sayohat",
				],
				secondColumnServices: [
					"Zomin milliy tabiat bog‘i” bo‘ylab sayr",
					"Zomin sharsharasi va Boboyong‘oq manzarasi",
					"Milliy musiqalar ostida bayram, madaniy hordiq",
					"Stol tennisi, kino va boshqa ko‘ngilochar dasturlar",
					"“Suffa 2400” maskanidagi yangi qurilgan oynali yo‘lak",
					"Amirlik zindoni va boshqa tarixiy manzillarni tomosha qilish",
				],
			},
		},
		turkiston: {
			turkistonData: [
				{
					day: "1",
					title: "Sayoxatchilar yig‘ini",
					description: "Avtobus Toshkent-Buxoro yo‘nalishida yo‘lga chiqiladi",
				},
				{
					day: "2",
					title: "Qozog'istonga kirib kelish",
					description:
						"Qozog'iston Respublikasi Jibek joli (Ipak yo'li) davlatlararo chegara o'tkazish postida bojxona tekshiruvi (vaqt zonasi +1)",
				},
				{
					day: "3",
					title: "Sayohat",
					description:
						"Sayramda joylashgan Ibrohim ota maqbarasiga (XVII asr) tashrif.",
				},
			],

			turkistonServices: {
				servicesHead: [
					{
						countOfPeople: "joylar soni: 50 ta",
						price: "1 500 000",
					},
				],
				firstColumnServices: [
					"Nonushta",
					"Mehmonxonada tunash",
					"Transport xizmatlari",
					"Ziyorat va ekskursiyalar",
					"Yo'lboshchi (gid) xizmatlari",
					"Sayram shaharchasiga yo'l olish",
				],
				secondColumnServices: [
					"Ibrahim ota maqbarasi ziyorati",
					"Qorasoq momo maqbarasi ziyorati",
					"Chimkent shahrida kafeda tushlik",
					"Vinetsiya shaharchasi va Karvon saroyida sayohat",
					"Otror dagi Arslon bab maqbarasi ziyorati Kafeda kechki ovqat",
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
					<h2 className="text-[30px] font-bold">
						2 kunlik sayohatingizda nimalar bo’ladi?
					</h2>
					<p className="text-[18px] mt-2 font-medium">
						Safaringiz davomida nimalar bo’lishini bilib oling
					</p>
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
					Ko'proq ma'lumot olish
				</button>

				<div className="relative w-full flex justify-between p-12 tracking-wide border-2 border-green-400 rounded-[20px] mt-20">
					<div className="absolute -top-9 left-[4rem] bg-green-400 text-white px-12 py-[3px] rounded-t-[15px] flex justify-center items-center font-bold text-[20px]">
						Narxi
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
							Joyni band qilish
						</button>
						<p className="font-medium mt-4 text-black/70 text-[17px]">
							Joylar soni cheklangan !
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
