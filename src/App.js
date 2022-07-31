import './App.css';
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router} from "react-router-dom";
import Layout from './components/Layout';

function App() {

  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
