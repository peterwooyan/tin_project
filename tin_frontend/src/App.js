import "./App.css";
import TabMenu from "./layouts/TabMenu";

function App() {
  return (
    <div className="container-fluid">
      <div className="main">
        <TabMenu />
      </div>
      <nav className="navbar  navbar-light bg-light">
        <span>Created by Bohdan Bondarenko 2023</span>
      </nav>
    </div>
  );
}

export default App;
