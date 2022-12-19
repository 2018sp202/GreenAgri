<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compl extends Model
{
    use HasFactory;
    protected $fillable = [
        'FarmerID',
          'ComplainType',
          'Complain'
         
      ];
}
