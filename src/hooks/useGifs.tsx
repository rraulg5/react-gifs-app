import { useRef, useState } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleLabelClicked = async (label: string) => {
    if (gifsCache.current[label]) {
      setGifs(gifsCache.current[label]);
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
    gifsCache.current[search] = gifs;
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
