import React, { useState } from "react";
import "./Quote.css";
const Quote = props => {
  const { quotes } = props;
  const [quoteList, setQuoteList] = useState(quotes);
  if (!quoteList) {
    setQuoteList([...quotes]);
  }
  return (
    <div>
      <div>
        {quoteList.length > 0 ? (
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
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{quote.quoteText}</h5>
                      <p className="card-text">By: {quote.quoteAuthor}</p>
                    </div>
                    <p>
                      <i
                        id={quote._id}
                        className="far fa-thumbs-up btn btn-Primary btn-custom-like"
                        onClick={likeClicked}
                      ></i>
                      <i
                        id={quote._id}
                        className="far fa-thumbs-down btn btn-Secondary btn-custom-dislike"
                        onClick={dislikeClicked}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h5 class="no-content">
              Try someother search word. No quote available for this search
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quote;
