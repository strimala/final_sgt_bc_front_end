import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Articles from './Views/Articles';
import Article1 from './Views/Article1';
import Article2 from './Views/Article2';
import Article3 from './Views/Article3';
import Chat from './Views/Chat';
import Registration from './Views/Registration';
import AboutUs from './Views/AboutUs';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/articles">
              <Articles />
            </Route>
            <Route path="/articles/article1">
              <Article1 />
            </Route>
            <Route path="/articles/article2">
              <Article2 />
            </Route>
            <Route path="/articles/article3">
              <Article3 />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;