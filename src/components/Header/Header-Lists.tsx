import buxoro from "../../assets/Images/places/buxoro.png";
import samarqand from "../../assets/Images/places/samarqand.png";
import turkiston from "../../assets/Images/places/turkiston.png";
import tashkent from "../../assets/Images/places/tashkent.jpg";
import villa from "../../assets/Images/places/villa.png";
import zomin from "../../assets/Images/places/zomin.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/global-context";

export default function HeaderLists() {
	const { isToggle, setIsToggle } = useGlobalContext();

	const handleToggle = () => {
		setIsToggle(!isToggle);

		if (window.location.pathname === "/tashkent") {
			console.log("yes it is tashkent");
		}
	};

	return (
		<div
			onClick={handleToggle}
			className="flex flex-col gap-y-8 px-6 mt-12 pb-16 h-[81vh] overflow-y-auto no-scroll"
		>
			<Link
				to="/villa"
				className="flex items-center gap-x-6 font-semibold text-[18px] tracking-wide hover:text-blue-400 transition-all cursor-pointer"
			>
				<img
					src={villa}
					alt="imgs"
					className="w-[5rem] h-[5rem] object-cover rounded-full"
				/>
				Dam olish maskanlari
			</Link>

			<Link
				to="/"
				className="flex items-center gap-x-6 font-semibold text-[18px] tracking-wide hover:text-blue-400 transition-all cursor-pointer"
			>
				<img
					src={buxoro}
					alt="imgs"
					className="w-[5rem] h-[5rem] object-cover rounded-full"
				/>
				Buxoro
			</Link>

			<Link
				to="/samarkand"
				className="flex items-center gap-x-6 font-semibold text-[18px] tracking-wide hover:text-blue-400 transition-all cursor-pointer"
			>
				<img
					src={samarqand}
					alt="imgs"
					className="w-[5rem] h-[5rem] object-cover rounded-full"
				/>
				Samarqand
			</Link>

			<Link
				to="/tashkent"
				className="flex items-center gap-x-6 font-semibold text-[18px] tracking-wide hover:text-blue-400 transition-all cursor-pointer"
			>
				<img
					src={tashkent}
					alt="imgs"
					className="w-[5rem] h-[5rem] object-cover rounded-full"
				/>
				Tasheknt
			</Link>

			<Link
				to="/zomin"
				className="flex items-center gap-x-6 font-semibold text-[18px] tracking-wide hover:text-blue-400 transition-all cursor-pointer"
			>
				<img
					src={zomin}
					alt="imgs"
					className="w-[5rem] h-[5rem] object-cover rounded-full"
				/>
				Zomin
			</Link>

			<Link
				to="/turkiston"
				className="flex items-center gap-x-5 font-semibold text-[18px] tracking-wide hover:text-blue-400 transition-all cursor-pointer"
			>
				<img
					src={turkiston}
					alt="imgs"
					className="w-[5rem] h-[5rem] object-cover rounded-full"
				/>
				Turkiston
			</Link>
		</div>
	);
}
