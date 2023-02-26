import React from 'react'

 const Pagination = ({postPerPage, totalPosts, setCurrentPage , currentPage}) => {
    let pages =[];
    for(let i= 1; i<=Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i);
    }
  return (
  <div>
   { pages.map((page,index)=>{
        return (<button className={`rounded mt-2 p-2 border-primary me-1 ${page==currentPage? 'bg-primary': ''}`} key={index} onClick={()=>setCurrentPage(page)}>{page}</button>)
    })}
  </div>
  )
}
export default Pagination
