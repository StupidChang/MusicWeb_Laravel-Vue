<?php

namespace App\Http\Controllers;

use App\Models\Submission; // 假設您有一個 Submission 模型
use Illuminate\Http\Request;

class ChartController extends Controller
{
    public function index()
    {
        $data = Submission::selectRaw('COUNT(*) as count, state')
                          ->groupBy('state')
                          ->get()
                          ->map(function ($item) {
                              return ['state' => $item->state, 'count' => $item->count];
                          });

        return response()->json($data);
    }
}
