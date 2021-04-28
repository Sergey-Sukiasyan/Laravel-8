<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "name"=>"Admin",
            "email"=>"admin@mail.ru",
            "password"=>Hash::make("12345")
        ]);

        User::create([
            "name"=>"User",
            "email"=>"user@mail.ru",
            "password"=>Hash::make("12345")
        ]);

        DB::table('model_has_roles')->insert([
            'role_id' => 1,
            'model_type' => 'App\Models\User',
            'model_id' => 1
        ]);
    }
}
