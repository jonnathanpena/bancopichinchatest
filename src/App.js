import './App.css';

/* import components */
import Header from './components/header';
import MainLayoutController from './layouts/main';

function App() {
  return (
    <div className="App">
      <Header />
      <MainLayoutController />
    </div>
  );
}

export default App;
