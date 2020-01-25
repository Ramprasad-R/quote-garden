import React, { useState } from "react";
import "./Quote.css";
const Quote = props => {
  const { quotes, quoteCount } = props;
  const [quoteList, setQuoteList] = useState(quotes);
  //const [isLiked, setQuoteColor] = useState(false);
  if (!quoteList) {
    setQuoteList([...quotes]);
  }
  //console.log("quotes", quotes);
  //console.log("quote list", quoteList);

  // const likeClicked = event => {
  //   console.log("LikeClicked", event.target.id);
  //   document.getElementById(event.target.id).style.color = "green";
  //   //setQuoteColor("green");
  //   props.increaseTotalLike();
  // };
  // const dislikeClicked = event => {
  //   console.log("DislikeClicked", event);
  //   document.getElementById(event.target.id).style.color = "red";
  //   // setQuoteColor("red");
  //   props.increaseTotalDislike();
  // };
  return (
    <div>
      <div>
        <h1>Quotes</h1>
        <p>Total number of Quote: {quoteCount}</p>
      </div>
      <div>
        {console.log("quote list", quoteList)}
        {quoteList ? (
          quoteList.map(quote => {
            const likeClicked = event => {
              //console.log("LikeClicked", event.target.id);
              const updatedQuote = quoteList.map(quote => {
                return quote._id === event.target.id
                  ? { ...quote, style: "green" }
                  : quote;
              });
              //console.log("Updated quote", updatedQuote);
              props.increaseTotalLike();
              setQuoteList(updatedQuote);
            };
            const dislikeClicked = event => {
              const updatedQuote = quoteList.map(quote => {
                return quote._id === event.target.id
                  ? { ...quote, style: "red" }
                  : quote;
              });
              console.log("Updated quote", updatedQuote);
              props.increaseTotalDislike();
              setQuoteList(updatedQuote);
            };
            return (
              <div>
                <div
                  style={{ color: quote.style ? quote.style : "black" }}
                  testtag={quote.style}
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
