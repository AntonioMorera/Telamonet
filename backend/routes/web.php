<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/prueba', function () {
    return view('prueba');
});

use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index']);