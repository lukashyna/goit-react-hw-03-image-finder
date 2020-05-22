import React, { Component } from 'react';
import Searchbar from './components/searchBar/searchBar';
import ImageGallery from './components/imageGallery/imageGallery';
import Loader from './components/loader/loader';
import Button from './components/button/button';
import Modal from './components/modal/modal';
import Notification from './components/notification/notification';
import articlesApi from './services/articlesApi';
import styles from './app.module.css';

export default class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    const prevQuery = prevState.searchQuery;
    const nextQuery = searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
    if (prevState.articles.length > 12) {
      this.scrollTo();
    }
  }

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchArticles = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    articlesApi
      .fetchArticlesWithQuery(searchQuery, page)
      .then(article =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...article],
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
    this.fetchArticles();
  };

  handleSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      articles: [],
    });
  };

  getlargeImageURL = e => {
    this.setState({ largeImageURL: e.target.dataset.src });
  };

  closeModal = () => this.setState({ largeImageURL: '' });

  render() {
    const { articles, loading, largeImageURL, error } = this.state;
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <Notification />}
        {articles.length > 0 && (
          <ImageGallery
            articles={articles}
            largeImageURL={largeImageURL}
            onClose={this.closeModal}
            onGetLargeImageURL={this.getlargeImageURL}
          />
        )}
        {loading && <Loader />}
        {articles.length > 0 && !loading && <Button onClick={this.loadMore} />}
        {largeImageURL && <Modal onClose={this.closeModal} largeImageURL={largeImageURL} />}
      </div>
    );
  }
}
