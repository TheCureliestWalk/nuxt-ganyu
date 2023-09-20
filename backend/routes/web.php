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
    return ['api_status' => 'up and running', 'version' => app()->version()];
});

Route::get('/user', [App\Http\Controllers\UserController::class, 'index']);

require __DIR__.'/auth.php';
