import useSWR from "swr";
import { TEXT_TO_SPEECH_API_KEY } from "../config";

const getTextToSpeechAPIUrl = (text?: string) =>
  text
    ? `https://api.voicerss.org/?key=${TEXT_TO_SPEECH_API_KEY}&hl=en-us&c=MP3&b64=true&src=${text}`
    : null;

const fetchText = async (url: string) => {
  const response = await fetch(url);
  return response.text();
};

export const useFetchSpeech = (text?: string) => {
  const res = useSWR<string>(getTextToSpeechAPIUrl(text), fetchText);
  return res;
};
