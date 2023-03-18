import './Reset.css';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {data} from './data';

function App() {
  return (
    <div className="App">
      <Header header={data.header}/>
      <Skills skills={data.skills}/>
      <Profile profile={data.profile}/>
      <Projects projects={data.projects}/>
      <Footer footer={data.footer}/>
    </div>
  );
}

export default App;
