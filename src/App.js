import Header from './components/header';
import SubHeader from './components/subHeader';
import Content from './components/content';
import HrLine from './components/hrLine';
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <SubHeader />
      <HrLine />
      <Content />
    </div>
  );
}

export default App;
