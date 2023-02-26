import React from "react"
import { Routes, Redirect, Route } from "react-router-dom"
import Book from "../book/Book"
import BookEdit from "../book/EditBook"
import Login from "../Login"
import Registration from "../Registration"
import axios from "axios"
import AddBook from "../book/AddBook"

axios.defaults.baseURL ="http://127.0.0.1:8000/";

axios.interceptors.request.use(function(config){
   const token = localStorage.getItem('auth_token');
   config.headers.Authorization = token? `Bearer ${token}`: '' ;
   return config;
})

function MyRouter(){
 return(
    <Routes>
    <Route path="/login" element= {<Login/>} />
    <Route path="/registration" element= {<Registration/>} />
    <Route path="/book" element= {<Book/>} />
    <Route path="/book/edit/:id" element= {<BookEdit/>} />
    <Route path="/book/add/" element= {<AddBook/>} />
    </Routes>
 )
}
export default MyRouter;