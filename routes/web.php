<?php

use App\Events\MessageSent;
use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});


Route::post('/send-message', function (Request $request) {

    $validated = $request->validate([
        'message' => ['required', 'string'],
    ]);

    MessageSent::dispatch($validated['message']);

    return response()->json([
        'success' => true,
    ]);
});
