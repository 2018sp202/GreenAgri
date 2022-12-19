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
        Schema::create('farmms', function (Blueprint $table) {
            $table->id();
            
            $table->string('location');
            $table->double('size');
            $table->string('owner_id');
            $table->unsignedBigInteger('farmer_id');
            $table->foreign('farmer_id')->references('id')->on('users');

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
        Schema::dropIfExists('farmms');
    }
};
