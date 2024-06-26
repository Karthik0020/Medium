import { Hono } from 'hono'

const app = new Hono()

app.post('/signup', (c) => {
  return c.text('signup')
})

app.post('/signin', (c) => {
  return c.text('signup')
})

app.get('/blog/:id', (c) => {
  const id = c.req.param('id')
  return c.text('get blog routed')
})

app.post('/blog', (c) => {
  return c.text('blog')
})

app.post('/bulk', (c) => {
  return c.text('Get All Blog')
})

export default app
