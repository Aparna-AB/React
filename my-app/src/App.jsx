import React from 'react';
import Footer from './footer.jsx';
import MyForm from './form.jsx';
import { Table } from './table.jsx';
import './App.css';
function App() {
  return (
    <>
      <h1>React App</h1>
      <div>
        <Nav />
      </div>
      <MyForm />
      {/* <Table /> */}
     <Footer />
    </>
  );
}
export default App;

function Nav() {
  return (
    <>
      <div className="nav">
        <h1>Hello</h1>
        <h6>App1</h6>
        <h6>App2</h6>
        <h6>App3</h6>
        <h6>App4</h6>
      </div>


    </>
  );
}
