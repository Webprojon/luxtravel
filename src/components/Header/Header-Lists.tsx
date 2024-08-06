import buxoro from "../../assets/Images/places/buxoro.png";
import samarqand from "../../assets/Images/places/samarqand.png";
import turkiston from "../../assets/Images/places/turkiston.png";
import tashkent from "../../assets/Images/places/tashkent.jpg";
import villa from "../../assets/Images/places/villa.png";
import zomin from "../../assets/Images/places/zomin.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/global-context";
import { useEffect, useState } from "react";

export default function HeaderLists() {
	const { isToggle, setIsToggle } = useGlobalContext();
	const [title, setTitle] = useState("Dam olish maskanlari");

	const handleToggle = () => {
		setIsToggle(!isToggle);
	};

	const destinations = [
		{ path: "/", src: villa, alt: "imgs", name: "Dam olish maskanlari" },
		{ path: "/buxoro", src: buxoro, alt: "imgs", name: "Buxoro" },
		{ path: "/samarkand", src: samarqand, alt: "imgs", name: "Samarqand" },
		{ path: "/tashkent", src: tashkent, alt: "imgs", name: "Tasheknt" },
		{ path: "/zomin", src: zomin, alt: "imgs", name: "Zomin" },
		{ path: "/turkiston", src: turkiston, alt: "imgs", name: "Turkiston" },
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
						className="w-[5rem] h-[5rem] object-cover rounded-full"
					/>
					{destination.name}
				</Link>
			))}
		</div>
	);
}
