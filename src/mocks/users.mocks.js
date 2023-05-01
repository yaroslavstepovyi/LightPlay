import {
  userOnline1,
  userOnline2,
  userOnline4,
  userOnline3,
  userOnline5,
  userOnline6,
  userOnline7,
  userOnline8,
  userOnline9,
} from './index'

export const USERS = [
  {
    id: 1,
    img: userOnline2,
    name: 'Abe Fukuda',
    country: 'Japan',
    age: '28',
    email: 'test@test.com',
    password: 'testtest',
    role: 'moderator',
  },
  {
    id: 12,
    img: userOnline1,
    name: 'Aki Fukumoto',
    country: 'China',
    age: '23',
    email: 'chinathebest@gmail.com',
    password: '123123',
    role: 'admin',
  },
  {
    id: 2,
    img: userOnline3,
    name: 'Akih Lifuk',
    country: 'China',
    age: '23',
    email: 'for9PartN@gmail.com',
    password: '123123',
    role: 'admin',
  },
  {
    id: 3,
    img: userOnline4,
    name: 'Hayao Miyazaki',
    country: 'Japan',
    age: '69',
    email: 'hayao23123@gmail.com',
    password: '123123',
    role: 'user',
  },
  {
    id: 4,
    img: userOnline9,
    name: 'Eto Hirabajashi',
    country: 'Taiwan',
    age: '25',
    email: 'etohirabayashi@mail.com',
    password: '123123',
    role: 'user',
  },
  {
    id: 5,
    img: userOnline5,
    name: 'Kabio Mitzo',
    country: 'Ukraine',
    age: '43',
    email: 'MitzoKabio@gmail.com',
    password: '123123',
    role: 'moderator',
  },
  {
    id: 6,
    img: userOnline6,
    name: 'Tomy Banks',
    country: 'Bosnia',
    age: '26',
    email: 'TommyGool@mail.com',
    password: '123123',
    role: 'admin',
  },
  {
    id: 7,
    img: userOnline7,
    name: 'Nathio Drahadzo',
    country: 'Ukraine',
    age: '43',
    email: 'nnathioe3432@gmail.com',
    password: '123123',
    role: 'moderator',
  },
  {
    id: 8,
    img: userOnline8,
    name: 'Jimmy Hanksy',
    country: 'Bosnia',
    age: '26',
    email: '33DS2dcsa@mail.com',
    password: '123123',
    role: 'admin',
  },
]

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (USERS) {
        resolve(USERS);
      } else {
        reject(new Error('Error fetching users'));
      }
    }, 1500)
  })
}

export default getUsers
