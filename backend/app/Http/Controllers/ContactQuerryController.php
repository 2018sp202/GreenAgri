<?php

namespace App\Http\Controllers;
use App\Models\ContactQuerry;


use Validator;
use Illuminate\Http\Request;

class ContactQuerryController extends Controller
{

    public function store(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'name'=>'required|string|between:2,100',
            'email'=>'required|string|email|max:100|unique:users',
            'phone_num'=>'required|min:10',
            'message'=>'required',
            'Posting_date'=>'required']);
        if($validator->passes())
        {
            $contactQuerry = new ContactQuerry;
            $contactQuerry->name=$request->name;
            $contactQuerry->email = $request->email;
            $contactQuerry->phone_num = $request->phone_num;
            $contactQuerry->message = $request->message;
            $contactQuerry->Posting_date = $request->Posting_date;
            $result=$contactQuerry->save();
            $arr = array('status'=>'true','message'=>'Your Message Successfully Send');
        }
        else 
        {
            $arr = array('status'=>'false','message'=>$validator->errors()->all());
        }
        echo json_encode($arr);
       
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContactQuerry  $contactQuerry
     * @return \Illuminate\Http\Response
     */
    public function show(ContactQuerry $contactQuerry)
    {
        return ContactQuerry::all();
    }

   

    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContactQuerry  $contactQuerry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
   
        $contactQuerry = ContactQuerry::find($id);
        if(is_null($contactQuerry)) {
            return response()->json(['message' => 'contactQuerry Not Found'], 404);
        }
        $contactQuerry->delete();
        return response()->json(null, 204);
        
     }

    
    
}
