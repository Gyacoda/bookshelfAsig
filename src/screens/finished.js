import * as React from 'react'
import { Link } from 'components/lib'
import { ListItemList } from 'components/list-item-list'

function FinishedScreen() {
  return (
    <ListItemList
      filterListItems={li => Boolean(li.finishDate)}
      noListItems={
        <p>
          Congratulations! This is where you can keep track of the books you've
          successfully completed. When you finish reading a book, add it to
          this list to showcase your literary achievements.
          Get started by exploring the{' '}
          <Link to="/discover">Discover page</Link> to discover new books to
          read and add them to your completed list.
        </p>
      }
      noFilteredListItems={
        <p>
          It looks like you've accomplished quite a bit! Your completed books
          are right here in your <Link to="/list">reading list</Link>.
          Feel free to revisit your literary journey or continue exploring new
          books on the <Link to="/discover">Discover page</Link>.
        </p>
      }
    />
  )
}

export { FinishedScreen }