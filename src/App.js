import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import SecondBlock from './components/second-block/text-block';
import PaperBlock from './components/paper/paper';
import FooterBlock from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <SecondBlock/>
      <PaperBlock/>
      <FooterBlock/>
    </div>
  );
}

export default App;
