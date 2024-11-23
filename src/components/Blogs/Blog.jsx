import PropTypes from 'prop-types';
 const Blog = ({blog}) => {
  console.log(blog)
  const {title ,cover_image ,author_name,author_img,created_date,reading_time,hashtag,description}=blog;
 return (
  <div>
      <img src={cover_image} alt="{`not found ${cover_image}`}" />
      <div className='flex justify-between'>
       <div className='flex '>
            <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
            <div className='ml-6'>
               <h3 className='text-2xl'>{author_name}</h3>
               <p>{created_date}</p>
            </div>
            
       </div>
       <div>
        <span>{reading_time}</span>
       </div>

      </div>
      <h3 className="text-4xl">{title}</h3>
      <p>
       {hashtag.map((hash ,idx)=><span key={idx}><a href='#'>{hash}</a></span>)}
      </p>
  </div>
 );
};

Blog.PropTypes ={
  blog:PropTypes.object.isRequired
}

export default Blog;