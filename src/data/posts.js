import { USERS } from './users'

export const POSTS = [
  {
    imageUrl: '',
    user: USERS[0].user,
    like: 7222,
    caption: 'Foto das férias no Caribe',
    profile_picture: USERS[0].image,
    coments: [
      {
        user: 'deboraseco_',
        coment: 'Que lugar fantástico! Quero muito conhecer.'
      },
      {
        user: 'neymarjr',
        coment: 'Vai, ta por onde?... Olha teu wpp!'
      }
    ]
  },
  {
    imageUrl: '',
    user: USERS[0].user,
    likes: 'Foto das férias no Caribe',
    profile_picture: USERS[0].image,
    coments: [
      {
        user: 'deboraseco_',
        coment: 'Que lugar fantástico! Quero muito conhecer.'
      },
      {
        user: 'neymarjr',
        coment: 'Vai, ta por onde?... Olha teu wpp!'
      }
    ]
  }
]
