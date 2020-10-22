import { TEXT_TO_SPEECH_API_KEY } from "./config";
import { APIJoke } from "./types";

export const jokeAPIUrl =
  "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist";

export const fetchText = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  return response.text();
};

export const toJokeString = (joke: APIJoke) => {
  if ("setup" in joke) return `${joke.setup} ${joke.delivery}`;
  return joke.joke;
};

export const getTextToSpeechAPIUrl = (text?: string) =>
  text
    ? `https://api.voicerss.org/?key=${TEXT_TO_SPEECH_API_KEY}&hl=en-us&c=MP3&b64=true&src=${text}`
    : null;
