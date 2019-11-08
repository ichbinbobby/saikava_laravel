<?php

namespace App\Backend\Controller;

use Exception;
use App\Struct\Response;
use App\Model\User as Model;

/**
 * User
 *
 * @package App\Backend\Controller
 *
 * @author Monte
 */
class User implements BackendControllerInterface
{
    //TODO Register in container
    /**
     * @param int $id
     * @return Model
     */
    public function get(int $id): Model
    {
        return Model::find($id);
    }

    /**
     * @param int $id
     * @param array $attributes
     * @return Response
     */
    public function update(int $id, array $attributes): Response
    {
        $user = Model::find($id);
        if ($user instanceof Model) {
            $user->exists = true;
            // Is done without checking the array for correctness
            $user->setRawAttributes($attributes);
            if ($user->update()) {
                return new Response(true);
            }

            return new Response(false, 'User update failed');
        }

        return new Response(false, 'User not found');
    }

    /**
     * @param array $attributes
     * @return Response
     */
    public function create(array $attributes): Response
    {
        $newUser = new Model();
        $newUser->setRawAttributes($attributes);

        try {
            $newUser->save();
        } catch (Exception $e) {
            return new Response(false, $e->getMessage(), $e->getTraceAsString());
        }

        return new Response(true);
    }

    /**
     * @param int $id
     * @return Response
     */
    public function delete(int $id): Response
    {
        $user = Model::find($id);
        if ($user instanceof Model) {
            try {
                $user->delete();
            } catch (Exception $e) {
                return new Response(false, $e->getMessage(), $e->getTraceAsString());
            }

            return new Response(true);
        }

        return new Response(false, 'Entity not found');
    }
}
