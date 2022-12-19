<?php

namespace App\Http\Controllers;
use App\Models\Subscribe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubscribeController extends Controller
{
    
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),['email'=>'required|string|email|max:100|unique:users']);
        if($validator->passes())
        {
            $check_status=Subscribe::where('email',$request->email)->get()->toArray();
            if($check_status)
            {
                $arr=array('status'=>'false','message'=>'Email Alredy Exists');
            }
            else 
            {
                $subscribe = new Subscribe();
                $subscribe->email=$request->email;
                $subscribe->save();
                $arr=array('status'=>'true','message'=>'Thank You For Subscribe');
            }
        }
        else 
        {
            $arr=array('status'=>'false','message'=>$validator->errors()->all());
        }
        echo json_encode($arr);
     }

    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Subscribe  $subscribe
     * @return \Illuminate\Http\Response
     */
    public function show(Subscribe $subscribe)
    {
        return Subscribe::all();
    }
    public function destroy(Request $request, $id)
    {
        $subscribe = Subscribe::find($id);
        if(is_null( $subscribe)) {
            return response()->json(['message' => 'Subscriber Not Found'], 404);
        }
        $subscribe->delete();
        return response()->json(null, 204);
    
    }
}
