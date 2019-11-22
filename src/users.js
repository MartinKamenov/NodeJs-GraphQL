const users = [{
    id: 1,
    name: 'Pesho',
    age: 19,
    nickname: 'Bai'
},{
    id: 2,
    name: 'Gosho',
    age: 19,
    nickname: 'Mui'
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