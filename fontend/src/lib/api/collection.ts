import { HOST_API } from "../config";

export const getCollectionWithType = async ({type, limit = 25}) => {
  try {
    const response = await fetch(HOST_API + `/api/collections?filters[type][$eq]=${type}&populate=image&pagination[limit]=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: JSON.stringify({
      //   identifier: email,
      //   password
      // })
    })

    const data = await response.json()

    if (! response.ok ) {
      if (data.error)
        throw Error(data.error.message) // strapi return error in data
      else
        throw Error(response.statusText)
    }

    return data
  }
  catch (err) {
    throw err
  }
}

export const getCollectionExcludeType = async ({type = 'temporary', limit = 25}) => {
  try {
    const response = await fetch(HOST_API + `/api/collections?filters[type][$ne]=${type}&populate=image&pagination[limit]=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: JSON.stringify({
      //   identifier: email,
      //   password
      // })
    })

    const data = await response.json()

    if (! response.ok ) {
      if (data.error)
        throw Error(data.error.message) // strapi return error in data
      else
        throw Error(response.statusText)
    }

    return data
  }
  catch (err) {
    throw err
  }
}

export const getCollectionWithSlug = async ({slug, limit = 25}) => {
  try {
    const response = await fetch(HOST_API + `/api/collections?filters[slug][$eq]=${slug}&populate=image&pagination[limit]=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: JSON.stringify({
      //   identifier: email,
      //   password
      // })
    })

    const data = await response.json()

    if (! response.ok ) {
      if (data.error)
        throw Error(data.error.message) // strapi return error in data
      else
        throw Error(response.statusText)
    }

    return data
  }
  catch (err) {
    throw err
  }
}
