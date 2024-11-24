import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
 const {title}=bookmark;
 return (
  <div className="bg-slate-200 p-2 m-4 rounded-xl">
      <h5 className="text-2xl">{title}</h5>
  </div>
 );
};

Bookmark.propTypes={
bookmark:PropTypes.object.isRequired
}
export default Bookmark;