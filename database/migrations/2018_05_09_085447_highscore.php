<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * HighScore
 *
 * @author Monte
 */
class HighScore extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('highscore', function (Blueprint $table)
        {
            $table->increments('id');
            $table->bigInteger('name');
            $table->integer('gameId');
            $table->integer('playerId');
        });

        Schema::table('highscore', function (Blueprint $table)
        {
            $table->primary('id');
            $table->foreign('gameId')->references('id')->on('game');
            $table->foreign('playerId')->references('id')->on('user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('highscore', function (Blueprint $table)
        {
            $table->dropForeign('playerId');
            $table->dropForeign('gameId');
            $table->dropPrimary();
        });

        Schema::dropIfExists('highscore');
    }
}
