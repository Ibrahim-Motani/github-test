import React, { useContext} from 'react'
import { ReposContext } from '../../store/repos-context';
import './KeywordSearch.css';

function KeywordSearch() {
    const { keyword, handleChangeKeyword } = useContext(ReposContext);

    return (
      <form className="searchContainer__keyword">
        <input
          className="searchContainer__input"
          placeholder="Enter Keyword"
          type="text"
          value={keyword}
          onChange={event => handleChangeKeyword(event.target.value)}
        />
        <button
          className="searchContainer__button--clear"
          type="button"
          onClick={() => handleChangeKeyword("")}
        >
          Clear
        </button>
      </form>
    );
}

export default KeywordSearch
