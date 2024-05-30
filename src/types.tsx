export interface MovieState {
    movies: Record<string, any>[];
}

export interface SearchState {
    value: string;
}

export interface SearchResult {
    Title: string;
    Poster: string;
    Plot: string;
    Response: string;
    Error: string;
    Year: string;
    Actors: string;
    imdbID: string;
}