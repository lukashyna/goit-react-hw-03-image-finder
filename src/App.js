import React, { Component } from "react";
import Searchbar from "./components/searchBar/searchBar";
import ImageGallery from "./components/imageGallery/imageGallery";
import Loader from "./components/loader/loader";
import Button from "./components/button/button";
import Modal from "./components/modal/modal";
import articlesApi from "./services/articlesApi";
import styles from "./app.module.css";

export default class App extends Component {
  state = {
    articles: [],
    isModalOpen: false,
    loading: false,
    searchQuery: "",
    page: 1,
    largeImageURL: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchArticles();
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }
  fetchArticles = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    articlesApi
      .fetchArticlesWithQuery(searchQuery, page)
      .then((article) =>
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...article],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  // loadMore = (page) => {
  //   this.fetchArticles();
  //   console.log(page);
  //   this.setState({
  //     page: page + 1,
  //   });
  // };

  handleSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      articles: [],
    });
  };
  getlargeImageURL = (e) => {
    this.setState({ largeImageURL: e.target.dataset.src });
    this.openModal();
  };
  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen, articles, loading, largeImageURL } = this.state;
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        {articles.length > 0 && (
          <ImageGallery
            articles={articles}
            isModal={isModalOpen}
            largeImageURL={largeImageURL}
            onOpen={this.openModal}
            onClose={this.closeModal}
            onGetLargeImageURL={this.getlargeImageURL}
          />
        )}
        {loading && <Loader />}
        {articles.length > 0 && !loading && (
          <Button onClick={this.fetchArticles} />
        )}
        {isModalOpen && (
          <Modal onClose={this.closeModal} largeImageURL={largeImageURL} />
        )}
      </div>
    );
  }
}
