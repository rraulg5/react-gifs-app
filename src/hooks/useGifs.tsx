import { useState } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleLabelClicked = async (label: string) => {
    if (gifsCache[label]) {
      setGifs(gifsCache[label]);
      return;
    }
    setGifs(await getGifsByQuery(label));
  };

  const handleSearch = async (search: string) => {
    search = search.trim().toLowerCase();

    if (search === '') return;
    if (previousSearches.includes(search)) return;

    setPreviousSearches((prevSearches) =>
      [search, ...prevSearches].slice(0, 8),
    );

    const gifs = await getGifsByQuery(search);
    setGifs(gifs);
    gifsCache[search] = gifs;
  };
  return {
    // Values
    gifs,
    previousSearches,
    // Methods
    handleLabelClicked,
    handleSearch,
  };
};
