import { useState, useEffect } from "react"

import { getNextPostsToLoop, getPostsToLoop } from "../../utils/firebase/firebasefirestore.utils"

import './BlogLoop.styles.css';

const BlogLoop = () => {

  const [posts, setPosts] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    getPostsToLoop().then((userData) => {
      setPosts(userData.data);
      setLastItem(userData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
    getNextPostsToLoop(lastItem).then((postData) => {
      setPosts([...posts, ...postData.data])
      setLastItem(postData.lastVisible);
    });
  }

  return (
    <>
    {posts.map((post) => (
    <div className="col-sm-12 col-lg-3 col-md-4 flexi" key={post.id}>
      <div className="card m-4">
        <a href={`/post?read=${post.id}`}>
        <img
          className="card-img-top blog-loop-image"
          src='https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcStTW8VfDAL005l5NUU0Af8lP7nyq5kq5dVxUysp265qL8Gds6GzPhP3nYa6-snbXPtWuocRsuv1sY3-SE'
          alt={post.data.title}
        />
        <div className="card-body">
          <h5 className="card-title">{post.data.title}</h5>
          <p className="card-text">
            {post.data.content.substring(0, 100)}
          </p>
        </div>
        <div className="card-footer">
          <span> {post.data.date} </span> <span> {post.data.author} </span>
        </div>
        </a>
      </div>
      <div className="card m-4">
        <a href={`/post?read=${post.id}`}>
        <img
          className="card-img-top blog-loop-image"
          src='https://www.ikea.com/in/en/images/products/chrysanthemum-potted-plant-chrysanthemums-yellow__0614376_pe686880_s5.jpg?f=xl'
          alt={post.data.title}
        />
        <div className="card-body">
          <h5 className="card-title">{post.data.title}</h5>
          <p className="card-text">
            {post.data.content.substring(0, 100)}
          </p>
        </div>
        <div className="card-footer">
          <span> {post.data.date} </span> <span> {post.data.author} </span>
        </div>
        </a>
      </div>
      <div className="card m-4">
        <a href={`/post?read=${post.id}`}>
        <img
          className="card-img-top blog-loop-image"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiteFN_7RA-nDJrd7MNQJCCzRiBIqjsfLTmJhL49BpJwFuBD7Wrxlsv4Ez7udD3ST75k&usqp=CAU'
          alt={post.data.title}
        />
        <div className="card-body">
          <h5 className="card-title">{post.data.title}</h5>
          <p className="card-text">
            {post.data.content.substring(0, 100)}
          </p>
        </div>
        <div className="card-footer">
          <span> {post.data.date} </span> <span> {post.data.author} </span>
        </div>
        </a>
      </div>
      
    </div>
    ))}
    <div>
      <button className="btn btn-outline-dark shadow-none mt-4" onClick={loadNext}>Load More...</button>
    </div>
    </>
  );
};

export default BlogLoop;
