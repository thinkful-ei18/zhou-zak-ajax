'use strict';
/* global store, API */

const VideoList = function() {
  const generateVideoItemHtml = function(video) {
    return `<li>
        <span>${video.id}</span>
        <span>${video.title}</span>
        <img src="${video.thumbnail}">
      </li>`;
  };
  const render = function() {
    const processedVid = store.videos.map( video => {
      return generateVideoItemHtml(video);
    });
    console.log(processedVid);
    console.log(store.videos);
    $('.results').html(processedVid);
  };
  const decorateResponse = function(response) {
    return response.items.map( item => {
      return {
        id: getId(item),
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url
      };
    });
  };
  const handleFormSubmit = function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      let searchedTerm = $('#search-term').val();
      console.log(searchedTerm);
      $('.search-term').val('');
      API.fetchVideos(searchedTerm, function(response) {
        const videos = decorateResponse(response);
        store.setVideos(videos);
        render();
      });
    }
    );
  };
  const getId = function(item) {
    if(item.id.videoId) {
      return item.id.videoId;
    }
    return 'Video Not Found';
  };
  return {
    render,
    handleFormSubmit
  };
}();



