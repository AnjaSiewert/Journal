//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import EntryForm from "./components/EntryForm/EntryForm";
import Footer from "./components/Footer/Footer";
import TabBar from "./components/TabBar/TabBar";
import EntryList from "./components/EntryList/EntryList";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <EntryForm />
        <TabBar />
        <EntryList />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
