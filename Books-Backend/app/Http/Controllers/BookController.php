<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
class BookController extends Controller
{
    public function index()
    {
      $books= Book::all();
      if($books){
        return response()->json([
            'status'=> 200,
            'data'=> $books,
        ]);
      }
    }
    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(),[
            'book_name' => 'required|string',
            'auth_name' => 'required|string',
            'publish_date' => 'required|date',
            'edition' => 'required',
    ]);
            if($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors_list'=>$validator->messages(),
            ]);
            }

            $book =Book::create([
                'book_name'=> $request->book_name,
                'auth_name'=> $request->auth_name,
                'publish_date'=> $request->publish_date,
                'edition'=> $request->edition,
            ]);
            if($book){
                return response()->json([
                    'status'=> 200,
                    'message'=> 'Book Added Successfully',
                ]);
            }else{
                return response()->json([
                    'status'=> 500,
                    'message'=> 'Something Wrong',
                ]);
            }

    }
    public function show(int $id)
    {
        $book = Book::findOrFail($id);

        if($book){
            return response()->json([
               'status'=> 200,
               'data'=>$book,
            ]);

        }else{
            return response()->json([
                'status'=> 401,
                'message'=>'Book is not found',
             ]);
        }
    }

    public function update(Request $request, int $book_id)
    {

       $validator = \Validator::make($request->all(),[
               'book_name' => 'required|string',
               'auth_name' => 'required|string',
               'publish_date' => 'required|date',
               'edition' => 'required',
       ]);
       if($validator->fails()){
        return response()->json([
            'status'=>422,
            'errors_list'=>$validator->messages(),
        ]);

       }

          $book = Book::findOrFail($book_id);
          if($book){
             $book->book_name = $request->input('book_name');
             $book->auth_name = $request->input('auth_name');
             $book->publish_date = $request->input('publish_date');
             $book->edition = $request->input('edition');
             $save = $book->save();
             if($save){
                return response()->json([
                    'status'=>200,
                    'message'=> 'Book data updated successfully',
                  ]);
             }else{
                return response()->json([
                    'status'=>500,
                    'message'=> 'Something Errors',
                  ]);
             }

          }else{
            return response()->json([
                'status'=>404,
                'message'=> 'Book id not found',
              ]);
          }


    }
    public function destroy(int $book_id)
    {
        $book = Book::findOrFail($book_id);
        if($book){
          $delete = $book->delete();
          if($delete){
             return response()->json([
               'status'=> 200,
               'message'=> 'Deleted data successfully',
             ]);
          }
        }else{
            return response()->json([
                'status'=> 404,
                'message'=> 'Book id not found',
              ]);
        }
    }
}
