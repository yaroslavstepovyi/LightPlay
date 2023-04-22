import user1 from '../assets/images/users/user1.svg'
import user2 from '../assets/images/users/user2.svg'
import user3 from '../assets/images/users/user3.svg'
import user4 from '../assets/images/users/user4.svg'

export const USERS_DATA = [
  {
    id: "1",
    name: "Abe Fukuda",
    country: "Japan",
    age: "28",
    email: "test@test.com",
    password: "testtest",
    img: user1,
    role: "moderator",
  },
  {
    id: "2",
    name: "Aki Fukumoto",
    country: "China",
    age: "23",
    email: "chinathebest@gmail.com",
    password: "123123",
    img: user2,
    role: "admin",
  },
  {
    id: "3",
    name: "Hayao Miyazaki",
    country: "Japan",
    age: "69",
    email: "hayao23123@gmail.com",
    password: "123123",
    img: user3,
    role: "user",
  },
  {
    id: "4",
    name: "Eto Hirabajashi",
    country: "Taiwan",
    age: "25",
    email: "etohirabayashi@mail.com",
    password: "123123",
    img: user4,
    role: "user",
  },
]

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (USERS_DATA) {
        resolve(USERS_DATA);
      } else {
        reject(new Error('Error fetching users'))
      }
    }, 1500);
  });
};

export default getAllUsers;