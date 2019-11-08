<?php

namespace App\Model;

use DateTime;
use Illuminate\Database\Eloquent\Model;

/**
 * Game
 *
 * @package App\Model
 *
 * @author Monte
 */
class Game extends Model
{
    /** @var int */
    private $id;
    /** @var string */
    private $name;
    /** @var string */
    private $version;
    /** @var DateTime */
    private $releaseDate;
    /** @var int */
    private $bestPlayer;

    /** @var array */
    protected $fillable = [
        'name',
        'version',
        'releaseDate',
        'bestPlayer'
    ];
}