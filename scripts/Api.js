'use strict';

const API = function() {

  const API_KEY = 'AIzaSyA04g_HTuKD6sN3QKogsPqw-YATNjPM-Og';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      q: searchTerm,
      key: API_KEY 
    };
    $.getJSON(BASE_URL, query, callback);

   
  };
  return {
    fetchVideos
  };
}();