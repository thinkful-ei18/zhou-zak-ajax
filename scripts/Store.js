'use strict';

const store = function() {
  let videos = [];
  const setVideos = function(videos){
    this.videos = videos;
  };
  return{
    videos,
    setVideos
  };
}();