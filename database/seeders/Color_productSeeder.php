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
            ],
            [
                "color_id" => 2,
                "product_id" => 1,
            ],
            [
                "color_id" => 3,
                "product_id" => 1,
            ],
            [
                "color_id" => 1,
                "product_id" => 2,
            ],
            [
                "color_id" => 2,
                "product_id" => 2,
            ],
            [
                "color_id" => 3,
                "product_id" => 2,
            ],
            [
                "color_id" => 1,
                "product_id" => 3,
            ],
            [
                "color_id" => 2,
                "product_id" => 3,
            ],
            [
                "color_id" => 3,
                "product_id" => 3,
            ],
            [
                "color_id" => 1,
                "product_id" => 4,
            ],
            [
                "color_id" => 2,
                "product_id" => 4,
            ],
            [
                "color_id" => 3,
                "product_id" => 4,
            ],
            [
                "color_id" => 1,
                "product_id" => 5,
            ],
            [
                "color_id" => 3,
                "product_id" => 5,
            ],
            [
                "color_id" => 1,
                "product_id" => 6,
            ],
            [
                "color_id" => 2,
                "product_id" => 6,
            ],
            [
                "color_id" => 1,
                "product_id" => 7,
            ],
            [
                "color_id" => 2,
                "product_id" => 7,
            ],
            [
                "color_id" => 3,
                "product_id" => 7,
            ],
        ];

        foreach($color_products as $color_product) {
            Color_product::create([
                "color_id" => $color_product["color_id"],
                "product_id" => $color_product["product_id"],
            ]);
        }
    }
}
