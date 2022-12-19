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
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('farmer_id');
            $table->unsignedBigInteger('officer_id');
            
            $table->foreign('farmer_id')->references('id')->on('users');
            $table->foreign('officer_id')->references('id')->on('users');
            $table->string('problem');
            $table->date('date');
            $table->string('doubt');
            
            $table->string('status')->default('null');
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
        Schema::dropIfExists('requests');
    }
};
