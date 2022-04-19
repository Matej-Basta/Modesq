<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    
    //function that displays the whole React app

    public function index()
    {
        return view("index.index");
    }
}
