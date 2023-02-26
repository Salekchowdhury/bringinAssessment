<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class AuthController extends Controller
{
    public function store(Request $request)
    {

      $validator = \Validator::make($request->all(),[
         'name'=> 'required|string',
         'email'=> 'required|email',
         'password'=> 'required|min:6',
      ]);

         if($validator->fails()){
             return response()->json([
               'satatus'=> 422,
               'message'=> $validator->errors()->all(),
             ],422);
         }

         $user =User::create([
             'name'=> $request->name,
             'email'=> $request->email,
             'password'=> \Hash::make($request->password),
         ]);

         if($user){
             return response()->json([
                 'status'=> 200,
                 'message'=>'User Created Successfully',
             ]);
         }else{
             return response()->json([
                 'status'=> 500,
                 'message'=>'Something wrong',
             ]);
         }
    }
    public function login(Request $request)
    {
      $validator = \Validator::make($request->all(),[

         'email'=>'required|email|max:191',
         'password'=>'required',
      ]);

      if($validator->fails()){

         return response()->json([
             'status'=> 422,
             'validation_error'=> $validator->messages(),
         ]);

      }else{

         $user = User::where('email', $request->email)->first();
         //
         $check = \Hash::check($request->password, $user->password);
         if(!$user || !\Hash::check($request->password, $user->password)){

             return response()->json([
                 'status'=> 401,
                 'data'=> $user,
                 'message'=> 'Email and password invalid',
             ]);
         }else{
             $token = $user->createToken($user->email.'_Token')->plainTextToken;
             return response()->json([
                     'status'=>200,
                     'userName'=>$user->name,
                     'token'=>$token,
                     'message'=> 'Logged in successfully',
             ]);
         }
      }
    }

    public function logout()
    {
       auth()->user()->tokens()->delete();
       return response()->json([
        'status'=> 200,
        'message'=> 'Logged Out Successfully'
       ]);
    }
}