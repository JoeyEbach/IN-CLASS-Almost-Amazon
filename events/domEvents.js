import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
// import { showAuthors } from '../pages/authors';
import { showBooks } from '../pages/books';
import { getAuthors, getSingleAuthor } from '../api/authorData';
import addAuthorForm from '../components/forms/addAuthorForm';
import viewAuthor from '../pages/viewAuthor';
import { deleteAuthorBooksRelationship, getAuthorDetails, getBookDetails } from '../api/mergedData';
import { showAuthors } from '../pages/authors';
import addBookForm from '../components/forms/addBookForm';
import viewBook from '../pages/viewBook';

/* eslint-disable no-alert */
const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteBook(firebaseKey).then(getBooks).then(showBooks);
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getBookDetails(firebaseKey).then(viewBook);
    }

    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleAuthor(firebaseKey).then((authorObj) => addAuthorForm(authorObj));
    }

    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getAuthorDetails(firebaseKey).then(viewAuthor);
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteAuthorBooksRelationship(firebaseKey).then(getAuthors).then(showAuthors);
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;
