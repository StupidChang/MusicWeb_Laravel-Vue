<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\FormController;

Route::post('/submit-form', [FormController::class, 'submitForm'])->name('submit.form'); //表單註冊路由

Route::get('/submissions', [FormController::class, 'getSubmissions'])->name('submissions.get'); //取得表單路由
