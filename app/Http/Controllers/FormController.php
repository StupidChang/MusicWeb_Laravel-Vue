<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Submission;  // 假設您有一個名為Submission的模型來處理數據庫

class FormController extends Controller
{
    public function submitForm(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'commission_type' => 'required|string|max:255',
            'details' => 'required|string',
            'end_date' => 'required|date',
        ]);

        $submission = new Submission();
        $submission->name = $validatedData['name'];
        $submission->email = $validatedData['email'];
        $submission->commission_type = $validatedData['commission_type'];
        $submission->details = $validatedData['details'];
        $submission->end_date = $validatedData['end_date'];
        $submission->save();

        return response()->json(['message' => '提交成功!'], 200);
    }
}
