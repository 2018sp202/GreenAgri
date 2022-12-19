<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\User;
use App\Models\Relieffund;

class RelieffundController extends Controller
{
    //
    function store(Request $request){
        Relieffund::create($request->all());
        
    }
    public function index()
    {
       // $loans = Loan::all();
       // return response()->json($loans);
         
       $data = DB::table('relieffunds')
        ->join('users', 'relieffunds.farmer_id', '=', 'users.id')
        
         ->select('relieffunds.id','relieffunds.reason','relieffunds.officer_id','relieffunds.amount','relieffunds.date','relieffunds.status','users.name', 'users.email','users.mobilenumber')
            ->get();
            return response()->json($data);
    }
    function success(Request $request ){
        $complain=Relieffund::find($request->id);
        $complain->status='Accepted';
        $complain->save();
    }
    function fail(Request $request ){
        $complain=Relieffund::find($request->id);
        $complain->status='Rejected';
        $complain->save();
    }
    public function destroy(Request $request, $id)
    {
        $subscribe = Relieffund::find($id);
        if(is_null( $subscribe)) {
            return response()->json(['message' => 'Subscriber Not Found'], 404);
        }
        $subscribe->delete();
        return response()->json(null, 204);
    }
    
}

