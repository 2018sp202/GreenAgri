<?php

namespace App\Http\Controllers;
use App\Models\Loan;
use Illuminate\Http\Request;
use DB;
use App\Models\User;
class LoanController extends Controller
{

    function store(Request $request){
        Loan::create($request->all());
        
    }
    public function index()
    {
       // $loans = Loan::all();
       // return response()->json($loans);
         
       $data = DB::table('loans')
        ->join('users', 'loans.farmer_id', '=', 'users.id')
        
         ->select('loans.id','loans.reason','loans.officer_id','loans.amount','loans.date','loans.status','users.name', 'users.email','users.mobilenumber')
            ->get();
            return response()->json($data);
    }
    
    function success(Request $request ){
        $complain=Loan::find($request->id);
        $complain->status='Accepted';
        $complain->save();
    }
    function fail(Request $request ){
        $complain=Loan::find($request->id);
        $complain->status='Rejected';
        $complain->save();
    }
    public function destroy(Request $request, $id)
    {
        $subscribe = Loan::find($id);
        if(is_null( $subscribe)) {
            return response()->json(['message' => 'Subscriber Not Found'], 404);
        }
        $subscribe->delete();
        return response()->json(null, 204);
    
    }
}
