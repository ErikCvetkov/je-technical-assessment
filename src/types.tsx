export interface MovieState {
    movies: SearchResult[];
}

export interface Movie {
    imdbID: string;
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

export type FetchType = 't' | 'i';
