import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks,reading_time}) => {
 return (
  <div className="md:w-1/3 bg-gray-300 ml-4 mt-2">
    <div>
    <h2 className="text-3xl text-center m-4 font-bold ">Reading Time: {reading_time}</h2>
    </div>
    <h3 className="text-3xl  ml-5 mt-10 ">Bookmarked Blogs :{bookmarks.length}</h3>
    {
      bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
    }
  </div>
 );
};
Bookmarks.propTypes={
  bookmarks:PropTypes.array,
  reading_time:PropTypes.number,
}

export default Bookmarks;