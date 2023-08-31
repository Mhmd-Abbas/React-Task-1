import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Buttonbox from './components/buttonBox';
import Postlist from './components/postList';

function App() {
  return (
  <>
    <Header></Header>
    <br/>
    <div className='container'>
      <Postlist></Postlist>
      <Buttonbox></Buttonbox>
    </div>
  </>
  )
}

export default App;
