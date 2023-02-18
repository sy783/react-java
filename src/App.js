import './App.css';
// import Demo4 from './chap4/Demo4';
// import Demo5 from './chap4/Demo5';
// import LoopDemo from './chap4/LoopDemo';
// import FormDemo from './chap4/FormDemo';
// import Student from './chap4/Student';
// import InvestmentCalculator from './chap4/InvestmentCalculator';
// import FetchDemo from './chap14/FetchDemo';
import GuessGame from './chap14/GuessGame';
// import UpdatePost from './chap14/UpdatePost';
import ListPosts from './chap14/ListPosts';
// import RandomNumber from './chap14/RandomNumber';
import CreatePost from './chap14/CreatePost';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './chap14/NotFound';
import Menu from './chap14/Menu';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<GuessGame />}/>
        <Route path='/list-post' element={<ListPosts />}/>
        <Route path='/create-post' element={<CreatePost />}/>
        <Route path='/edit-post/:id' element={<CreatePost />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    
  );

  //return (
    // <Demo4 />
    // <Demo5 />
    // <LoopDemo />
    // <FormDemo />
    // <InvestmentCalculator />
    // <Student />
    // <FetchDemo />
    // <CreatePost />
    // <UpdatePost/>
    // <RandomNumber />
    // <ListPost />
    //<GuessGame />
  //);
}

export default App;
