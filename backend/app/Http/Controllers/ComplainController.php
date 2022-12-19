<?php

namespace App\Http\Controllers;
use App\Models\Complain;
use Illuminate\Http\Request;
use DB;
use App\Models\User;
use Auth;

class ComplainController extends Controller
{
    //
    function store(Request $request){
        Complain::create($request->all());
        
    }
    function show(){
        $data = DB::table('complains')
        ->join('users', 'complains.FarmerID', '=', 'users.id')
        
         ->select('complains.id','complains.ComplainType','complains.Complain','complains.status','users.name', 'users.email','users.mobilenumber')
            ->get();
            return response()->json($data);
     
       }
      
       function success(Request $request ){
        $complain=Complain::find($request->id);
        $complain->status='Solved';
        $complain->save();
    }
    public function destroy(Request $request, $id)
    {
        $subscribe = Complain::find($id);
        if(is_null( $subscribe)) {
            return response()->json(['message' => 'Subscriber Not Found'], 404);
        }
        $subscribe->delete();
        return response()->json(null, 204);
    
    }
}
