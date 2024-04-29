import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {

  //i couldn't find a simpler way to make the code render the posts data
  const posts = blogData.posts;
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header/>
      <About/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;

