<?php

namespace App\Backend\Service;

use Exception;

/**
 * PasswordGenerator
 *
 * @package App\Backend\Service
 *
 * @author Monte
 */
class PasswordGenerator
{
    /**
     * @throws Exception
     */
    public function generatePassword()
    {
        throw new Exception('Not implemented yet');
    }

    /**
     * @param string $string
     * @return string
     */
    public function generatePasswordFromInput(string $string): string
    {
        return md5($string) . sha1($string);
    }
}