<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    /** 
     * function that fetches a specific product 
     * 
     * @param $product_id
     * @return object
    */

    public function product($product_id) {
        
        $product = Product::findOrFail($product_id);

        $product->category;
        $product->sizes = $product->sizes()->orderBy("size", "asc")->get();
        $product->colors;

        return $product;
    }

    // /**
    //  * function that fetches a specific product based on its category
    //  * 
    //  * @param $category_id
    //  * @return array of objects
    //  */

    //  public function products($category_id) {
        
    //     $products = Product::query()->where("category_id", $category_id)->get();

    //      foreach($products as $product) {
    //          $product->price = $product->sizes()->orderBy("price", "asc")->value("price");
    //      }

    //      return $products;
    //  }
}
