<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\User;
use Image;

class ProductController extends Controller
{
    public function getAll()
    {
        $products = Products::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $farmer=User::find(1);

        $product = new Products;
        $product->pname = $request->pname;
        $product->variety = $request->variety;
        $product->pname = $request->pname;
        $product->variety = $request->variety;
        $product->available_quantity = $request->available_quantity;
        $product->ptype = $request->ptype;
        $product->pmethode = $request->pmethode;
        // $product->image = $request->image;


        $product->harvested_date = $request->harvested_date;
        $product->shelf_life = $request->shelf_life;
        $product->price = $request->price;
        $product->status = $request->status;
        $product-> user_id='1';
        // $product->user()->save($farmer);
        $product->save();
        return response()->json([
            "id"=> $product->id,
            "message" => "Product Added."
        ], 201);
    }

    public function fileUpload(Request $request ){
        if($request-> hasFile('image')){
            $fileName=$request->file('image')->getClientOriginalName();
            $product_id=$request->id;
            $product =Products::find($product_id);

            $handle = fopen($request->file('image'), "rb");
            $contents = fread($handle, filesize($request->file('image')));
            $product->image = $contents;
            
            $product->save();
            fclose($handle);
        }
    }

    public function show($id)
    {
        $product = Products::find($id);
        if(!empty($product))
        {
            return response()->json($product);
        }
        else
        {
            return response()->json([
                "message" => "Product not found"
            ], 404);
        }
    }

    public function findByFarmer($id)
    {
        $product = Products::where('user_id',$id)->get();

        foreach($product as $emotion) {
            $emotion->image = 'data:image/jpeg;base64,' . base64_encode( $emotion->image);
         }

        if(!empty($product))
        {   
            return response()->json($product);
        }
        else
        {
            return response()->json([
                "message" => "Product not found"
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        if (Products::where('id', $id)->exists()) {
            $product = Products::find($id);
            $product->pname = is_null($request->pname) ? $product->pname : $request->pname;
            $product->variety = is_null($request->variety) ? $product->variety : $request->variety;
            $product->available_quantity = is_null($request->available_quantity) ? $product->available_quantity : $request->available_quantity;
            $product->ptype = is_null($request->ptype) ? $product->ptype : $request->ptype;
            $product->pmethode = is_null($request->pmethode) ? $product->pmethode : $request->pmethode;
            $product->image = is_null($request->image) ? $product->image : $request->image;
            $product->harvested_date = is_null($request->harvested_date) ? $product->harvested_date : $request->harvested_date;
            $product->shelf_life = is_null($request->shelf_life) ? $product->shelf_life : $request->shelf_life;
            $product->price = is_null($request->price) ? $product->price : $request->price;
            $product->status = is_null($request->status) ? $product->status : $request->status;
            $product->save();
            return response()->json([
                "message" => "Product Updated."
            ], 404);
        }else{
            return response()->json([
                "message" => "Product Not Found."
            ], 404);
        }
    }

    public function destroy($id)
    {
        if(Products::where('id', $id)->exists()) {
            $product = Products::find($id);
            $product->delete();

            return response()->json([
              "message" => "records deleted."
            ], 202);
        } else {
            return response()->json([
              "message" => "product not found."
            ], 404);
        }
    }
    
}
