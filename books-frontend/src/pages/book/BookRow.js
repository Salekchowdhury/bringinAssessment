import React from 'react'
import { Link } from 'react-router-dom';

const BookRow = ({rowData, deleteBook}) => {
    const {id, book_name, auth_name, publish_date, edition}= rowData;

    

  return (
    <tr>
    <td>{id}</td>
    <td>{book_name}</td>
    <td>{auth_name}</td>
    <td>{publish_date}</td>
    <td>{edition}</td>
    <td>
      <div className='btn-group'>
        <Link to={`/book/edit/${id}`} className='btn btn-success btn-sm pr-2'>Edit</Link>
        <button onClick={()=>deleteBook(id)}  className='btn btn-danger btn-sm ml-2'>Delete</button>

      </div>
    </td>
 
  </tr>
  )
}
export  default BookRow
