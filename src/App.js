//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import EntryForm from "./components/Entry Form/EntryForm";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <EntryForm />
      </Main>
    </div>
  );
}

export default App;
