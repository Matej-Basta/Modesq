<?php

use Illuminate\Support\Facades\Route;

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

Route::get("/", "IndexController@index");

Route::get("/obchod/stoly/{product?}", "ShopController@tables");

Route::get("/obchod/stolky/{product?}", "ShopController@coffee_tables");

// Route::get("/obchod/kvetinace", "ShopController@flowerpots");

// Route::get("/obchod/doplnky", "ShopConroller@accessories");

