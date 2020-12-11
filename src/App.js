import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading'
import Services from './components/Services/Services';
import Abouts from './components/About/Abouts'
import Footer from './components/Footer/Footer';

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="main-background">
          <Header />
          <Route exact path='/' component={Heading} />
        </div>
        <Route exact path='/services' component={Services} />
        <Route exact path='/abouts' component={Abouts} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App;
