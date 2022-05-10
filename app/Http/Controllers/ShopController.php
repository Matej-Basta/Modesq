<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ShopController extends Controller
{
    

    public function tables()
    {
        
        $category_id = 1;
        $category = "stoly";

        $products = Product::query()->where("category_id", $category_id)->get();

        foreach($products as $product) {
            $product->price = $product->sizes()->orderBy("price", "asc")->value("price");
        }

        return view("shop.tables", compact("products", "category"));
    }
}
