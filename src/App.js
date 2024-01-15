import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyNavbar from './Components/MyNavBar';
import BarAction from './Components/BarAction';
import FilmList from './Components/FilmList';
import FilmList2 from './Components/FilmList2';
import FilmList3 from './Components/FilmList3';
import MyFooter from './Components/MyFooter';
import { Container } from 'react-bootstrap';






function App() {
  return (
    
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <section>
        <BarAction />
      </section>
      <main>
      <Container>
        <FilmList />
        <FilmList2 />
        <FilmList3 />
        
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
      
      
    </div>
  );
}

export default App;
