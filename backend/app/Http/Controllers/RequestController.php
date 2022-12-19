<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\User;
use App\Models\Requestd;

class RequestController extends Controller
{
    
    function store(Request $request){
        Requestd::create($request->all());
        
    }
    public function index()
    {
       // $loans = Loan::all();
       // return response()->json($loans);
         
       $data = DB::table('requestds')
        ->join('users', 'requestds.farmer_id', '=', 'users.id')
        
         ->select('requestds.id','requestds.problem','requestds.officer_id','requestds.doubt','requestds.date','requestds.status','users.name', 'users.email','users.mobilenumber')
            ->get();
            return response()->json($data);
    }
    function success(Request $request ){
        $complain=Requestd::find($request->id);
        $complain->status='Accepted';
        $complain->save();
    }
    function fail(Request $request ){
        $complain=Requestd::find($request->id);
        $complain->status='Rejected';
        $complain->save();
    }
    public function destroy(Request $request, $id)
    {
        $subscribe = Requestd::find($id);
        if(is_null( $subscribe)) {
            return response()->json(['message' => 'Subscriber Not Found'], 404);
        }
        $subscribe->delete();
        return response()->json(null, 204);
    }
    
}

