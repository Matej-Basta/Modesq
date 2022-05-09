<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("products")->truncate();

        $products = [
            [
                "name" => "Kjóto",
                "description" => "Město Kjóto je považováno za kulturní centrum Japonska, protože si dodnes dokázalo uchovat mnoho významných památek. Tuto stálost jsme přenesli do našeho stolu, který si snadno uchová harmonii vytvořenou kombinací dřeva a betonu, kterou vám přenese i do vašeho interiéru. Stolování s rodinou nebylo nikdy krásnější. Jedná se o český, ručně vyrobený nábytek z betonu.",
                "category_id" => 1,
                "picture" => "/img/paris.jpg",
            ],
            [
                "name" => "Berlín",
                "description" => "Stůl Berlín je ztělesnění preciznosti a kvality. Stejně tak, jako si hlavní město Německa i přes temnou historii udrželo svůj lesk a krásu, tak ani tento stůl neztratí svůj šarm po mnohaletém používání. Stolní deska je vyrobena z vysoko-pevnostního betonu s jedinečnou strukturou a povrchovou úpravou, která obstojí nejen vylitou kávu. Podnože jsou vyrobeny z kvalitní oceli, která podtrhuje stabilitu a stálost celého stolu. Jedná se o český, ručně vyrobený nábytek z betonu.",
                "category_id" => 1,
                "picture" => "/img/paris2.jpg",
            ],
            [
                "name" => "Paříž (ocel)",
                "description" => "Jídelní stůl Paříž je inspirovaný hlavní dominantou města, Eiffelovou věží. Stejně jako věž, tak i podnoží tohoto stolu, které se sbíhá směrem k vrcholu, je vyhotoveno z kvalitní oceli. Monumentální vhled stolu dovytváří betonová deska vyrobená z kvalitního UHPC betonu ošetřeného několika vrstvami speciálních povrchových úprav, které mají certifikát nezávadnosti pro styk s potravinami. Jedná se o český, ručně vyrobený nábytek z betonu.",
                "category_id" => 1,
                "picture" => "/img/paris.jpg",
            ],
            [
                "name" => "Paříž (dřevo)",
                "description" => "Jídelní stůl Paříž je inspirovaný hlavní dominantou města, Eiffelovou věží. Stejně jako věž, tak i podnoží tohoto stolu se sbíhá směrem k vrcholu. Monumentální vhled stolu dovytváří betonová deska vyrobená z kvalitního UHPC betonu ošetřeného několika vrstvami speciálních povrchových úprav, které mají certifikát nezávadnosti pro styk s potravinami. Jedná se o český, ručně vyrobený nábytek z betonu.",
                "category_id" => 1,
                "picture" => "/img/paris2.jpg",
            ],
            [
                "name" => "Bauhaus",
                "description" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam odit ad facere fuga nesciunt fugiat ut, a quam quibusdam quasi consequatur animi voluptatibus vitae reprehenderit tempora, ducimus esse cupiditate! Incidunt eius non vero quaerat nihil consequuntur minus explicabo eveniet reprehenderit. Dolore reiciendis fugit illo aliquid eveniet! Amet exercitationem voluptates aperiam non quo?",
                "category_id" => 2,
                "picture" => "/img/paris.jpg",
            ],
            [
                "name" => "Oslo",
                "description" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam odit ad facere fuga nesciunt fugiat ut, a quam quibusdam quasi consequatur animi voluptatibus vitae reprehenderit tempora, ducimus esse cupiditate! Incidunt eius non vero quaerat nihil consequuntur minus explicabo eveniet reprehenderit. Dolore reiciendis fugit illo aliquid eveniet! Amet exercitationem voluptates aperiam non quo?",
                "category_id" => 2,
                "picture" => "/img/paris2.jpg",
            ],
            [
                "name" => "Lisabon",
                "description" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam odit ad facere fuga nesciunt fugiat ut, a quam quibusdam quasi consequatur animi voluptatibus vitae reprehenderit tempora, ducimus esse cupiditate! Incidunt eius non vero quaerat nihil consequuntur minus explicabo eveniet reprehenderit. Dolore reiciendis fugit illo aliquid eveniet! Amet exercitationem voluptates aperiam non quo?",
                "category_id" => 2,
                "picture" => "/img/paris.jpg",
            ],
        ];

        foreach($products as $product) {
            Product::create([
                "name" => $product["name"],
                "description" => $product["description"],
                "category_id" => $product["category_id"],
                "picture" => $product["picture"],
            ]);
        }
    }
}
