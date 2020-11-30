import React, { FC } from "react";
import cantYouSee from "./assets/cant-you-see.mp3";
import holidayBlues from "./assets/holiday-blues.mp3";
import strawberry from "./assets/strawberry.mp3";
import { MusicPlayer } from "./music-player";

const MUSICS = [
  {
    src: cantYouSee,
    name: "Can't you see",
    author: "Dyalla",
    credit: "Can't you see by Dyalla",
    url: "https://soundcloud.com/dyallas/cant-you-see",
  },
  {
    src: holidayBlues,
    name: "Holiday blues",
    author: "Joakim Karud",
    credit: "Holiday blues by Joakim Karud",
    url: "https://soundcloud.com/joakimkarud/holiday-blues",
  },
  {
    src: strawberry,
    name: "Strawberry",
    author: "Jeff Kaale",
    credit: "Strawberry by Jeff Kaale",
    url: "https://soundcloud.com/jeff-kaale/strawberry",
  },
];

export const MusicPlayerContainer: FC = () => {
  return <MusicPlayer musics={MUSICS} />;
};
