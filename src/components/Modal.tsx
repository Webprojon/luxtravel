import { useEffect } from "react";
import { useGlobalContext } from "../context/global-context";
import { useTranslation } from "react-i18next";

export default function Modal() {
	const { isModal, setIsModal } = useGlobalContext();
	const { t } = useTranslation();

	useEffect(() => {
		if (isModal) {
			document.body.classList.add("no-scroll");
		}
	}, [isModal]);

	const handleChange = () => {
		setIsModal(!isModal);
		document.body.classList.remove("no-scroll");
	};
	return (
		<div
			onClick={handleChange}
			className="fixed top-0 left-0 h-full w-full bg-black/80 z-50"
		>
			<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[95%] rounded-xl bg-slate-200 z-50 md:w-[400px]">
				<div className="text-slate-800 px-4 py-6 md:py-10">
					<p className="font-semibold text-[17px] text-center md:text-[20px]">
						{t("modal-p")} 😊
					</p>
				</div>
			</div>
		</div>
	);
}
