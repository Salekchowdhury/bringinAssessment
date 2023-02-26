import { wait } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShowAlert from '../../alert/ShowAlert';
import BookApis from '../../apis/BookApis';

 const BookEdit = () => {
    const {id} =useParams();
    const [book, setBook]= useState({
      book_name: '',
      auth_name: '',
      publish_date: '',
      edition: '',
      error_list: [],
    });
    
    // console.log('book error_list', book.error_list.book_name)

    useEffect(()=>{
        showBookDataById(id);
    },[id])

     const showBookDataById = async(id)=>{
        const res = await BookApis.show(id);
        if(res.data.status ==200){
            // console.log('first', res);
            setBook(res.data.data);
        }
     }

     const handleInputChange = (e)=>{
      e.persist();
      setBook({...book, [e.target.name]: e.target.value})
  }

      const handleSubmit =async(e)=>{
         e.preventDefault();
         const data = book;
         const res = await BookApis.update(data, id);
         if(res.data.status == 200){
          ShowAlert.swal('Success', res.data.message, 'success')
          //  setBook({...book, error_list: res.data.errors_list})
         }else if(res.data.status == 404){
           ShowAlert.swal('Warning', res.data.message, 'warning')
         }else if(res.data.status == 500){
          ShowAlert.swal('Warning', res.data.message, 'warning')
        }else{

        }
      }


  return (
    <div className='container mt-5'>
        <div className='card'>
           <div className='card-header'>
            <Link to={'/book'} className="btn btn-success btn-sm">Back</Link>
             <h2>Edit Book</h2>
           </div>
           <div className='card-body'>
           <form onSubmit={handleSubmit}>
            <div className='row'>
             <div className='col-6'>
                <div className="form-outline mb-4">
                   <input type="text" onChange={handleInputChange} name='book_name' value={book.book_name} placeholder='Book Name' className="form-control" />
                   {/* <small className='text-danger me-auto'>{book.error_list.book_name? book.error_list?.book_name: ''}</small> */}
                </div>
             </div>
             <div className='col-6'>
                <div className="form-outline mb-4">
                   <input type="text" onChange={handleInputChange} name='auth_name' value={book.auth_name} placeholder='Auther Name'  className="form-control" />
                   {/* <small className='text-danger me-auto'>{book.error_list.auth_name? book.error_list?.auth_name: ''}</small> */}
                 </div>
             </div>
             <div className='col-6'>
             <div className="form-outline mb-4">
                   <input type="date" onChange={handleInputChange} value={book.publish_date} name='publish_date' placeholder='Publish Date'   className="form-control" />
                   {/* <small className='text-danger me-auto'>{book.error_list.publish_date? book.error_list?.publish_date: ''}</small> */}
                </div>
             </div>
             <div className='col-6'>
             <div className="form-outline mb-4">
                   <input type="number" onChange={handleInputChange} value={book.edition} name='edition' placeholder='Edition'  className="form-control" />
                   {/* <small className='text-danger me-auto'>{book.error_list.edition? book.error_list?.edition: ''}</small> */}
                </div>
             </div>
            </div>
       
       <div className="form-check d-flex justify-content-center mb-4">
    </div>
     <button type="submit"  className="btn btn-primary btn-block mb-4">Update</button>
       </form>
           </div>
        </div>
        
    </div>
  )
}
export default BookEdit
