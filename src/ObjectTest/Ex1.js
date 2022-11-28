let data = {
  cover: {
    image: '24avata.png',
    caption: '24avata.png',
  },
  items:
    [
      {
        caption: '',
        image: [
          { path: '2020071319023045.png', name: '2020071319023045.png' },
          { path: '20200713200956613.png', name: '20200713200956613.png' },
        ],
      },
      {
        caption: '',
        image: [
          { path: 'bg2016092003.jpeg', name: 'bg2016092003.jpeg' },
          { path: '20200713200253837.png', name: '20200713200253837.png' },
        ],
      },
    ],

};

let url = data.items[1].image[1]
console.log(data['items'])

Object.defineProperty(url, 'path', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(data.items[1].image[1])
