<?php

namespace App\Http\Controllers;
use App\Models\Auction;
use App\Models\Farmproduct;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Carbon;

class AuctionController extends Controller
{
    function store(Request $request){
        Auction::create($request->all());
        
    }
    public function index(){
    $data = DB::table('auctions')
        ->join('farmmproducts', 'auctions.product_id', '=', 'farmmproducts.id')
        
         ->select('auctions.id','auctions.baseprice','auctions.farmer_id','auctions.startdate','auctions.enddate','farmmproducts.veh_name','farmmproducts.veh_img','farmmproducts.availablequantity','farmmproducts.producttype','farmmproducts.producedmethode')
         ->where('auctions.enddate', '>=', Carbon::today())
            ->get();
            return response()->json($data);
    }
    public function expired(){
        $data = DB::table('auctions')
            ->join('farmmproducts', 'auctions.product_id', '=', 'farmmproducts.id')
            
             ->select('auctions.id','auctions.baseprice','auctions.farmer_id','auctions.startdate','auctions.enddate','farmmproducts.veh_name','farmmproducts.veh_img','farmmproducts.availablequantity','farmmproducts.producttype','farmmproducts.producedmethode')
             ->where('auctions.enddate', '<', Carbon::today())
                ->get();
                return response()->json($data);
        }

    public function indexd()
    {
       // $loans = Loan::all();
       // return response()->json($loans);
         
       $data = DB::table('auctions')
         ->select('auctions.enddate')
            ->get();
            return response()->json($data);
    }
  
   public function getauction($id) {
    // return $id?Booking::find($id):Booking::all();
    $booking = Auction::find($id);
    if(is_null($booking)) {
        return response()->json(['message' => 'Booking Not Found'], 404);
    }
   // return response()->json($booking::find($id), 200);
   return response()->json($booking::find($id), 200);
}
public function destroy(Request $request, $id)
{
    $subscribe = auction::find($id);
    if(is_null( $subscribe)) {
        return response()->json(['message' => 'Subscriber Not Found'], 404);
    }
    $subscribe->delete();
    return response()->json(null, 204);

}
}
