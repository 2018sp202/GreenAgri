<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Relieffund extends Model
{
    use HasFactory;
    protected $fillable = ['farmer_id','officer_id','reason','amount','date','status'];
}
