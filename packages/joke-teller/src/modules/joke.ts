export type APIJoke =
  | {
      setup: string;
      delivery: string;

      id: number;
    }
  | {
      id: number;
      joke: string;
    };

export const selectJokeText = (joke: APIJoke) => {
  if ("setup" in joke) return `${joke.setup} ${joke.delivery}`;
  return joke.joke;
};
