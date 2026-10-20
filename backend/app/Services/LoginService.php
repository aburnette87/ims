<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class LoginService
{
    public function attemptLogin(array $credentials): bool
    {
        return Auth::guard('web')->attempt($credentials);
    }
}