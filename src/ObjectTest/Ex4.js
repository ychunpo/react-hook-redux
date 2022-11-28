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

console.log('aaa', data['items'][1])

const url = 'items[1].image[1].path'

const arrayURL = url.split('.');
console.log(url)
console.log(url.trim)
console.log(arrayURL)
// for (let i of arrayURL) {

// }


//console.log(data.arrayURL[1])
// const lastNode = arrayURL[arrayURL.length - 1]
// let node = data;
// arrayURL.forEach((path, index) => node = index === arrayURL.length - 1 ? node : node[path]);
// node[lastNode] = 22;
data.items[1].image[1].path = 22

console.log(typeof data.items[1].image[1].path)