<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Farmm;

class FarmController extends Controller
{
 
    //get all
    public function index()
    {
        $farms = Farmm::all();
        return response()->json($farms);
    }
    function store(Request $request){
        Farmm::create($request->all());
        
    }
    public function destroy(Request $request, $id)
    {
        $subscribe = Farmm::find($id);
        if(is_null( $subscribe)) {
            return response()->json(['message' => 'Farm Not Found'], 404);
        }
        $subscribe->delete();
        return response()->json(null, 204);
    
    }
    
}