<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Farmproduct extends Model
{
    use HasFactory;
    protected $fillable =['farmer_id','veh_name','veh_img','variety','availablequantity','producttype','producedmethode','date','shelflife','price','status'];
}
