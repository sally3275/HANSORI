import "./App.css";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Pungsa from "./components/Pungsa";
import Jokbo from "./components/Jokbo";
import Profile from "./components/Profile";
import Test from "./components/Test";
import kms from './components/kms.js';

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact={true} component={Main} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/pungsa" component={Pungsa} />
      <Route path="/jokbo" component={Jokbo} />
      <Route path="/profile" component={Profile} />
      <Route path="/test" component={Test} />
      <Route path="/kms" component={kms} />
      <Footer />
    </>
  );
}


export default App;
