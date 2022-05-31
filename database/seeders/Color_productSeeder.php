<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use App\Models\Color_product;

class Color_productSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("color_product")->truncate();

        $color_products = [
            [
                "color_id" => 1,
                "product_id" => 1,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 2,
                "product_id" => 1,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 3,
                "product_id" => 1,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 1,
                "product_id" => 2,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 2,
                "product_id" => 2,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 3,
                "product_id" => 2,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 1,
                "product_id" => 3,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 2,
                "product_id" => 3,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 3,
                "product_id" => 3,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 1,
                "product_id" => 4,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 2,
                "product_id" => 4,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 3,
                "product_id" => 4,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 1,
                "product_id" => 5,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 3,
                "product_id" => 5,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 1,
                "product_id" => 6,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 2,
                "product_id" => 6,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 1,
                "product_id" => 7,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 2,
                "product_id" => 7,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
            [
                "color_id" => 3,
                "product_id" => 7,
                "picture" => "/img/paris.jpg",
                "picture2" => "/img/berlin.jpg",
                "picture3" => "/img/paris2.jpg",
            ],
        ];

        foreach($color_products as $color_product) {
            Color_product::create([
                "color_id" => $color_product["color_id"],
                "product_id" => $color_product["product_id"],
                "picture" => $color_product["picture"],
                "picture2" => $color_product["picture2"],
                "picture3" => $color_product["picture3"],
            ]);
        }
    }
}
