import {useLayoutEffect, useState} from 'react'
import '../../styles/FeatureScreen.scss';
import { FaSearch } from 'react-icons/fa';

const handleSearch = (e, search,setSearch, setMusicList, musicList) =>{
  setSearch(e.target.value)

  fetch('http://127.0.0.1:8000/recommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    },
    body: JSON.stringify({text: search}),
    })
    .then(res => res.json()).then(res=>{
      console.log(res);
      setMusicList(res.reply)
      console.log(musicList);
    })
    .catch(error => {console.error('Error:', error); });
  

}

const FeatureScreen = () => {
  const [search, setSearch] = useState('');
  const [musicList, setMusicList] = useState([]);
  return (
    <div className="feature-screen">
      <div className="searchbar">
        <FaSearch className="icon"></FaSearch>
        <input type="text" onKeyDown={e => {if (e.key=="Enter") handleSearch(e, search, setSearch, setMusicList, musicList)} }  placeholder="Search in a song for recommedation..." />
      </div>
      <ul>
      {musicList.length>0? musicList.map(item => <li>{item}</li>):console.log()}
      </ul>
    </div>
  );
}

export default FeatureScreen;
