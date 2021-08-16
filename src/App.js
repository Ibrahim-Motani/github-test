import ReposContainer from "./components/repos/ReposContainer";
import SearchContainer from "./components/search/SearchContainer";
// css import
import './App.css';

function App() {
  return (
    <div className="mainContainer">
      <SearchContainer></SearchContainer>
      <ReposContainer></ReposContainer>
    </div>
  );
}

export default App;
