// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease'
import BookList from "./components/BookList"
// import CommentArea from "./components/CommentArea"
import books from "./data/fantasy.json";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Registration from './components/Registration';

function App() {
  return (
    <div>
      <Router>
        <header className='fixed-top'>
          <MyNavBar />
        </header>
        <main>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/' component={LatestRelease} />
          <Route exact path='/' render={(routerProps) => <BookList {...routerProps} books={books.slice(10, 26)} />} />
          <Route path='/registration' component={Registration} />
          {/* <Welcome />
          <LatestRelease />
          <BookList books={books.slice(10, 26)} /> */}
        </main>
        <footer>
          <MyFooter />
        </footer>

      </Router>
    </div>
  );
}

export default App;
