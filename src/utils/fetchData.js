export const exerciseOptions = {
    method: 'GET',
    params: {limit: '1500'},
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_EXERCISE_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_YT_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
}
