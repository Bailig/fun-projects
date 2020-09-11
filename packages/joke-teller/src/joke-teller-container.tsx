import React, { FC } from "react";

export const JokeTellerContainer: FC = () => {
  return (
    <>
      <button type="button">Tell me a joke</button>
      <audio controls>
        <track kind="captions" />
      </audio>
    </>
  );
};
