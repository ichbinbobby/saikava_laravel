<?php

namespace App\Backend\Service;

use Exception;

/**
 * MailService
 *
 * @package App\Backend\Service
 *
 * @author Monte
 */
class Mail
{
    /**
     * @throws Exception
     */
    public function sendTemplateMail()
    {
        throw new Exception('Not implemented yet');
    }

    /**
     * @param string $recipient
     * @param string $message
     * @param array $ccAddresses
     * @throws Exception
     */
    public function sendErrorNotification(
        string $recipient,
        string $message,
        array $ccAddresses = []
    ) {
        throw new Exception('Not implemented yet');
    }
}