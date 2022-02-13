// import { render } from '@testing-library/react';
import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleImgChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handelSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.warn('🦄 Please, enter text !', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    this.props.onSubmit(this.state.searchQuery);

    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handelSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleImgChange}
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

export default Searchbar;
