import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
