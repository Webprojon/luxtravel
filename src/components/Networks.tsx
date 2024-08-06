import { useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import {
	FaInstagram,
	FaPhoneAlt,
	FaTelegramPlane,
	FaWhatsapp,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Networks() {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div className="relative z-[800]">
			<div
				className={`fixed right-[1.3rem] bottom-[6rem] flex flex-col gap-y-3 transition-transform duration-300 lg:right-[3rem] lg:bottom-[7rem] 
					 ${isClicked ? "translate-y-0" : "translate-y-16 opacity-0"}`}
			>
				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-sky-900">
					<a href="tel:+998-93-169-34-54">
						<FaPhoneAlt className="size-6 text-white" />
					</a>
				</div>

				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-red-400">
					<a href="https://www.instagram.com" target="blank">
						<FaInstagram className="size-7 text-white" />
					</a>
				</div>

				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-green-500">
					<a href="https://www.instagram.com" target="blank">
						<FaWhatsapp className="size-7 text-white" />
					</a>
				</div>

				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-blue-500">
					<a href="https://t.me" target="blank">
						<FaTelegramPlane className="size-6 text-white" />
					</a>
				</div>
			</div>

			<div
				onClick={() => setIsClicked(!isClicked)}
				className="w-[4rem] h-[4rem] flex justify-center items-center bg-green-500 text-white cursor-pointer fixed right-3 bottom-3 rounded-full lg:right-[2.5rem] lg:bottom-8"
			>
				{isClicked ? (
					<IoMdClose className="size-7" />
				) : (
					<BiMessageRoundedDots className="size-10" />
				)}
			</div>
		</div>
	);
}