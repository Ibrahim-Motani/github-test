import { createContext, useState } from "react";
// packages import
import axios from 'axios';

// context
export const ReposContext = createContext({
    username: '',
    keyword: '',
    repos: [],
    getRepos: () => { },
});

// provider
const Provider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [keyword, setKeyword] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChangeUsername = name => {
    setUsername(name);
  };

  const handleChangeKeyword = key => {
      setKeyword(key);
    //   const newRepos = repos.filter(repo => repo.name.includes(keyword));
    //   setRepos(newRepos);
  };
    
    const getRepos = () => {
        axios
          .get(`https://api.github.com/users/${username}/repos`)
          .then(response => {
              console.log(response.data);
              setRepos(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    };
    
    const clearRepos = () => {
        setRepos([]);
    };

  const value = {
    username,
    handleChangeUsername,
    handleChangeKeyword,
    keyword,
    repos,
      getRepos,
    clearRepos
  };

  return (
    <ReposContext.Provider value={value}>{children}</ReposContext.Provider>
  );
};

export default Provider;