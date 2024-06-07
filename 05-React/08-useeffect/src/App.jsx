import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Test from './Test';
function App(){

  let [posts,setPosts] = useState([]);

  // API Call
  async function getPosts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let postsData = await response.json();
    setPosts(postsData);
  }

  // Side Effect
  useEffect (()=>{getPosts()},[]);
  return(
    <>
      <h1>UseEffect</h1>
      {/* <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post,index)=>{
            return(
              <tr key={index}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <Test/>
    </>
  );

}

export default App;