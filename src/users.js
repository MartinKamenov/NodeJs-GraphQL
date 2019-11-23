const users = [{
    id: '1',
    name: 'Pesho',
    age: 19,
    nickname: 'Bai',
    imageUrl: 'https://images.pexels.com/photos/285173/pexels-photo-285173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},{
    id: '2',
    name: 'Gosho',
    age: 19,
    nickname: 'Mui',
    imageUrl: 'https://images.pexels.com/photos/666988/pexels-photo-666988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}];

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          clearTimeout(wait);
          resolve(users);
        }, 2000);
    })
};

module.exports = { getAllUsers, users };