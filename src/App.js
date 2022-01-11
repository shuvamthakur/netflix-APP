import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
    {/* Nav */}
    <Navbar />
    {/* Banner */}
    <Banner />
    <Row 
    isLargeRow={true}
    title="NETFLIX ORIGINALS" 
    fetchUrl={requests.fetchNetflixOriginals} 
    />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>

  );
}

export default App;
