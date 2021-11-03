import Document, { Html, Head, Main, NextScript } from 'next/document';

class WeddingDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,500;1,300;1,500&family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap'
						rel='stylesheet'
					/>{' '}
				</Head>
				<body className='text-gray-600 bg-teal-300'>
					<Main />
					<NextScript />
					<div id='modal-root'></div>
				</body>
			</Html>
		);
	}
}

export default WeddingDocument;
