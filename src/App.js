// Styles
import classess from './App.module.scss';

// Components
import Header from './components/header/Header';

export default function App() {
  return (
    <div className={classess.app}>
      <Header />
    </div>
  );
};
