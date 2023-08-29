import data from '../../data.json';
import HomeBar from './HomeBar';
import HomeData from './HomeData';

export default function Home() {
  return (
    <div className="App">
      <HomeBar />
      <HomeData products={data} />
    </div>
  )
}
