<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Farm;

class FarmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Farm::create([
            'location' => 'Jaffna',
            'size' => '10 acres',
            'owner_name' => 'kammal',
            'farmer_id' => '1',
            
        ]);
        
    }
}
