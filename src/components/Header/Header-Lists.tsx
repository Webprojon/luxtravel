import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/global-context";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function HeaderLists() {
	const { isToggle, setIsToggle } = useGlobalContext();
	const [title, setTitle] = useState("Dam olish maskanlari");
	const { t } = useTranslation();

	const handleToggle = () => {
		setIsToggle(!isToggle);
	};

	const destinations = [
		{
			path: "/",
			src: "https://cdn-img.readytotrip.com/t/1024x768/extranet/ec/1f/ec1f630af64aee959047f84a153451bd1797dd98.JPEG",
			alt: "imgs",
			name: t("link1"),
		},
		{
			path: "/buxoro",
			src: "https://www.shutterstock.com/image-photo/bukhara-historical-city-uzbekistan-translation-600nw-2410842963.jpg",
			alt: "imgs",
			name: t("link2"),
		},
		{
			path: "/samarkand",
			src: "https://www.unchartedbackpacker.com/wp-content/uploads/2016/07/DSC_0124.jpg",
			alt: "imgs",
			name: t("link3"),
		},
		{
			path: "/tashkent",
			src: "https://voicesoncentralasia.org/wp-content/uploads/2018/06/city21.jpg",
			alt: "imgs",
			name: t("link4"),
		},
		{
			path: "/zomin",
			src: "https://static.review.uz/crop/9/0/1400__100_902470340.jpg?v=1606807243",
			alt: "imgs",
			name: t("link5"),
		},
		{
			path: "/turkiston",
			src: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/03/05/97898.jpg",
			alt: "imgs",
			name: t("link6"),
		},
	];

	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<div
			onClick={handleToggle}
			className="flex flex-col gap-y-8 px-6 mt-12 pb-16 h-[81vh] overflow-y-auto no-scroll"
		>
			{destinations.map((destination) => (
				<Link
					onClick={() => setTitle(destination.name)}
					key={destination.path}
					to={destination.path}
					className="flex items-center gap-x-6 font-semibold text-[18px] tracking-wide hover:text-blue-400 transition-all cursor-pointer"
				>
					<img
						src={destination.src}
						alt={destination.alt}
						className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] object-cover rounded-full"
					/>
					{destination.name}
				</Link>
			))}
		</div>
	);
}
