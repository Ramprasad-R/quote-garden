import React from "react";
const Quote = props => {
  const { quotes, quoteCount } = props;
  const likeClicked = event => {
    console.log("LikeClicked", event.target.id);
    props.increaseTotalLike();
  };
  const dislikeClicked = event => {
    console.log("DislikeClicked", event.target.id);
    props.increaseTotalDislike();
  };
  return (
    <div>
      <div>
        <h1>Quotes</h1>
        <p>Total number of Quote: {quoteCount}</p>
      </div>
      <div>
        {quotes ? (
          quotes.map(quote => {
            return (
              <div>
                <div id={quote._id} key={quote._id}>
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
