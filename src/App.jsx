import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchQuery: '',
    ansferImages: null,
    // loading: false,
    // error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      // this.setState({ loading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.state.searchQuery}&page=1&key=24625422-32b02834f3df76db1a58654ff&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(({ hits }) => {
            if (hits.length === 0) {
              // return Promise.reject(
              //   new Error(
              //     `Немає картинок з таким іменем ${this.state.searchQuery}`
              //   )
              // );
              this.setState({ status: 'reject' });
              return;
            }

            return this.setState({ ansferImages: hits, status: 'resolved' });
          });
        // .catch(error => this.setState({ error }))
        // .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  handelFormSubmit = searchQuery => {
    this.setState({ searchQuery, status: 'pending' });
  };

  render() {
    const { status, ansferImages, searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handelFormSubmit} />
        {status === 'pending' && <Loader />}

        {status === 'resolved' && <ImageGallery items={ansferImages} />}

        {status === 'reject' && (
          <h1>Немає картинок з таким іменем: {searchQuery}</h1>
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
