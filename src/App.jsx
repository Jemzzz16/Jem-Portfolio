import './App.module.scss';
import Routes from './Container/Routes/Routes';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
