import LoveStoriesForm from '../LoveStoriesForm';
import Sketch from '../../../Sketch';
import colorTeal from '../../../../Styles/colors.module.scss';
function LoveStories() {
	const saveLoveStoryHandler = async (savedLoveStory) => {
		const stories = {
			...savedLoveStory,
		};
		const response = await fetch('/api/loveStories', {
			method: 'PUT',
			body: JSON.stringify(stories),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(async (response) => {
			console.log(response);
			if (response.ok) {
				console.log('response ok', await response.json());
			} else {
				console.error(response.status);
			}
		});
	};

	return (
		<>
			<Sketch x={50} y={50} background={colorTeal} />
			<LoveStoriesForm onGetLoveStory={saveLoveStoryHandler} />
		</>
	);
}

export default LoveStories;
