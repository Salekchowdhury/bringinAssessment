import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ShowAlert from '../../alert/ShowAlert';
import BookApis from '../../apis/BookApis';
import Loading from '../../component/Loadin';
import Pagination from '../../component/Pagination';
import BookRow from './BookRow';


const Book = () => {
  const [loading, setLoadin] =useState(true);
  const [books, setBook] = useState(null);
  const [query, setQuery] = useState();
  const [currentPage, setCurrentPage] =useState(1);
  const [postsPerPage, setPostsPerPage] =useState(4);

  console.log('search', query);
 
    useEffect(() => {
      getBook();
      
    },[]) 
     useEffect(() => {
      searchData();
      if(query == ''){
        getBook();
      }
      
    },[query])

    const searchData =()=>{
      let searchQuery = query?.toLowerCase();
      const filterData = books?.filter((book)=>book.book_name.toLowerCase().includes(searchQuery));
      if(filterData?.length> 0){
        setBook(filterData);
      }
    }

    const getBook= async()=>{
        const res = await BookApis.index();
        if(res.data.status == 200){
          console.log(res);
          setBook(res.data.data);
          setLoadin(false);
        }
    }

    const deleteBook =async(id)=>{
      const res = await BookApis.delete(id);
      if(res.data.status ==200){
        getBook();
        ShowAlert.swal('Success', res.data.message, 'success');
      }else{
        ShowAlert.swal('Warning', res.data.message, 'warning');
      }
   }

const lastPostindex =currentPage * postsPerPage;
const firstPostIndex =lastPostindex - postsPerPage;
const currentPost =books?.slice(firstPostIndex, lastPostindex );


    let bookList = null;
    if(books){
           bookList =currentPost.map((book, index)=>(
            <BookRow key={'book_id'+index} deleteBook={deleteBook} rowData={book}/>
           ))
    }

  return (
    <div>
 {books?.length > 0 ?  <div className='container mt-5'>
    <div className='card'>
      <div className='card-header'>
        <div className='row d-flex justify-end'>
          <div className='col'>
          <Link to={'/book/add'} className="btn btn-sm btn-success">Add Book</Link>
          </div>
          <div className='col'>
          <h2>Book List</h2>
          </div>
          <div className='col'>
          <input onChange={(e)=>setQuery(e.target.value)} name='search' className=' form-control' placeholder='Search by book name'></input>
          </div>

        </div>
      </div>
      <div className='card-body'>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#SL</th>
      <th scope="col">Book Name</th>
      <th scope="col">Auth Name</th>
      <th scope="col">Published Date</th>
      <th scope="col">Adition</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
     <tbody>
        {bookList}
        <Pagination postPerPage={postsPerPage} totalPosts={books?.length} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
      </tbody>
  </table>
      </div>

    </div>

  </div>: <Loading/>}
    </div>
   
   
  )
}
export default Book;
