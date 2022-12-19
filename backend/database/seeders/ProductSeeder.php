<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'pname' => 'tomato',
            'variety' => 'Green tomato',
            'available_quantity' => '100.0',
            'ptype' => 'Vegetable',
            'pmethode' => 'organic',
            'image' => 'a',
            'harvested_date' => '2020/02/02',
            'shelf_life' => '2weeks',
            'price' => '100',
            'status' => 'add',

        ]);
    }
}
