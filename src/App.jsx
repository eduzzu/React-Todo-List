import { useState } from 'react';
import CSSBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <CSSBaseline />
    <Navbar />
    <TodoList />
    </>
  );
}

export default App
