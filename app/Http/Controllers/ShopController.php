<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShopController extends Controller
{
    

    public function shop($category, $product = null)
    {
        
        return view("shop.shop", compact("category", "product"));
    }
}
