import uuid from 'react-uuid'

export const findOrCreateCookie = () => {
  if (document.cookie) {
    return document.cookie
  } else {
    const userUUID = `userUUID=${uuid()}`
    const expiration = `expires=${new Date('01/01/2100').toUTCString()}`
    document.cookie = `${userUUID};${expiration};SameSite=Lax`;
    return document.cookie
  }
}

export const cookieID = (cookie) => cookie.split('=')[1]