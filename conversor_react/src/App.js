import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <h1>Algumas da moedas mais usadas nos dias atuais</h1>
      <h1>rápido e fácil para conversão!!</h1>
      <div className="linha">
      <Conversor moedaA="USD" moedaB="BRL"/>
      <Conversor moedaA="BRL" moedaB="USD"/>
      </div>
      <div className="linha">
      <Conversor moedaA="EUR" moedaB="BRL"/>
      <Conversor moedaA="BRL" moedaB="EUR"/>
      </div>
      <div className="linha">
      <Conversor moedaA="BTC" moedaB="BRL"/>
      <Conversor moedaA="BRL" moedaB="BTC"/>
      </div>
      <footer>
        <p>&copy; Caio_Henrique</p>
      </footer>
    </div>
  );
}

export default App;
