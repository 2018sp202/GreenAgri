<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    //get all
    public function getAll()
    {
        $users = User::all();
        return response()->json($users);
    }

    //get by id
    public function show($id)
    {
        $user = User::find($id);
        if(!empty($user))
        {
            return response()->json($user);
        }
        else
        {
            return response()->json([
                "message" => "User not found"
            ], 404);
        }
    }

    //create user signup
    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->user_name = $request->user_name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->address = $request->address;
        $user->contact_number = $request->contact_number;
        $user->role = $request->role;
        $user->office_details = $request->office_details;

        $user->save();
        return response()->json([
            "message" => "User Added."
        ], 201);
    }

    //update
    public function update(Request $request, $id)
    {
        if (User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->name = is_null($request->name) ? $user->name : $request->name;
            $user->email = is_null($request->email) ? $user->email : $request->email;
            $user->address = is_null($request->address) ? $user->address : $request->address;
            $user->save();
            return response()->json([
                "message" => "User Updated."
            ], 404);
        }else{
            return response()->json([
                "message" => "User Not Found."
            ], 404);
        }
    }

    //detele
    public function destroy($id)
    {
        if(User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->delete();

            return response()->json([
              "message" => "user deleted."
            ], 202);
        } else {
            return response()->json([
              "message" => "user not found."
            ], 404);
        }
    }

}
