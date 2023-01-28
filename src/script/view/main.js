import '../component/food-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const Layout = () => {
	const searchElement = document.querySelector('search-bar');
	const foodListElement = document.querySelector('food-list');

	const onButtonSearchClicked = async () => {
		try {
			fallbackResult('Loading...');
			const result = await DataSource.searchFood(searchElement.value);
			renderResult(result);
		} catch (message) {
			fallbackResult(message);
		}
	};

	const renderResult = (results) => {
		const data = results.feed.map((food) => {
			return {
				name: food.display.displayName,
				fanArt: food.display.images[0],
				description: food.display.displayName,
			};
		});

		foodListElement.foods = data;
	};

	const fallbackResult = (message) => {
		foodListElement.renderError(message);
	};

	searchElement.clickEvent = onButtonSearchClicked;
};

export default Layout;
