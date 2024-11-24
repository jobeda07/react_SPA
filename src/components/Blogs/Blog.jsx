import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

 const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
  //console.log(blog)
  const {id,title ,cover_image ,author_name,author_img,created_date,reading_time,hashtag,description}=blog;
 return (
  <div className='mb-20 space-y-4'>
      <img className='w-full mb-8' src={cover_image} alt="{`not found ${cover_image}`}" />
      <div className='flex justify-between mb-2'>
       <div className='flex '>
            <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
            <div className='ml-6'>
               <h3 className='text-2xl'>{author_name}</h3>
               <p>{created_date}</p>
            </div>
       </div>
       <div>
        <span>{reading_time} min read</span>
        <button onClick={()=>handleAddToBookmarks(blog)} className='ml-2'><FaBookmark /></button>
       </div>

      </div>
      <h3 className="text-4xl">{title}</h3>
      <p className='mb-5'>{description}</p>
      <p>{hashtag.map((hash ,idx)=><span key={idx}><a href='#'>{hash}</a></span>)}</p>

      <button className='text-purple-800 font-bold underline' onClick={() =>handleMarkAsRead(id,reading_time)}>Mark as Read</button>
      
  </div>
 );
};

Blog.propTypes ={
  blog:PropTypes.object.isRequired,
  handleAddToBookmarks:PropTypes.func,
  handleMarkAsRead:PropTypes.func
}

export default Blog;