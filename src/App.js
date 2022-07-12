import { Route, Routes } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import Modify from './components/Modify';

function App() {
  return (
    <div className="App">
    <h1 className="text-center mt-3"> my list_todos</h1>
    <Routes>
      <Route path='/' element={ <Form/>}/>
      <Route path='/modifier' element={ <Modify/>}/>
    </Routes>
   
    </div>
    
  );
}

export default App;
