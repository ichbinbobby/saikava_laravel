<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * User migration
 *
 * @author Monte
 */
class User extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->boolean('isAdmin');
        });

        Schema::table('user', function(Blueprint $table)
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
        Schema::table('user', function (Blueprint $table)
        {
            $table->dropPrimary();
        });

        Schema::dropIfExists('user');
    }
}
