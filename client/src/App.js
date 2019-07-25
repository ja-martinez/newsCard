import React from 'react';
import { Switch, Route , Router} from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
        <Header />
        {/* <Router> */}
          {/* <Switch>  */}

            <Footer copyright="Shirley Ramirez and Alejandro Martinez 2019" />
      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
