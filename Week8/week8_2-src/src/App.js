import React from 'react';
import Example8 from './Example8';
import logo from './logo.svg';
import './App.css';

//Default
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
//Example-1
/*function App() {
  return (
  <div>
    <h1>Hello React!!</h1>
  </div>
  );
}
*/

//Example-2
/*
function App() {
  const name = "John"
  return (
  <div>
    <h1>Welcome {name} to the world of React!</h1>
  </div>
  );
}
*/

//Example-3
/*
const title = 'React';
function App() {
  return (
  <div>
    <h1>Hello {title}</h1>
    <label>Search: </label>
    <input id="search" type="text"/>
    </div>
  );
}
*/

//Example-4
/*
function getTitle(title) {
  return title;
}
function App() {
  return (
  <div>
    <h1>Hello {getTitle('React')}</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>
  );
}
*/

//Example-5
/*
  // Original array
  const numbers = [1, 2, 3, 4, 5];
  // Using map to create a new array where each element is doubled
  const doubledNumbers = numbers.map(function (number) {
    return number * 2;
  });
  // Output [2, 4, 6, 8, 10] 
  console.log(doubledNumbers);
  function App() {
  return (
    <div></div>
  );
  }
*/

//Example-6

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
/* 
function App() {
  return (
  
  <div>
    <h1>List Example</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <hr />
    {list.map(function(item) {
      return <div>{item.title}</div>;
    }
    )
    }
  </div>
  )
}
 */
  //Example-7
  /*
  function App() {
    return (
  <div>
    <h1>List Example</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <hr />
    {list.map(function(item) {
      return (
        <div id={item.objectID}>
        <div>
          <a href={item.url}>{item.title}</a>
        </div>
        <div>{item.author}</div>
        <div>{item.num_comments}</div>
        <div>{item.points}</div>
        </div>
      );
    }
    )
    }
  </div>
  
  );
}
/*

//Example-8
/*
function App() {
  return(
  <div>
    <h1>List Example</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <hr />
    <Example8 />
    <hr />
    <Example8 />
  </div>
  );
}
*/


export default App; 
