import React from "react";

function Result({ onLoading, repos }) {
  return (
    <div className="repo-section">
      {onLoading ? (
        <p>Loading...</p>
      ) : (
        repos.map((data, index) => {
          return (
            <ul className="repo-container" key={index}>
              <li className="repo-image">
                <img src={data.owner.avatar_url} alt="Repo image" />
              </li>
              <li className="repo-name">{data.name}</li>
              <li className="repo-link">
                <a target="_blank" href={data.git_url}>
                  {data.git_url}
                </a>
              </li>
            </ul>
          );
        })
      )}
    </div>
  );
}

export default Result;
