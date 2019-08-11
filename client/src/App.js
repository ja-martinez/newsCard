import React from 'react';
import Header from './redux/containers/HeaderContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Header />
        <Footer copyright="Shirley Ramirez and Alejandro Martinez 2019" />
    </div>
  );
}

export default App;
