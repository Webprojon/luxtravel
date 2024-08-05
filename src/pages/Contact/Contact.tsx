import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";

export default function Contact() {
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [textAreaValue, settextAreaValue] = useState("");
	const [loading, setLoading] = useState(false);

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
				toast.success("Successfully Sent!");
			})
			.catch((error) => {
				console.log(error);
				toast.error("Could not sent.");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<section id="contact" className="my-10 scroll-mt-28">
			<h2 className="mb-10 text-center text-[30px] text-black/85 font-bold">
				Biz bilan bog'laning
			</h2>
			<div className="bg-black/85 rounded-[15px] py-10 flex justify-between mx-auto lg:max-w-[1070px]">
				<div className="w-[500px] text-white pl-10 pr-20">
					<h2 className="font-bold text-[28px] leading-none">
						Savolingiz bormi ?
					</h2>
					<form
						onSubmit={SendMessage}
						className="flex items-start gap-y-6 flex-col mt-12"
					>
						<input
							required
							type="text"
							value={nameValue}
							placeholder="Ismingiz"
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
							placeholder="Savollaringiz"
							onChange={(e) => settextAreaValue(e.target.value)}
							className="resize bg-transparent border border-gray-600 rounded-md w-full py-2 px-3 placeholder:text-white outline-none"
						></textarea>
						<div className="flex items-center gap-x-2">
							<input type="checkbox" name="checkbox" id="checkbox" required />
							<label htmlFor="checkbox">shartlarga roziman</label>
						</div>
						<button className="mt-4 py-3 px-20 bg-amber-600 font-semibold text-white tracking-wider text-[18px] rounded-[12px] hover:scale-105 active:scale-95 transition-all custom-shadow">
							{loading ? "Yuborilmoqda" : "Yuborish"}
						</button>
					</form>
				</div>

				<div className="text-white w-[500px] pr-10">
					<p className="text-[17px]">
						Mutaxassislarimizdan barcha savollaringizga javob olmoqchi
						bo’lsangiz quyidagi manzilga tashrif buyuring yoki bizga qo’ng’iroq
						qiling
					</p>

					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.98228271276!2d20.896613431747056!3d52.232887094352805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1722849748355!5m2!1sen!2spl"
							className="my-4 w-full h-[32vh] rounded-md"
						></iframe>
					</div>

					<div className="flex flex-col gap-y-4">
						<a
							href="https://www.google.com/maps"
							target="blank"
							className="flex items-center gap-x-2"
						>
							<FaLocationDot className="size-6" />
							Toshkent shahar, Manzil ko’chasi 1a
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
							href="mailto:example@mail.ru"
							target="blank"
							className="flex items-center gap-x-2"
						>
							<MdOutlineMail className="size-6" />
							example@mail.ru
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
