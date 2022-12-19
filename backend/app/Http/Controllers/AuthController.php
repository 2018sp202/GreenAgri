<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function __construct()
    {
       // $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Failed! Email or Password not matches'], 401);
        }

        return $this->respondWithToken($token);
    }
    public function signup(Request $request)
    {
        $validate= $request->validate([
            'email'=>'required',
            'password'=>'required'
        ]);
     $userData =   User::create($request->all);
        return response()->json(['message'=>"user added", 'userData'=>$userData],200);
    }
    public function register(Request $request) {
        
      

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:6',
            'address' => 'min:5',
            'role'=>'required',
            'gender'=> ['in:male,female'],
           
            
            'mobilenumber' => 'min:10',
            'officedetails'=>'min:10'
            
    
        
            
            
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }

        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
    public function show()
    {
        
        
     
        $user= User::all();
        return response()->json($user);
    
    }
    public function getfarmer(){
        
     $user=User::where('role','farmer')->get();
        return response()->json($user);;
    }
    public function getao(){
        $user=User::where('role', 'agriculturalOfficer')->get();
        return response()->json($user);;
       }

     
    public function destroy(Request $request, $id)
    {
        $user = User::find($id);
        if(is_null( $user)) {
            return response()->json(['message' => 'farmer Not Found'], 404);
        }
        $user->delete();
        return response()->json(null, 204);
    
    }
    
}
