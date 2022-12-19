<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactQuerryController;
use App\Http\Controllers\SubscribeController;

use App\Http\Controllers\UserController;
use App\Http\Controllers\FarmController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\ComplainController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\RelieffundController;
use App\Http\Controllers\FarmproductController;
use App\Http\Controllers\AuctionController;
use App\Http\Controllers\BidController;





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

Route::group([  'middleware' => 'api',], function ($router) {
    
    Route::post('login', [AuthController::class,'login']);
    Route::post('register', [AuthController::class,'register']);
    //Route::post('logout',  [AuthController::class,'logout'] );
    //Route::post('refresh', 'AuthController@refresh');
    //Route::post('me', 'AuthController@me');
    Route::get('showf', [AuthController::class,'show']);
    Route::delete('farmerdelete/{id}', [ AuthController::class, 'destroy']);
    Route::get('getfarmer', [AuthController::class,'getfarmer']);
    Route::get('getao', [AuthController::class,'getao']);

});
//contactQuarry
Route::get('contactQuarry', [ContactQuerryController::class, 'show']);
Route::post('contactQuarry', [ContactQuerryController::class, 'store']);
Route::delete('contactQuarry/{id}', [ ContactQuerryController::class, 'destroy']);

//subscribe
Route::get('subscribe', [SubscribeController::class, 'show']);
Route::post('subscribe', [SubscribeController::class, 'store']);
Route::delete('subscribex/{id}', [ SubscribeController::class, 'destroy']);

Route::get('/farms/{id}',[FarmController::class, 'show']);
Route::post('/farms',[FarmController::class, 'store']);
Route::get('/farms',[FarmController::class, 'getAll']);
Route::put('/farms/{id}',[FarmController::class, 'update']);
Route::delete('/farms/{id}',[FarmController::class, 'destroy']);


Route::get('/product/{id}',[ProductController::class, 'show']);
Route::post('/product',[ProductController::class, 'store']);
Route::get('/products',[ProductController::class, 'getAll']);
Route::get('/product/user/{id}',[ProductController::class, 'findByFarmer']);
Route::put('/product/{id}',[ProductController::class, 'update']);
Route::delete('/product/{id}',[ProductController::class, 'destroy']);
Route::post('/product/file',[ProductController::class, 'fileUpload']);


Route::get('/users/{id}',[UserController::class, 'show']);
Route::post('/users',[UserController::class, 'store']);
Route::get('/users',[UserController::class, 'getAll']);
Route::put('/users/{id}',[UserController::class, 'update']);
Route::delete('/users/{id}',[UserController::class, 'destroy']);

Route::get('/loans',[LoanController::class, 'index']);
Route::post('/loan',[LoanController::class, 'store']);
Route::post('/complain',[ComplainController::class, 'store']);
Route::get('/show',[ComplainController::class, 'show']);
Route::get('/successcom/{id}',[ComplainController::class, 'success']);
Route::delete('subscribe/{id}', [ ComplainController::class, 'destroy']);
Route::get('/doubts',[RequestController::class, 'index']);
Route::post('/doubt',[RequestController::class, 'store']);
Route::get('/reliefs',[RelieffundController::class, 'index']);
Route::post('/relief',[RelieffundController::class, 'store']);
Route::get('/successlo/{id}',[LoanController::class, 'success']);
Route::get('/faillo/{id}',[LoanController::class, 'fail']);
Route::delete('loande/{id}', [ LoanController::class, 'destroy']);
Route::get('/successr/{id}',[RelieffundController::class, 'success']);
Route::get('/failr/{id}',[RelieffundController::class, 'fail']);
Route::delete('delrelief/{id}', [ RelieffundController::class, 'destroy']);
Route::get('/successd/{id}',[RequestController::class, 'success']);
Route::get('/faild/{id}',[RequestController::class, 'fail']);
Route::delete('deldoubt/{id}', [ RequestController::class, 'destroy']);

Route::post('/upload',[FarmproductController::class, 'upload']);

Route::post('/uploadx',[FarmproductController::class, 'uploadx']);
Route::get('indexp', [FarmproductController::class,'index']);
Route::get('expiredp', [FarmproductController::class,'expired']);
Route::delete('delproduct/{id}', [ FarmproductController::class, 'destroy']);

Route::post('auction',[AuctionController::class, 'store']);
Route::get('indexA', [AuctionController::class,'index']);
Route::get('expiredA', [AuctionController::class,'expired']);
Route::get('indexd', [AuctionController::class,'indexd']);
Route::get('auctionp/{id}', [AuctionController::class,'getauction']);
Route::delete('delauction/{id}', [ AuctionController::class, 'destroy']);


Route::post('bid',[BidController::class, 'store']);
Route::get('indexB', [BidController::class,'index']);
Route::get('winner', [BidController::class,'winner']);

Route::post('farm',[FarmController::class, 'store']);
Route::get('indexF', [FarmController::class,'index']);
Route::delete('delfarm/{id}', [ FarmController::class, 'destroy']);