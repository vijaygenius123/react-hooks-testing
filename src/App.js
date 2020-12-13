import './App.css';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter onCountChange={() => {}}/>
    </div>
  );
}

export default App;
