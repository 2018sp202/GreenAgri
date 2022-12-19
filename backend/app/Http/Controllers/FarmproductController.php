<?php

namespace App\Http\Controllers;
use App\Models\Farmmproduct;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
class FarmproductController extends Controller
{

    public function index()
    {
        $product=Farmmproduct::where('shelflife', '>=', Carbon::today())->get();
        return response()->json($product);;

       
    }
    public function expired()
    {
        $product=Farmmproduct::where('shelflife', '<', Carbon::today())->get();
        return response()->json($product);;

       
    }
    function upload(Request $request){
        $data= new Farmmproduct();
        $data->veh_name=$request->veh_name;
        $data->save();
            
    }
   


    public function uploadxc(Request $request)
    {
      
        $vehicle = new Farmmproduct;
        if ($request->hasFile('veh_img')){
         $completeFileName = $request->file('veh_img')->getClientOriginalName();
         $fileNameOnly = pathinfo($completeFileName,PATHINFO_FILENAME);
         $extension = $request->file('veh_img')->getClientOriginalExtension();
         $compPic   = str_replace(' ','_',$fileNameOnly).'-'.rand().'_'.time().'.'.$extension;
         //move image to public/img folder
         $path->$request->file('veh_img')->storeAs('public/img', $compPic);
         $vehicle->veh_img=$compPic;
         $vehicle->save();
        }

        

    }
    public function uploadx(Request $request)
    {
        $data= new Farmmproduct();

        if($request->file('veh_img')){
            $file= $request->file('veh_img');
            $filename= date('YmdHi').$file->getClientOriginalName();
            $file-> move(public_path('public/Image'), $filename);
            $data['veh_img']= $filename;
        }
        $data->farmer_id=$request->farmer_id;
        $data->veh_name=$request->veh_name;
        $data->variety=$request->variety;
        $data->availablequantity=$request->availablequantity;
        $data->producttype=$request->producttype;
        $data->producedmethode=$request->producedmethode;
        $data->date=$request->date;
        $data->shelflife=$request->shelflife;
        $data->price=$request->price;
        
        
        
        
        $data->save();
            
}
public function destroy(Request $request, $id)
{
    $subscribe = Farmmproduct::find($id);
    if(is_null( $subscribe)) {
        return response()->json(['message' => 'Subscriber Not Found'], 404);
    }
    $subscribe->delete();
    return response()->json(null, 204);

}

}
