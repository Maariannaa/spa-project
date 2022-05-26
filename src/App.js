// Styles
import classess from './App.module.scss';

// Components
import Header from './components/header/Header';
import Home from './components/home/Home';

export default function App() {
  return (
    <div className={classess.app}>
      <Header />
      <Home />
    </div>
  );
};
