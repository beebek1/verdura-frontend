import { Link } from 'react-router-dom';
import  { ArrowBigUpDash } from 'lucide-react'

const BlogCard = ({
  id,
  author,   //this
  authorImage,  //this
  badge,
  title,
  content,
  date,
  tags,  //this
  upvotes,
  coverImage

}) => {

  //setting badge color according to the badge

  const getBadgeColor = () =>{
    if(badge.trim() === "News"){
       return "bg-gray-500"
    }
    if(badge.trim()=== "Spotlight" ){
      return "bg-slate-600"
    }
    if(badge.trim()==="Blog"){
      return "bg-gray-600"
    }
  }

  const handleUpVotes = () =>{

  }


  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img 
            src={authorImage} 
            alt={author}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 text-sm">{author}</span>
            <span className={`${getBadgeColor()} text-white text-xs px-2 py-0.5 rounded mt-1 inline-block w-fit`}>
              {badge}
            </span>
          </div>
        </div>
        <span className="text-gray-400 text-sm">{date}</span>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {content}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <ArrowBigUpDash size={18} onClick={handleUpVotes}/>
          <span className='font-bold'>{upvotes}</span>
        </div>

        <Link to={`/blogs/${id}`} className='bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded transition-colors'
        
            state={{
              id,
            author,
            authorImage,
            badge,
            badgeColor : getBadgeColor(),
            title,
            date,
            content,
            tags,
            upvotes,
            coverImage
          }}>
        See More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;