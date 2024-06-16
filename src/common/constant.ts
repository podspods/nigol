import { route } from './api';

export const publicRoute: string[] =[
  route.home.public, 
  route.account.login, 
  route.account.signup, 
  route.account.verifyEmail
  
]


export const watchinRoute: string[] =[
  ...publicRoute, 
  route.about,
  '/'
  ]