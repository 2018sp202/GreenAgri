<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Farmm extends Model
{
    use HasFactory;
    protected $fillable = [
        
        'location',
        'size',
        'owner_id',
        'farmer_id',

    ];
}
