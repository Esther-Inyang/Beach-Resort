import React from 'react'
import Home  from './pages/Home'
import Rooms  from './pages/Rooms'
import SingleRoom  from './pages/SingleRoom'
import Error  from './pages/Error'

function App() {
  return (
    <div className="App">
      <h1>BEACH RESORT</h1>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </div>
  );
}

export default App;
