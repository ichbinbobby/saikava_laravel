<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

/**
 * User
 *
 * @package App\Model
 *
 * @author Monte
 */
class User extends Model
{
    public $table = '';
    /** @var int */
    public $id;
    /** @var string */
    public $name;
    /** @var bool*/
    public $isAdmin;

    /** @var array */
    public $fillable = [
        'name',
        'isAdmin'
    ];
}