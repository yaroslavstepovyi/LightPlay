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

const USERS = [
  {
    id: 1,
    name: 'Abe Fukuda',
    age: '28',
    img: userOnline2,
    country: 'Japan',
    email: 'test@test.com',
    password: 'testtest',
    role: 'moderator',
  },
  {
    id: 12,
    name: 'Aki Fukumoto',
    age: '23',
    img: userOnline1,
    country: 'China',
    email: 'chinathebest@gmail.com',
    password: '123123',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Akih Lifuk',
    age: '23',
    img: userOnline3,
    country: 'China',
    email: 'for9PartN@gmail.com',
    password: '123123',
    role: 'admin',
  },
  {
    id: 3,
    name: 'Hayao Miyazaki',
    age: '69',
    img: userOnline4,
    country: 'Japan',
    email: 'hayao23123@gmail.com',
    password: '123123',
    role: 'user',
  },
  {
    id: 4,
    name: 'Eto Hirabajashi',
    age: '25',
    img: userOnline9,
    country: 'Taiwan',
    email: 'etohirabayashi@mail.com',
    password: '123123',
    role: 'user',
  },
  {
    id: 5,
    name: 'Kabio Mitzo',
    age: '43',
    img: userOnline5,
    country: 'Ukraine',
    email: 'MitzoKabio@gmail.com',
    password: '123123',
    role: 'moderator',
  },
  {
    id: 6,
    name: 'Tomy Banks',
    age: '26',
    img: userOnline6,
    country: 'Bosnia',
    email: 'TommyGool@mail.com',
    password: '123123',
    role: 'admin',
  },
  {
    id: 7,
    name: 'Nathio Drahadzo',
    age: '43',
    img: userOnline7,
    country: 'Ukraine',
    email: 'nnathioe3432@gmail.com',
    password: '123123',
    role: 'moderator',
  },
  {
    id: 8,
    name: 'Jimmy Hanksy',
    age: '26',
    img: userOnline8,
    country: 'Bosnia',
    email: '33DS2dcsa@mail.com',
    password: '123123',
    role: 'admin',
  },
]

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      USERS 
      ? resolve(USERS) 
      : reject(new Error('Error fetching users'))
    }, 1500)
  })
}
export { USERS, getUsers }
