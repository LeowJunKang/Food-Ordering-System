<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Register new user
    function register(Request $req)
    {
        $user =new User;
        $user->name= $req->input('name');
        $user->email= $req->input('email');
        $user->password= Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

    function login(Request $req)
    {
       $user = User::where('email', $req->email)->first();

        if (!$user || !Hash::check($req->password, $user->password)) {
            return response()->json(["error" => "Email or password incorrect!"], 401);
        }

        // Return only safe fields
        return response()->json([
            "name" => $user->name,
            "email" => $user->email,
            "id" => $user->id
        ]);
    }

}
