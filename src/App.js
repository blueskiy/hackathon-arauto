import './App.scss';
import Header from './header'
import Search from './search'
import Shelf from './shelf'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Shelf title="Mesas perto de você" />
      <Shelf title="Seus sistemas preferidos" />
    </div>
  );
}

export default App;
