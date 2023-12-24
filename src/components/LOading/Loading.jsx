import React from "react";

function Loading() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-600 mb-4"></div>
        <p className="text-red-500 font-bold">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
