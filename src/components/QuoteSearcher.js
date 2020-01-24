import React, { Component } from "react";

export default class QuoteSearcher extends Component {
  state = {
    loading: true,
    error: false,
    quotes: [],
    quoteCount: 0
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
  render() {
    console.log(this.state.quotes);

    return this.state.loading ? (
      <div>Data Loading</div>
    ) : (
      <div>{this.state.quoteCount}</div>
    );
  }
}
