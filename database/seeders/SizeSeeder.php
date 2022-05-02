<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use App\Models\Size;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("sizes")->truncate();

        $sizes = [
            [
                "size" => "100x260",
                "material" => "dřevo",
                "price" => 45000.90,
                "product_id" => 1,
            ],
            [
                "size" => "130x290",
                "material" => "dřevo",
                "price" => 56000.90,
                "product_id" => 1,
            ],
            [
                "size" => "100x200",
                "material" => "dřevo",
                "price" => 37000.90,
                "product_id" => 1,
            ],
            [
                "size" => "100x260",
                "material" => "ocel",
                "price" => 45000.90,
                "product_id" => 2,
            ],
            [
                "size" => "130x290",
                "material" => "ocel",
                "price" => 56000.90,
                "product_id" => 2,
            ],
            [
                "size" => "100x200",
                "material" => "ocel",
                "price" => 37000.90,
                "product_id" => 2,
            ],
            [
                "size" => "100x260",
                "material" => "ocel",
                "price" => 45000.90,
                "product_id" => 3,
            ],
            [
                "size" => "130x290",
                "material" => "ocel",
                "price" => 56000.90,
                "product_id" => 3,
            ],
            [
                "size" => "100x200",
                "material" => "ocel",
                "price" => 37000.90,
                "product_id" => 3,
            ],
            [
                "size" => "100x260",
                "material" => "dřevo",
                "price" => 45000.90,
                "product_id" => 4,
            ],
            [
                "size" => "130x290",
                "material" => "dřevo",
                "price" => 56000.90,
                "product_id" => 4,
            ],
            [
                "size" => "100x200",
                "material" => "dřevo",
                "price" => 37000.90,
                "product_id" => 4,
            ],
            [
                "size" => "90x180",
                "material" => "ocel",
                "price" => 21000.90,
                "product_id" => 5,
            ],
            [
                "size" => "90x180",
                "material" => "ocel",
                "price" => 18000.90,
                "product_id" => 6,
            ],
            [
                "size" => "100x130",
                "material" => "dřevo",
                "price" => 12000.90,
                "product_id" => 7,
            ],
        ];

        foreach($sizes as $size) {
            Size::create([
                "size" => $size["size"],
                "material" => $size["material"],
                "price" => $size["price"],
                "product_id" => $size["product_id"],
            ]);
        }

    }
}
