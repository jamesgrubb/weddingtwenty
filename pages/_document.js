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
				<body
					className='bg-teal-300'
					style={{
						backgroundImage:
							'url(https://res.cloudinary.com/makingthings/image/upload/o_50,c_scale,f_auto,q_56,w_600/v1635923936/wedding/Snow_White.png)',
					}}>
					<Main />
					<NextScript />
					<div id='modal-root'></div>
				</body>
			</Html>
		);
	}
}

export default WeddingDocument;
