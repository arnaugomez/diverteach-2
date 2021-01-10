import {Switch, Route} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import './App.css';
import Navbar from './components/Organisms/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Opos from './pages/Opos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/opos" component={Opos} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
