import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [reading_time,setReadingtime]=useState(0);

  const handleAddToBookmarks =blog =>{
    console.log(blog)
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id,time)=>{
    setReadingtime(reading_time +time);
    const remainingBookmarks=bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} reading_time={reading_time}></Bookmarks>
      </div>


    </>
  )
}

export default App
