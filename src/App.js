import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading'
import Services from './components/Services/Services';
import Abouts from './components/About/Abouts'
import Clients from './components/Clients/Clients';
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
        <Route path='/clients' component={Clients} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App;
