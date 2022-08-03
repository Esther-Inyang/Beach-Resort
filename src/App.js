import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import Rooms  from './pages/Rooms'
import SingleRoom  from './pages/SingleRoom'
import Error  from './pages/Error'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/singleroom' exact element={<SingleRoom/>}/>
          <Route path='/error' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
