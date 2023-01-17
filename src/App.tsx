import './App.scss';
import { Filters } from './components/Filters/Filters';
import { Header } from './components/Header/Header';
import { Films } from './components/Films/Films';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Filters/>
        <Films/>
      </div>
    </div>
  );
}

export default App;
