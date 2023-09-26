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

Route::get('/', function () {
    return ['status' => 'calamitous'];
});

Route::resource('/profile', \App\Http\Controllers\ProfileController::class)->middleware('auth:sanctum');

require __DIR__.'/auth.php';
