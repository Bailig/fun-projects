import React, { FC, useEffect, useState } from "react";
import { Quote } from "./quote";

interface ApiQuote {
  text: string;
  author: string;
}

export const QuoteContainer: FC = () => {
  const [quotes, setQuotes] = useState<ApiQuote[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((error_) => setError(error_));
  }, []);

  if (error) return <>Oops! something went wrong</>;
  if (!quotes) return <>loading...</>;
  if (quotes.length === 0) return <>out of quotes</>;

  const handleNew = () => {
    setQuotes((q) => q?.slice(1, Infinity));
  };

  return (
    <Quote text={quotes[0].text} author={quotes[0].author} onNew={handleNew} />
  );
};
