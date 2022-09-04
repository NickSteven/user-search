import './App.css';
import Search from './compoents/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/dropdownStyles.css'
import './styles/userList.css'
import './styles/pagination.css'

function App() {
  return (
    <div className="App">
      <h1>User search on github</h1>
      <Search />
    </div>
  );
}

export default App;
