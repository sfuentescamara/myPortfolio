import usePortfolioData from "./hooks/usePortfolioData";
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const data = usePortfolioData();
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Portfolio data={data} />
    </div>
  );
}

export default App;