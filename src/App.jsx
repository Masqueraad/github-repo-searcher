import { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Result from "./components/Result";

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
      <Header title="Repo Searcher" />
      <SearchInput
        query={query}
        onQuery={handleQuery}
        onSearch={handleSearch}
      />
      <Result onLoading={isLoading} repos={repos} />
    </>
  );
}

export default App;
