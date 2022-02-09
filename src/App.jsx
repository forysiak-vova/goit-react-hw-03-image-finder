import Searchbar from './components/Searchbar'
import { Component } from "react";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {

  state = {
    searchQuery: '',
  }

  handelFormSubmit = searchQuery => {
    this.setState({searchQuery})
  }

  render() {
    
      return (
        <>
         <Searchbar onSubmit={this.handelFormSubmit} />
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

};
