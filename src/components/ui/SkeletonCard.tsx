
const SkeletonCard = () => {
    return (
           <div className="animate-pulse max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 m-4">
        <div className="h-64 bg-gray-300 animate-pulse"></div>
        <div className="px-6 py-4 animate-pulse ">
          <div className="h-6 bg-gray-300 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="px-6 pt-4 pb-2 animate-pulse">
          <div className="inline-block bg-gray-300 h-8 w-full animate-pulse"></div>
        </div>
      </div>
            
    
    );
};

export default SkeletonCard;