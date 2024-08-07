import { useEffect, useState } from "react";
import enFlag from "../../assets/Images/flags/enFlag.png";
import ruFlag from "../../assets/Images/flags/ruFlag.png";
import uzFlag from "../../assets/Images/flags/uzFlag.png";
import { useGlobalContext } from "../../context/global-context";
import { useTranslation } from "react-i18next";

export default function HeaderLang() {
	const { isToggle, setIsToggle } = useGlobalContext();
	const [selectedLanguage, setSelectedLanguage] = useState("");
	const { i18n } = useTranslation();

	const handleToggle = () => {
		setIsToggle(!isToggle);
	};

	useEffect(() => {
		const initialLanguage =
			typeof window !== "undefined"
				? localStorage.getItem("i18nextLng") || "uz"
				: "uz";
		setSelectedLanguage(initialLanguage);
	}, []);

	const handleClick = (language: string) => {
		console.log(selectedLanguage);
		setSelectedLanguage(language);
		i18n.changeLanguage(language);
		localStorage.setItem("i18nextLng", language);
	};

	return (
		<div
			onClick={handleToggle}
			className="flex justify-center gap-x-8 cursor-pointer"
		>
			<img
				src={uzFlag}
				alt="Uzbekistan flag"
				onClick={() => handleClick("uz")}
				className="w-10 hover:scale-105 transition-all shadow-lg rounded-full"
			/>
			<img
				src={ruFlag}
				alt="Russian flag"
				onClick={() => handleClick("ru")}
				className="w-10 hover:scale-105 transition-all shadow-lg rounded-full"
			/>
			<img
				src={enFlag}
				alt="English flag"
				onClick={() => handleClick("en")}
				className="w-10 hover:scale-105 transition-all shadow-lg rounded-full"
			/>
		</div>
	);
}
