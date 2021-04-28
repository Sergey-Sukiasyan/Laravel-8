<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Contracts\Role;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name("welcome");


Route::group(["prefix"=>"AdminPanel","namespace"=>"Admin"],function (){
    Route::get("/","AdminController@index")->name("admin")->middleware(['role:admin']);
    Route::post("/login","AuthController@loginStore")->name("loginStore")->middleware("guest");
    Route::get("/login","AuthController@login")->name("AdminLogin")->middleware("guest");
});

Route::get("AdminPanel/logout","Admin\AuthController@logout")->name("AdminLogout")->middleware("auth");


