import { useEffect, useState } from "react";
import type { RefObject } from "react";

export default function useContainerDimensions<T extends HTMLElement>(
	containerRef?: RefObject<T>,
) {
	const getDimensions = () => ({
		width: containerRef?.current?.offsetWidth || 0,
		height: containerRef?.current?.offsetHeight || 0,
	});

	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const handleResize = () => {
			setDimensions(getDimensions());
		};

		if (containerRef?.current) {
			setDimensions(getDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [containerRef]);

	return dimensions;
}
