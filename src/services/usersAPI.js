export const USERS_DATA = [
{
    id: "1",
    img: "users-page-users-icon",
    name: "Abe Fukuda",
    country: "Japan",
    age: "28",
    email: "test@test.com",
    password: "testtest",
    role: "moderator",
},
{
    id: "2",
    img: "userOnline1",
    name: "Aki Fukumoto",
    country: "China",
    age: "23",
    email: "chinathebest@gmail.com",
    password: "123123",
    role: "admin",
},
{
    id: "3",
    img: "userOnline2",
    name: "Hayao Miyazaki",
    country: "Japan",
    age: "69",
    email: "hayao23123@gmail.com",
    password: "123123",
    role: "user",
},
]

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(USERS_DATA){
            resolve(USERS_DATA);
        }else {
            reject(new Error('Error fetching users'))
        }
      }, 1500);
    });
  };

export default getAllUsers;