import data from '../data.json';
import './style.css';
import HomeBar from './HomeComp/HomeBar';
import HomeData from './HomeComp/HomeData';

export default function Home() {
  return (
    <div className="App">
      <HomeBar />
      <HomeData products={data} />
    </div>
  )
}
