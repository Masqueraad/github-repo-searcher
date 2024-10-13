import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = () => {
    if (query.trim() === "") {
      alert("The input value can not be empty");
      return;
    }
    setIsLoading(true);
    fetch(`https://api.github.com/search/repositories?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
        setIsLoading(false);
      });
    setQuery("");
  };
  return (
    <>
      <h1>Repo Searcher</h1>
      <div className="search">
        <input
          className="search-txt"
          type="text"
          placeholder="Type to search"
          value={query}
          onChange={handleQuery}
        />

        <button className="search-btn" onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="repo-section">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          repos.map((data, index) => {
            return (
              <>
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
              </>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
