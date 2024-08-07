import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function FaqPage() {
	const [toggle, setToggle] = useState<number | null>(null);
	const { t } = useTranslation();

	const handleToggle = (id: number | null) => {
		setToggle((prev) => (prev === id ? null : id));
	};

	const faqs = [
		{
			id: 1,
			question: t("faq1.question"),
			answer: t("faq1.answer"),
		},
		{
			id: 2,
			question: t("faq2.question"),
			answer: t("faq2.answer"),
		},
		{
			id: 3,
			question: t("faq3.question"),
			answer: t("faq3.answer"),
		},
		{
			id: 4,
			question: t("faq4.question"),
			answer: t("faq4.answer"),
		},
	];
	return (
		<section
			id="faq"
			className="mt-20 scroll-mt-24 lg:scroll-mt-40 lg:max-w-[1250px] mx-auto"
		>
			<div className="lg:flex justify-between md:mt-8">
				<h2 className="font-bold text-[32px] text-black/85">{t("faq-h2")}</h2>
				<div className="flex flex-col gap-y-8">
					{faqs.map(({ id, question, answer }) => (
						<div key={id} className="lg:w-[900px] lg:pr-5">
							<div className="border-b">
								<div className="group flex items-center justify-between pb-2 lg:mb-2">
									<h2
										onClick={() => handleToggle(id)}
										className="text-sm cursor-pointer font-medium text-black/85 tracking-wide xs:text-[16px] md:text-[20px] lg:text-[23px]"
									>
										{question}
									</h2>
									<div
										onClick={() => handleToggle(id)}
										className="transition-max-height duration-500 ease-in-out flex justify-center items-center p-1 cursor-pointer rounded-full group-hover:text-white group-hover:bg-black/60 xs:p-2"
									>
										{toggle === id ? (
											<IoMdClose className="size-7" />
										) : (
											<FiPlus className="size-7" />
										)}
									</div>
								</div>
								<div
									className={`overflow-hidden transition-max-height duration-500 ease-in-out 
										${toggle === id ? "max-h-screen" : "max-h-0"}`}
								>
									<p className="text-sm text-black/85 pb-4 tracking-wider xs:text-md md:text-lg">
										{answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
