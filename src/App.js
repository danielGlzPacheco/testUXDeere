import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="content bg-gray">
      <Header />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
