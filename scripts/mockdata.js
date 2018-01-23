'use strict';

const mockData = function() {
  return {
    'kind': 'youtube#searchListResponse',
    'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/MxPjJjzpjvI4X1t8ThnAVx0M7EY"',
    'nextPageToken': 'CAUQAA',
    'regionCode': 'US',
    'pageInfo': {
      'totalResults': 1584,
      'resultsPerPage': 5
    },
    'items': [
      {
        'kind': 'youtube#searchResult',
        'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/jSMHOhm2ee6VxqLmPbkrFlurWU8"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'JqaV3FzolgU'
        },
        'snippet': {
          'publishedAt': '2017-06-20T23:10:42.000Z',
          'channelId': 'UCGg-glkZT8TzgU2esFO4TGA',
          'title': 'Thinkful Full Time Web Development Bootcamp',
          'description': 'Learn more about the program: https://www.thinkful.com/bootcamp/web-development/full-time/ Thinkful is building an online school that combines the effectiveness of face-to-face learning with...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/JqaV3FzolgU/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/JqaV3FzolgU/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/JqaV3FzolgU/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'Thinkful',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/LSPgX015AGUqZi7Z2guA4kdJZbQ"',
        'id': {
          'kind': 'youtube#channel',
          'channelId': 'UCGg-glkZT8TzgU2esFO4TGA'
        },
        'snippet': {
          'publishedAt': '2013-09-25T18:43:50.000Z',
          'channelId': 'UCGg-glkZT8TzgU2esFO4TGA',
          'title': 'Thinkful',
          'description': 'Advice for those considering a career in web development, junior developers, and more! Thinkful is an online web development school that pairs you 1-on-1 with an experienced mentor.',
          'thumbnails': {
            'default': {
              'url': 'https://yt3.ggpht.com/-iOkxM25vkVA/AAAAAAAAAAI/AAAAAAAAAAA/Koc5sVlvqw0/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
            },
            'medium': {
              'url': 'https://yt3.ggpht.com/-iOkxM25vkVA/AAAAAAAAAAI/AAAAAAAAAAA/Koc5sVlvqw0/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'
            },
            'high': {
              'url': 'https://yt3.ggpht.com/-iOkxM25vkVA/AAAAAAAAAAI/AAAAAAAAAAA/Koc5sVlvqw0/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'
            }
          },
          'channelTitle': 'Thinkful',
          'liveBroadcastContent': 'upcoming'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/I4cgeNkX4uCbPXnxTCv6DjuGTfE"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'LzVmPPpObO4'
        },
        'snippet': {
          'publishedAt': '2018-01-10T12:00:02.000Z',
          'channelId': 'UCFxdcuY-S6yjZGq_2cjilHg',
          'title': 'Jason Humphrey & How Thinkful Is Innovating Bootcamps',
          'description': 'Thinkful Bootcamp - GET THE OFFER HERE!: https://simpleprogrammer.com/yt/thinkful ▻ SUBSCRIBE TO THIS CHANNEL ◅ If You want to become a successful software developer, you need to be around...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/LzVmPPpObO4/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/LzVmPPpObO4/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/LzVmPPpObO4/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'John Sonmez',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/OzCrBMWvFU55GW1e2iHv_CBhM2Q"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'nx3I4EipGRo'
        },
        'snippet': {
          'publishedAt': '2016-05-18T14:44:57.000Z',
          'channelId': 'UCB9W1F-TkcriKx3w7C8eLeg',
          'title': 'Thinkful Flexible Online Coding Bootcamp Platform Demo',
          'description': 'We received a walkthrough of Thinkful\'s Flexible online coding bootcamp platform, showing the lesson plan layout, goals, assignments, and how students and mentors communicate. Read the full...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/nx3I4EipGRo/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/nx3I4EipGRo/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/nx3I4EipGRo/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'Course Report',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/pky5CrXrzctGXBPTFfU8KaXV4sY"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'HbLuskKkVag'
        },
        'snippet': {
          'publishedAt': '2016-07-25T18:32:31.000Z',
          'channelId': 'UCB9W1F-TkcriKx3w7C8eLeg',
          'title': 'Interview with Thinkful Full Time Bootcamp students Simon and Sean',
          'description': 'We spoke to Thinkful Full Time Bootcamp students Simon and Sean. They are some of the first students to take Thinkful\'s full-time, four-month, full stack JavaScript program, taught completely...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/HbLuskKkVag/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/HbLuskKkVag/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/HbLuskKkVag/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'Course Report',
          'liveBroadcastContent': 'none'
        }
      }
    ]
  };}();