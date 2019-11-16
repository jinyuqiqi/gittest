import { get, post } from './index'

const api = '/api'

export const getOuterLinkTest = p => get(api+'/testOuterLink')

export const login = p => post(api+'/login', p)

export const selectSingle = p => get(api+'/selectSingle')

export const createSingle = p => post(api+'/createSingle', p)

export const register = p => post(api+'/register', p)

export const searchRessult = p => post(api+'/suggest', p)

export const getSongDetail = p =>post(api+'/songdetail', p)











