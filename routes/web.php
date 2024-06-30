<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\FormController;

Route::post('/submissions-form', [FormController::class, 'submitForm'])->name('submissions.form'); //表單註冊路由

// 若您的控制器方法用於API響應，建議將路由放在routes/api.php中
Route::get('/submissions-get', [FormController::class, 'getSubmissions'])->name('submissions.get'); //取得表單路由

