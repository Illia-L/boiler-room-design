import Layout from './components/ui/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
