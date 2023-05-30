import {useState} from 'react'

import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import BotScreen from './components/BotScreen';
import FeatureScreen from './components/FeatureScreen';

import '../styles/HomePage.scss';


const HomePage = () => {
  const [page, setPage] = useState(0);
  const [messages, setMessages] = useState([
    { text: "Hello I am your music search assitant.", sender: "ai" },
    { text: "/lyrics <song-name>: To find song lyrics", sender: "ai" },
    { text: "/song <lyrics>: To find song  from lyrics", sender: "ai" }
  ]);
  const PAGES = [
    <HomeScreen />,
    <BotScreen messages={messages} setMessages={setMessages}/>,
    <FeatureScreen />,
  ];
  return (
    <div className="home-page">
      <div className="home-page-wrapper">
          <Navbar page={page} setPage={setPage} />
          {PAGES[page]}
      </div>
    </div>
  );
};

export default HomePage;