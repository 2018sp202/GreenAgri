<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'A.Kanagalingam',
            'user_name' => 'kanagalingam',
            'email' => 'kanagalingam123@gmail.com',
            'password' => 'kanaga123',
            'address' => 'punnalaikadduvan south',
            'contact_number' => '0779232478',
            'role' => 'farmer'
           
        ],
        [
            'name' => 'Janu',
            'user_name' => 'janu',
            'email' => 'janu@gmail.com',
            'password' => 'janu123',
            'address' => 'punnalaikadduvan south',
            'contact_number' => '0779232478',
            'role' => 'officer',
           'office_details' => 'some details'
        ]);
    }
}
