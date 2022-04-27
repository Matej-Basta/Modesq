<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use App\Models\Color;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("colors")->truncate();

        $colors = [
            [
                "name" => "seda",
                "picture" => "/img/seda.jpg",
            ],
            [
                "name" => "bila",
                "picture" => "/img/bila.jpg",
            ],
            [
                "name" => "černá",
                "picture" => "/img/cerna.jpg",
            ],
        ];

        foreach($colors as $color) {
            Color::create([
                "name" => $color["name"],
                "picture" => $color["picture"],
            ]);
        };
    }
}
