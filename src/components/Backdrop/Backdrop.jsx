import { useEffect } from "react";
import { createPortal } from "react-dom"
import { BackdropDiv } from "./Backdrop.styled"

const modalRoot = document.querySelector('#modal-root');

export const Backdrop = ({ children, showModalHandler }) => {

	const handleKeyDown = (e) => {
		if (e.code === "Escape") {
			showModalHandler();
		}
	}

	const handleBackdropclick = (e) => {
		if (e.target === e.currentTarget) {
			showModalHandler();
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	return createPortal(<BackdropDiv onClick={handleBackdropclick}>{children}</ BackdropDiv>, modalRoot)
}

