import React, { useState } from "react";
import "./Quote.css";
const Quote = props => {
  const { quotes, quoteCount } = props;
  const [quoteList, setQuoteList] = useState(quotes);
  if (!quoteList) {
    setQuoteList([...quotes]);
  }
  return (
    <div>
      <div>
        {quoteList ? (
          quoteList.map(quote => {
            const likeClicked = event => {
              const updatedQuote = quoteList.map(quote => {
                return quote._id === event.target.id
                  ? { ...quote, style: "green" }
                  : quote;
              });
              props.increaseTotalLike();
              setQuoteList(updatedQuote);
            };
            const dislikeClicked = event => {
              const updatedQuote = quoteList.map(quote => {
                return quote._id === event.target.id
                  ? { ...quote, style: "red" }
                  : quote;
              });
              props.increaseTotalDislike();
              setQuoteList(updatedQuote);
            };
            return (
              <div>
                <div
                  style={{ color: quote.style ? quote.style : "black" }}
                  id={quote._id}
                  key={quote._id}
                >
                  <p>{quote.quoteText}</p>
                  <p>By: {quote.quoteAuthor}</p>
                </div>
                <div>
                  <p>
                    <i
                      id={quote._id}
                      className="far fa-thumbs-up"
                      onClick={likeClicked}
                    ></i>
                    <i
                      id={quote._id}
                      className="far fa-thumbs-down"
                      onClick={dislikeClicked}
                    ></i>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h3>Try someother search word. No quote available for this search</h3>
        )}
      </div>
    </div>
  );
};

export default Quote;
