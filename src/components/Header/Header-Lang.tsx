import { useEffect, useState } from "react";
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
				src="https://vectorflags.s3.amazonaws.com/flags/uz-circle-01.png"
				alt="Uzbekistan flag"
				onClick={() => handleClick("uz")}
				className="w-10 hover:scale-105 transition-all custom-shadow rounded-full"
			/>
			<img
				src="https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png"
				alt="Russian flag"
				onClick={() => handleClick("ru")}
				className="w-10 hover:scale-105 transition-all custom-shadow rounded-full"
			/>
			<img
				src="https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg"
				alt="English flag"
				onClick={() => handleClick("en")}
				className="w-10 hover:scale-105 transition-all custom-shadow rounded-full"
			/>
		</div>
	);
}
