import { RiMenu3Fill } from "react-icons/ri";
import headerLogo from "../../assets/Images/generals/logo.png";
import { IoClose } from "react-icons/io5";
import HeaderLang from "./Header-Lang";
import HeaderLists from "./Header-Lists";
import { useGlobalContext } from "../../context/global-context";
import { useEffect, useState } from "react";

export default function Header() {
	const { isToggle, setIsToggle } = useGlobalContext();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		if (isToggle) {
			document.body.classList.add("no-scroll-global");
		} else {
			document.body.classList.remove("no-scroll-global");
		}

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isToggle]);

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const handleToggle = () => {
		setIsToggle(!isToggle);
	};

	return (
		<header
			className={`
				${isScrolled ? "bg-black z-[999]" : "bg-transparent"}  fixed left-0 right-0`}
		>
			<div className="mx-auto lg:max-w-[1250px]">
				<nav className="flex justify-between items-center h-[11vh] md:h-auto">
					<a href="#main">
						<img
							src={headerLogo}
							alt="logo img"
							className="w-16 md:w-[5.7rem]"
						/>
					</a>
					<div
						onClick={handleToggle}
						className="cursor-pointer p-1 bg-white rounded-sm mr-3"
					>
						<RiMenu3Fill className="size-6" />
					</div>
				</nav>

				<div
					onClick={handleToggle}
					className={`z-10 fixed right-0 top-0 bg-black/40 w-full h-full duration-300 
					${isToggle ? "block" : "hidden"}`}
				></div>

				<aside
					className={`fixed right-0 top-0 bg-white h-screen w-full xs:w-[25rem] z-[500] transition-transform duration-300
					${isToggle ? "translate-x-0" : "translate-x-full"} `}
				>
					<div className="px-5 py-4 cursor-pointer">
						<IoClose
							onClick={handleToggle}
							className="size-7  hover:bg-black/5 rounded-sm transition-all"
						/>
					</div>

					<div className="border-t mb-8"></div>

					<HeaderLang />

					<HeaderLists />
				</aside>
			</div>
		</header>
	);
}
