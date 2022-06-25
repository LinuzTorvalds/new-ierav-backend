import { Request, Response, Router } from 'express'

// users
import UpdateUserControl from './controllers/users/update'
import CreateUserControl from './controllers/users/signUp'
import SignInUserControl from './controllers/users/signIn'
import ReadUserControl from './controllers/users/read'
import BirthdayUserControl from './controllers/users/birthday'
import WeddingAnniversaryUserControl from './controllers/users/weddingAnniversary'

//events
import UpdateEventControl from './controllers/events/update'
import CreateEventControl from './controllers/events/create'
import DeleteEventControl from './controllers/events/delete'
import ReadEventControl from './controllers/events/read'

const router = Router()

//users
const updateUserControl = new UpdateUserControl()
const signUpUserControl = new CreateUserControl()
const signInUserControl = new SignInUserControl()
const readUserControl = new ReadUserControl()
const birthdayUserControl = new BirthdayUserControl()
const weddingAnniversaryUserControl = new WeddingAnniversaryUserControl()

//Events
const updateEventControl = new UpdateEventControl()
const createEventControl = new CreateEventControl()
const deleteEventControl = new DeleteEventControl()
const readEventControl = new ReadEventControl()

//Home
router.get('/', (request: Request, response: Response) => {
  response.send('Home :) ^-^')
})

//Users
router.put('/users/:Code', updateUserControl.handle)
router.post('/users/signup', signUpUserControl.handle)
router.post('/users/signin', signInUserControl.handle)
router.get('/users/:Email', readUserControl.handle)
router.get('/users/birthday/:Email', birthdayUserControl.handle)
router.get('/users/wedding/:Email', weddingAnniversaryUserControl.handle)

//Events
router.put('events/:Code', updateEventControl.handle)
router.post('events/create', createEventControl.handle)
router.delete('events/:Code', deleteEventControl.handle)
router.get('events/:Code', readEventControl.handle)

export default router
