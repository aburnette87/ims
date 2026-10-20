<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\LoginService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __construct(
        private LoginService $loginService
    ) {}

    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'user_name' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        $auth_status = $this->loginService->attemptLogin($credentials);

        if (!$auth_status) {
            return response()->json([
                'message' => 'Invalid username or password.'
            ], 401);
        }

        $request->session()->regenerate();
        
        return response()->json([
            'message' => 'Login successful.',
            'user' => [
                'id' => $request->user()->id,
                'name' => $request->user()->name,
                'user_name' => $request->user()->user_name,
                'email' => $request->user()->email,
            ]
        ]);
    }
}