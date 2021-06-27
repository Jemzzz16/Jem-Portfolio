import './App.module.scss';
import Routes from './Container/Routes/Routes';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className={styles.app}>
      <Router>
        {/* <Navbar /> */}
        {/* <Projects /> */}
        <Routes />
      </Router>
    </div>
  );
}

export default App;
