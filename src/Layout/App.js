import '../Style/App.css';
import Page from './Page.js';
import Login from '../Components/Login.js';
import {BrowserRouter as Router} from 'react-router-dom';
import { useStateValue } from '../Components/StateProvider.js';

function App() {

  const [{ user }] = useStateValue();

  return (
    <>
      {!user ? (<Login />) : (
        <Router>
          <Page/>
        </Router>
      )}
    </>
  );
}

export default App;
