import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserList from "./components/Users/UserList/UserList";
import Counter from "./components/Counter/Counter";

function App() {

  return (
    <>
        <div className="container">
            <Header />
            <UserList />
            <Footer />
        </div>
    </>
  );
}

export default App;
