class DataSource {
	static async searchFood(keyword) {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
				'X-RapidAPI-Host': process.env.X_RAPID_API_HOST,
			},
		};

		const response = await fetch(
			`https://yummly2.p.rapidapi.com/feeds/search?q=${keyword}&maxResult=20`,
			options
		);

		const status = response.status;

		if (status === 200) {
			const responseJson = await response.json();
			return responseJson;
		}

		return Promise.reject(status);
	}
}

export default DataSource;
