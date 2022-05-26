// Styles
import classess from './App.module.scss';

// Components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Team from './components/team/Tours';

export default function App() {
  return (
    <div className={classess.app}>
      <Header />
      <Home />
      <Team />
    </div>
  );
};
