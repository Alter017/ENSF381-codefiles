import React from 'react';
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

function Example8() {
    return (
    <div>
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
    )
}
export default Example8; 