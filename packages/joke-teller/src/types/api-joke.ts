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
