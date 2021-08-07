import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main'
import {BrowserRouter as Router } from 'react-router-dom'



function App() {

  const [loading, setLoading] = useState(true);
  const [profileImg, setProfileImg] = useState("");
  const [highSchoolImg, setHighSchoolImg] = useState("");
  const [universityImg, setUniversityImg] = useState("");
  
  useEffect(async()=>{
    await import('./images/myImg.jpg').then(item=>{setProfileImg(item.default)});
    await import('./images/institutes/lyceeEnnasr.jpg').then(item=>{setHighSchoolImg(item.default)});
    await import('./images/institutes/insat.jpg').then(item=>{setUniversityImg(item.default)});
    setLoading(false)
  })
 
  return loading? (
    <div style={{
      position:'absolute',
      background: 'grey',
      width: '100%',
      height: '100vh'
    }}>

    </div>
  ):(
    <div className="my-body">
    <Router>
      <div className="App">
        <Header img={profileImg}/>
        <Main images={{highSchoolImg, universityImg}}/>
      </div>
      <div className = "transparent-background-grey">

      </div>
      <div className="transparent-background-blue"></div>
    </Router>
    </div>
  );
}

export default App;
