import axios from "axios";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { useGlobalContext } from "../../context/global-context";
import { useTranslation } from "react-i18next";

export default function Contact() {
	const { setIsModal } = useGlobalContext();
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [textAreaValue, settextAreaValue] = useState("");
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();

	const SendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		event.preventDefault();
		const token = "6948864577:AAHTh7RO9xCZ6WFKQCle7YqvOnbfcXZIaP4";
		const chat_id = "5850460435";
		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const messageContent = `Ism:  ${nameValue} \nTelefon no'mer: ${phoneValue} \nSavol: ${textAreaValue}`;

		axios({
			url: url,
			method: "POST",
			data: {
				chat_id: chat_id,
				text: messageContent,
			},
		})
			.then(() => {
				setNameValue("");
				setPhoneValue("");
				settextAreaValue("");
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<section id="contact" className="mt-20 scroll-mt-28">
			<h2 className="mb-10 text-center text-[30px] text-black/85 font-bold">
				{t("contact-h2")}
			</h2>
			<div className="bg-black/85 rounded-[15px] py-10 flex justify-evenly mx-auto lg:max-w-[1250px]">
				<div className="w-[500px] text-white pl-10 pr-20">
					<p className="font-bold text-[28px] leading-none">{t("contact-p")}</p>
					<form
						onSubmit={SendMessage}
						className="flex items-start gap-y-6 flex-col mt-12"
					>
						<input
							required
							type="text"
							value={nameValue}
							placeholder={t("contact-form-name")}
							onChange={(e) => setNameValue(e.target.value)}
							className="bg-transparent border border-gray-600 rounded-md w-full py-2 px-3 placeholder:text-white outline-none"
						/>
						<input
							required
							type="tel"
							placeholder="+998"
							value={phoneValue}
							onChange={(e) => setPhoneValue(e.target.value)}
							className="bg-transparent border border-gray-600 rounded-md w-full py-2 px-3 placeholder:text-white outline-none"
						/>
						<textarea
							rows={3}
							required
							value={textAreaValue}
							placeholder={t("contact-form-textarea")}
							onChange={(e) => settextAreaValue(e.target.value)}
							className="resize bg-transparent border border-gray-600 rounded-md w-full py-2 px-3 placeholder:text-white outline-none"
						></textarea>

						<div className="flex items-center gap-x-2">
							<input type="checkbox" name="checkbox" id="checkbox" required />
							<label htmlFor="checkbox">{t("contact-agree")}</label>
						</div>

						<button
							onClick={() => setIsModal(true)}
							className="mt-4 py-3 px-20 bg-green-500 font-semibold text-white tracking-wider text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow"
						>
							{loading ? t("contact-sending-btn") : t("contact-btn")}
						</button>
					</form>
				</div>

				<div className="text-white w-[500px] pr-10">
					<p className="text-[17px]">{t("contact-p2")}</p>

					<div>
						<iframe
							className="my-4 w-full h-[32vh] rounded-md"
							src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11984.772071838523!2d69.26513!3d41.326416!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzM1LjEiTiA2OcKwMTUnNTQuNSJF!5e0!3m2!1sru!2sus!4v1722885376047!5m2!1sru!2sus"
						></iframe>
					</div>

					<div className="flex flex-col gap-y-4">
						<a
							href="https://www.google.com/maps"
							target="blank"
							className="flex items-center gap-x-2"
						>
							<FaLocationDot className="size-6" />
							{t("contact-address")}
						</a>
						<a
							href="tel:+998-99-123-45-67"
							target="blank"
							className="flex items-center gap-x-2"
						>
							<MdOutlinePhoneInTalk className="size-6" />
							+998 99 123 45 67
						</a>
						<a
							href="mailto:luxtravel@mail.ru"
							target="blank"
							className="flex items-center gap-x-2"
						>
							<MdOutlineMail className="size-6" />
							luxtravel@mail.ru
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
