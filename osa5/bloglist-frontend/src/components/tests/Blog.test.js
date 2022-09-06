import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from '../Blog'

const blog = {
  'title': 'Kirja',
  'author': 'Kirjailija',
  'url': 'kirja.fi',
  'likes': 16,
  'user': {
    'username': 'kirjailija',
    'name': 'kirjailija',
    'id': '63170f5a50015c1261c3aba5'
  },
  'id': '63173503d5981b0162b3b880'
}

test('renders content', () => {
  render(<Blog blog={blog} />)
  screen.getByText('Kirja')
  screen.getByText('Kirjailija')
  expect(screen.queryByText('url')).not.toBeInTheDocument
  expect(screen.queryByText('likes')).not.toBeInTheDocument
})

test('url and likes are rendered after clicking the button', async () => {
  const mockHandler = jest.fn()

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)

  expect(screen.queryByText('url')).toBeInTheDocument
  expect(screen.queryByText('likes')).toBeInTheDocument
})

test('clicking like button twice calls the function twice', async () => {
  const mockHandler = jest.fn()

  render(<Blog blog={blog}/>)

  const user = userEvent.setup()
  let button = screen.getByText('view')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)

  button = screen.getByText('like')
  await user.click.button
  await user.click.button

})