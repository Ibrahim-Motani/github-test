import React, {useContext} from 'react';
import { ReposContext } from '../../store/repos-context';
// css import
import './UsernameSearch.css';

function UsernameSearch() {
    const { username, handleChangeUsername, getRepos, clearRepos } = useContext(ReposContext);

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(username);
        getRepos();
    };

    const handleClear = (event) => {
        event.preventDefault();
        handleChangeUsername('');
        clearRepos();
    };

    return (
      <form className="searchContainer__username">
        <input
          placeholder="Enter Username"
          className="searchContainer__input"
          value={username}
          onChange={event => handleChangeUsername(event.target.value)}
          type="text"
        />
        <button
          className="searchContainer__button--submit"
          onClick={handleSearch}
        >
          Go
        </button>
        <button className="searchContainer__button--clear" onClick={handleClear}>
          Clear
        </button>
      </form>
    );
}

export default UsernameSearch;
