import React from 'react';
import './App.css';
import { AccordionList } from './accordion-list';

function App() {
  return (
    <div className="accordion-list">
      <header className="App-header">
        <h1>FAQs using React</h1>
      </header>
        <div id="container">
          <p>Probably not the best implemented React app ever seen, but I wanted to include it to demonstrate that I can pick this stuff up quickly - I did a couple of online classes 9 months ago and I've just started re-reading the docs on the train to work.</p>
          <AccordionList />
        </div>
    </div>
  );
}

export default App;
