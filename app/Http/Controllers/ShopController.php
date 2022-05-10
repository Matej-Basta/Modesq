<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ShopController extends Controller
{
    

    public function tables($product = null)
    {
        $category = "stoly";

        return view("shop.tables", compact("category"));
    }

    public function coffee_tables($product = null)
    {
        $category = "konferenční stolky";

        return view("shop.coffee_tables", compact("category"));
    }
}
