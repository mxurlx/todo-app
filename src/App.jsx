import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TodoPage from './pages/TodoPage';
import DndPage from './pages/DndPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo-app" element={<TodoPage/>} />
        <Route path="/todo-app/dnd" element={<DndPage/>} />
      </Routes>
    </Router>
  );
}

export default App;