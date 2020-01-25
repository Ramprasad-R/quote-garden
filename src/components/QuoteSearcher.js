import React, { Component } from "react";
import Quote from "./Quote";
import SearchQuote from "./SearchQuote";
export default class QuoteSearcher extends Component {
  state = {
    loading: true,
    error: false,
    quotes: [],
    quoteCount: 0,
    totalLike: 0,
    totalDislike: 0,
    searchQuoteUri: "tree"
  };
  invokeAPIToFetchQuote = async () => {
    try {
      const quoteData = await fetch(
        `https://quote-garden.herokuapp.com/quotes/search/${this.state.searchQuoteUri}`
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
  componentDidMount = async () => this.invokeAPIToFetchQuote();
  increaseTotalLike = () =>
    this.setState({ totalLike: this.state.totalLike + 1 });
  increaseTotalDislike = () =>
    this.setState({ totalDislike: this.state.totalDislike + 1 });
  triggerSearch = searchText => {
    this.setState(
      {
        searchQuoteUri: searchText,
        loading: true
      },
      () => {
        this.invokeAPIToFetchQuote();
      }
    );
  };
  render() {
    return this.state.loading ? (
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <div>
          <SearchQuote triggerSearch={this.triggerSearch} />
        </div>
        <div>
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="material-icons">done_all</i>
                Total number of Quotes
                <span class="badge">{this.state.quoteCount}</span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">thumb_up</i>
                Total Likes
                <span class="badge">{this.state.totalLike}</span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons ">thumb_down</i>
                Total Dislikes
                <span class="badge">{this.state.totalDislike}</span>
              </div>
            </li>
          </ul>
        </div>
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
