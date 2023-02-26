<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});






Route::get('/user',[AuthController::class, 'index']);
Route::post('/user',[AuthController::class, 'store']);
Route::post('/user/login',[AuthController::class, 'login']);


Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/book',[BookController::class, 'index']);
    Route::post('/book',[BookController::class, 'store']);
    Route::get('/book/{id}',[BookController::class, 'show']);
    Route::put('/book/{id}',[BookController::class, 'update']);
    Route::delete('/book/{id}/delete',[BookController::class, 'destroy']);

    Route::post('/logout',[AuthController::class, 'logout']);



});