import React from "react";
const Quote = props => {
  const { quotes, quoteCount } = props;
  return (
    <div>
      <div>
        <h1>Quote Garden</h1>
        <p>Total number of Quote: {quoteCount}</p>
      </div>
      <div>
        {quotes ? (
          quotes.map(quote => {
            return (
              <div id={quote._id} key={quote._id}>
                <p>{quote.quoteText}</p>
                <p>{quote.quoteAuthor}</p>
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
