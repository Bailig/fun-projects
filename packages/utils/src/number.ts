const zeroPad = (number: number) => {
  const numberString = `${Math.floor(number)}`;
  return `0${numberString}`.slice(-2);
};

export const secondsToTime = (totalSeconds: number) => {
  const displaySeconds = totalSeconds % 60;
  const totalMinutes = (totalSeconds - displaySeconds) / 60;
  const displayMinutes = totalMinutes % 60;
  return `${zeroPad(displayMinutes)}:${zeroPad(displaySeconds)}`;
};
