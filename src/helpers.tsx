export const getMovieData = async (fetchType: string, data: string): Promise<any> => {
    const key = 'd51c3617';
    const api = `https://www.omdbapi.com/?apikey=${key}&${fetchType}=${data}`;

    const response = await fetch(api);
    const result = await response.json();
    return result;
}