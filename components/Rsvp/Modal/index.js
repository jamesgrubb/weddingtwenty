import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
export default function Modal({ show, children }) {
	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (isBrowser) {
		return ReactDOM.createPortal(
			<div>
				Hello from createPortal
				<div className=''>{children}</div>
			</div>
		);
	}

	return <div></div>;
}
