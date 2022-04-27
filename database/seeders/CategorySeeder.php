<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("categories")->truncate();
        
        $categories = [
            [
                "name" => "stoly",
            ],
            [
                "name" => "konferenční stolky",
            ],
            [
                "name" => "květináče",
            ],
            [
                "name" => "doplňky",
            ],
        ];

        foreach($categories as $category) {
            Category::create([
                "name" => $category["name"],
            ]);
        }

    }
}
