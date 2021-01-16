import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading'
import Services from './components/Services/Services';
import Abouts from './components/About/Abouts'
import Clients from './components/Clients/Clients';
import Blog from './components/Blog/BlogContainer';
import Footer from './components/Footer/Footer';
import BlogContainer from './components/Blog/BlogContainer';

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <div className="main-background">
          <Header />
          <Route exact path='/' render={ () => <Heading/> } />
        </div>
        <Route exact path='/services' render={ () => <Services/> } />
        <Route exact path='/abouts' render={ () => <Abouts/> } />
        <Route exact path='/clients' render={ () => <Clients state={props.state.clients} /> } />
        <Route exact path='/blog' render={() => <BlogContainer state={props.state} dispatch={props.dispatch} />}/>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App;
