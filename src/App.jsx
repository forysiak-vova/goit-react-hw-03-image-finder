import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    searchQuery: '',
    ansferImages: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log('prevState.searchQuery', prevState.searchQuery);
      console.log('this.state.searchQuery', this.state.searchQuery);
      console.log('зменилось імя запроса');

      fetch(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=1&key=24625422-32b02834f3df76db1a58654ff&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(ansferImages => this.setState({ ansferImages }));
    }
  }

  handelFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handelFormSubmit} />

        {this.state.ansferImages && (
          <ImageGallery items={this.state.ansferImages.hits} />
        )}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}
