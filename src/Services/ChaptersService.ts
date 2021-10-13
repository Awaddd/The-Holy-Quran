import { baseURL } from './Api'

export const getAllChapters = async () => {
    return (await fetch(`${baseURL}/chapters?language=en`)).json() 
}
