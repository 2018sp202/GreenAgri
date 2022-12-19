<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'pname',
        'variety',
        'available_quantity',
        'ptype',
        'pmethode',
        'image',
        'harvested_date',
        'shelf_life',
        'price',
        'status',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
