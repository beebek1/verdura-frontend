import { ArrowLeft, Eye, Calendar, Tag } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { upVoteBlog } from '../services/api';

const BlogDetail = () => {

  const navigate = useNavigate();
  const {state} = useLocation();

  const{
    id,
    author,
    authorImage,
    badge,
    badgeColor,
    title,
    date,
    content,
    tags,
    upvotes,
    coverImage
  } = state


  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: 'Check out this blog post!',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      console.log('Web Share API not supported in this browser.');
    }
  }

  //handles upvotes
  const handleUpVotes = async(id) => {
    const response = await upVoteBlog(id);

    if(response.status === 200){
      console.log("yess new upvote")
    }

  }

  //navigate to the all blogs
  const navigateRoute = () =>{
    navigate('/blogs')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button 
            onClick={navigateRoute}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Blogs</span>
          </button>
          
          <div className="flex items-center gap-2 mb-3">
            <span className={`${badgeColor} text-white text-xs px-3 py-1 rounded`}>
              {badge}
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Calendar size={14} />
              {date}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          
          <div className="flex items-center gap-3">
            <img 
              src={authorImage} 
              alt={author}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900">{author}</div>
              <div className="text-sm text-gray-500">Author & Contributor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Featured Image */}
          {coverImage ? (
            <img src={coverImage} alt="Cover" className="w-full h-96 object-cover rounded-lg mb-8" />
          ) : (
            <div className="w-full h-96 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg mb-8 flex items-center justify-center">
              <span className="text-gray-400 text-lg">No Cover Image Available</span>
            </div>
          )}

          {/* Article Content */}
          <div className="prose max-w-none">
            <div className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap mt-8 pt-8 border-t border-gray-200">
              <Tag size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500">Tags:</span>
              {tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>

        {/* Share & Actions */}
        <div className="mt-6 flex items-center gap-3">
          <button className="flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-5 py-3 transition-all hover:border-teal-300 hover:shadow-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-teal-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500 group-hover:text-teal-600 transition-colors" >Upvote</span>
              <span className="text-lg font-semibold text-gray-900">{upvotes}</span>
            </div>
          </button>
          
          <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-6 py-3 transition-all shadow-sm hover:shadow-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="font-medium" onClick={handleShare}>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;