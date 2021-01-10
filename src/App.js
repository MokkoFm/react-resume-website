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
        <Route path='/clients' render={ () => <Clients myClients={props.myClients} myTestimonials={props.myTestimonials}/> } />
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App;
