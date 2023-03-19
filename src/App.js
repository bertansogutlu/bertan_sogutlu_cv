import './Reset.css';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {data} from './data';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [resData,setResData] = useState(data);

  useEffect(() => {
    axios.post("https://reqres.in/api/users", data)
    .then(function (response) {
      console.log(response.data);
      setResData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])
  return (
    <div className="App">
      <Header header={resData.header}/>
      <Skills skills={resData.skills}/>
      <Profile profile={resData.profile}/>
      <Projects projects={resData.projects}/>
      <Footer footer={resData.footer}/>
    </div>
  );
}

export default App;
