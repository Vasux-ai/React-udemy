import "./App.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

function App() {
  return (
    <div className="app" style={{ backgroundColor: "#160231" }}>
      <Header />
      <main>
        <CoreConcept />
      </main>
    </div>
  );
}

export default App;
