// Styles
import classess from './App.module.scss';

// Components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Team from './components/team/Tours';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className={classess.app}>
      <Header />
      <Home />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
