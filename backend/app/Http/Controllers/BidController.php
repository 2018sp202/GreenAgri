<?php

namespace App\Http\Controllers;
use App\Models\Auction;
use App\Models\User;
use App\Models\Bid;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Carbon;
class BidController extends Controller
{
    function store(Request $request){
        Bid::create($request->all());
        
    }
    public function index(){
    $data = DB::table('bids')
        ->join('auctions', 'bids.auction_id', '=', 'auctions.id')
        ->join('users', 'bids.buyer_id', '=', 'users.id')

        
         ->select('auctions.id','auctions.baseprice','auctions.enddate')
            ->get();
            return response()->json($data);
    }
    public function winner(){
        // $data = DB::table('bids')
       // ->join('users', 'bids.buyer_id', '=', 'users.id')
       // ->select('bids.auction_id','bids.buyer_id', DB::raw('MAX(price) as max_amount'))
        
       // ->groupBy('bids.auction_id')
        

       // ->get();
       $data = DB::table('bids')
       ->join('users', 'bids.buyer_id', '=', 'users.id') 
       ->join('auctions', 'bids.auction_id', '=', 'auctions.id')
       ->select('bids.auction_id','users.name','bids.buyer_id','auctions.farmer_id','auctions.baseprice','bids.price','auctions.startdate','auctions.enddate')
        ->whereRaw('price in (select max(price) from bids group by (auction_id))')
        ->where('auctions.enddate', '<=', Carbon::today())
        ->get();
        return response()->json($data);
        



    }
}
