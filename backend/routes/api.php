<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/', fn () => response()->json(['message' => 'ok']));

Route::resource('tasks', TaskController::class);
