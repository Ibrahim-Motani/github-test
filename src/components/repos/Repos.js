import React, {  useContext }from 'react';
import { ReposContext } from '../../store/repos-context';
import './Repos.css';

function Repos() {
    const { keyword, repos } = useContext(ReposContext);

    return (
      <ul className="reposContainer__list">
        {repos
          .filter(repository =>
            repository.name.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((repo) => {
            // Split on highlight term and include term into parts, ignore case
            const parts = repo.name.split(new RegExp(`(${keyword})`, "gi"));
            console.log(parts);
            return (
              <li key={repo.id}>
                {parts.map((part, i) => (
                  <span
                    key={i}
                    style={
                      part.toLowerCase() === keyword.toLowerCase()
                        ? { fontWeight: "bold", color: "red" }
                        : {}
                    }
                  >
                    {part}
                  </span>
                ))}
              </li>
            );
          })}
      </ul>
    );
}

export default Repos;
