// src/pages/VideosPage.js
import React from 'react';

const videoData = [
  {
    title: 'Puzzle Parking System',
    videoUrl: 'https://www.youtube.com/embed/ZQlfufALSHA'
  },
  {
    title: 'Stack Parking System',
    videoUrl: 'https://www.youtube.com/embed/ZQlfufALSHA'
  },
  {
    title: 'G+2 Stack Parking System',
    videoUrl: 'https://www.youtube.com/embed/ZQlfufALSHA'
  },
  {
    title: 'Rotary Parking System',
    videoUrl: 'https://www.youtube.com/embed/ZQlfufALSHA'
  },
  {
    title: 'Industrial Lifts',
    videoUrl: 'https://www.youtube.com/embed/ZQlfufALSHA'
  },
  {
    title: 'Scissor Lift',
    videoUrl: 'https://www.youtube.com/embed/ZQlfufALSHA'
  }
];

const Videos = () => {
  return (
    <div className="px-4 py-12 mt-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Product Demonstration Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
