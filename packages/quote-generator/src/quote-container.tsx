import React, { FC } from "react";
import useSWR from "swr";
import { Quote } from "./quote";

const quoteAPIUrl = "https://type.fit/api/quotes";

export const QuoteContainer: FC = () => {
  const { data: quotes, error, mutate } = useSWR<APIQuote[]>(quoteAPIUrl);

  if (error) return <>Oops! something went wrong</>;
  if (!quotes) return <>loading...</>;
  if (quotes.length === 0) return <>out of quotes</>;

  const handleNew = () => {
    mutate((q) => q.slice(1, Infinity), false);
  };

  return (
    <Quote text={quotes[0].text} author={quotes[0].author} onNew={handleNew} />
  );
};

// types
interface APIQuote {
  text: string;
  author: string;
}
