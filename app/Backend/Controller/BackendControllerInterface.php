<?php

namespace App\Backend\Controller;

/**
 * BackendControllerInterface
 *
 * @package App\Backend\Controller
 *
 * @author Monte
 */
interface BackendControllerInterface
{
    /**
     * @param int $id
     * @return mixed
     */
    public function get(int $id);

    /**
     * @param array $attributes
     * @return mixed
     */
    public function create(array $attributes);

    /**
     * @param int $id
     * @param array $attributes
     * @return mixed
     */
    public function update(int $id, array $attributes);

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id);
}