<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Game
 *
 * @author Monte
 */
class Game extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game', function (Blueprint $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->string('version');
            $table->dateTime('releaseDate');
        });

        Schema::table('game', function (Blueprint $table)
        {
            $table->primary('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('game', function (Blueprint $table)
        {
            $table->dropPrimary();
        });

        Schema::dropIfExists('game');
    }
}
