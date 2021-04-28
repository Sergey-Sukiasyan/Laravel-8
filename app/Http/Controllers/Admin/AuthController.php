<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(){
        return view("admin.auth.login");
    }

    public function loginStore(Request $request){
        $request->validate([
            'email'=>"required|email",
            'password'=>"required"
        ]);

        if(Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ]) && Auth::user()->hasRole("admin")){
            return redirect()->route("admin");
        }

        session()->flash("invalid","Invalid Login or Password");

        return redirect()->route("AdminLogin");
    }

    public function logout(){
        Auth::logout();
        return redirect()->route("AdminLogin");
    }
}
