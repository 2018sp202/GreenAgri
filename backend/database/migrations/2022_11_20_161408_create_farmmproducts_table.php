<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('farmmproducts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('farmer_id');
            $table->foreign('farmer_id')->references('id')->on('users');
            $table->string('veh_name');
            $table->string('variety');
            $table->double('availablequantity');
            $table->string('producttype')->nullable();
            $table->string('producedmethode')->nullable();
            $table->date('shelflife');
            $table->double('price');
            $table->date('date');

            
            $table->string('veh_img')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('farmmproducts');
    }
};
