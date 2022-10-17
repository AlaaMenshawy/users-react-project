import logo from './logo.svg';
import './App.css';
import ListUsers from './components/list-users/list-users';
import Header from './components/header/header';




function App() {
  return (
    <div className="App">
      <Header />
      <ListUsers />
    </div>
  );
}

export default App;
