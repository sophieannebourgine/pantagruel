import axios from 'axios'

console.log(process.env.NODE_ENV)

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api'
      : `http://${window.location.hostname}:5000/api`,

  withCredentials: true,
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error('API response', err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn() {
    return localStorage.getItem('user') != null
  },
  isAdmin() {
    return this.getLocalStorageUser() && this.getLocalStorageUser().isAdmin

    // console.log(this.getLocalStorageUser().isAdmin)
  },

  // This method returns the user from the localStorage
  // Be careful, the value is the one when the user logged in for the last time
  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('user'))
  },

  // This method signs up and logs in the user
  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  login(email, password) {
    return service
      .post('/login', {
        email,
        password,
      })
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  logout() {
    localStorage.removeItem('user')
    return service.get('/logout')
  },

  // This is an example on how to use this method in a different file
  // api.getCountries().then(countries => { /* ... */ })

  getProperties(url) {
    return service
      .get(url)
      .then(res => res.data)
      .catch(errHandler)
  },

  getDetail(id) {
    return service
      .get(`/detail/${id}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  getForRent() {
    return service
      .get('/forrent')
      .then(res => res.data)
      .catch(errHandler)
  },

  getMenu() {
    return service
      .get('/menu')
      .then(res => res.data)
      .catch(errHandler)
  },

  getReservation() {
    return service
      .get('/reservation')
      .then(res => res.data)
      .catch(errHandler)
  },

  getAbout() {
    return service
      .get('/aboutus')
      .then(res => res.data)
      .catch(errHandler)
  },

  getTest() {
    return service
      .get('/test')
      .then(res => res.data)
      .catch(errHandler)
  },

  getFavsOfLoggedInUser(id) {
    return (
      service
        //route à créer
        .get(`/favorites/${id}`)
        .then(res => res.data.favorite)
        .catch(errHandler)
    )
  },

  // obtient les clients qui ont mis la propriété dans leurs favoris
  getFavorites() {
    return service
      .get('/favorites')
      .then(res => res.data)
      .catch(errHandler)
  },

  addFavorite(propertyId) {
    return service
      .post('/favorites', { propertyId })
      .then(res => res.data)
      .catch(errHandler)
  },

  removeFavorite(propertyId) {
    return service
      .delete('/favorites/' + propertyId)
      .then(res => res.data)
      .catch(errHandler)
  },

  contactUs(data) {
    return service
      .post('/send-email', data)
      .then(res => res.data)
      .catch(errHandler)
  },

  addProperty(fd) {
    return service
      .post('/add-new-property', fd)
      .then(res => res.data)
      .catch(errHandler)
  },

  editProperty(body) {
    return service
      .post('/manage-property')
      .then(res => res.data)
      .catch(errHandler)
  },

  deleteProperty(propertyId) {
    return service
      .delete('property/delete/' + propertyId)
      .then(res => res.data)
      .catch(errHandler)
  },

  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler)
  },

  addPicture(file) {
    const formData = new FormData()
    formData.append('picture', file)
    return service
      .post('/endpoint/to/add/a/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler)
  },
}
