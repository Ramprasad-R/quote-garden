import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    loading: true,
    error: false,
    quotes: [],
    quoteCount: 0,
    totalLike: 0,
    totalDislike: 0
  };
  componentDidMount = async () => {
    try {
      const quoteData = await fetch(
        "https://quote-garden.herokuapp.com/quotes/all"
      );
      const parsedQuoteData = await quoteData.json();
      this.setState({
        loading: false,
        quotes: parsedQuoteData.results,
        quoteCount: parsedQuoteData.count
      });
    } catch (error) {
      this.setState({
        error: error
      });
    }
  };
  increaseTotalLike = () =>
    this.setState({ totalLike: this.state.totalLike + 1 });

  increaseTotalDislike = () =>
    this.setState({ totalDislike: this.state.totalDislike + 1 });

  render() {
    console.log(this.state.quotes);

    return this.state.loading ? (
      <div>Data Loading</div>
    ) : (
      <div>
        <p>Total number of Like: {this.state.totalLike}</p>
        <p>Total number of Dislike: {this.state.totalDislike}</p>
        <Quote
          increaseTotalLike={this.increaseTotalLike}
          increaseTotalDislike={this.increaseTotalDislike}
          quotes={this.state.quotes}
          quoteCount={this.state.quoteCount}
        />{" "}
      </div>
    );
  }
}
