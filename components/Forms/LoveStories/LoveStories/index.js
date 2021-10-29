import LoveStoriesForm from '../LoveStoriesForm';

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

	return <LoveStoriesForm onGetLoveStory={saveLoveStoryHandler} />;
}

export default LoveStories;
