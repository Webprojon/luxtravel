import enFlag from "../../assets/Images/flags/enFlag.png";
import ruFlag from "../../assets/Images/flags/ruFlag.png";
import uzFlag from "../../assets/Images/flags/uzFlag.png";
import { useGlobalContext } from "../../context/global-context";

export default function HeaderLang() {
	const { isToggle, setIsToggle } = useGlobalContext();

	const handleToggle = () => {
		setIsToggle(!isToggle);
	};

	return (
		<div
			onClick={handleToggle}
			className="flex justify-center gap-x-8 cursor-pointer"
		>
			<img
				src={uzFlag}
				alt="flags"
				className="w-10 hover:scale-105 transition-all shadow-lg rounded-full"
			/>
			<img
				src={ruFlag}
				alt="flags"
				className="w-10 hover:scale-105 transition-all shadow-lg rounded-full"
			/>
			<img
				src={enFlag}
				alt="flags"
				className="w-10 hover:scale-105 transition-all shadow-lg rounded-full"
			/>
		</div>
	);
}
