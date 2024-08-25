const Shimmer = () => {
    return (
      <div className="p-4">
        {/* Shimmer for Search Feature */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-orange-100 rounded-lg shadow-md mb-6 animate-pulse">
          <div className="flex items-center bg-white p-2 rounded-md shadow-sm mb-4 md:mb-0 w-full max-w-xs">
            <div className="w-full h-10 bg-gray-300 rounded-md"></div>
            <div className="ml-2 w-24 h-10 bg-gray-300 rounded-md"></div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 w-32 h-10 bg-gray-300 rounded-md"></div>
        </div>
  
        {/* Shimmer for Restaurant Cards */}
        <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(12).fill("").map((_, index) => (
            <div
              key={index}
              className="shimmer-card bg-gray-200 animate-pulse rounded-lg p-4 h-80 w-64"
            >
              {/* Image Placeholder */}
              <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
  
              {/* Name Placeholder */}
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
  
              {/* Cuisines Placeholder */}
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
  
              {/* Rating Placeholder */}
              <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
  
              {/* Cost for Two Placeholder */}
              <div className="h-4 bg-gray-300 rounded mb-2 w-1/3"></div>
  
              {/* Delivery Time Placeholder */}
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  