<?php

namespace App\Struct;

/**
 * Response Struct
 *
 * @package App\Struct
 *
 * @author Monte
 */
class Response
{
    /** @var bool */
    private $success;
    /** @var string */
    private $errorMessage;
    /** @var string */
    private $stackTrace;

    /**
     * @param bool $success
     * @param string|null $message
     * @param string|null $trace
     */
    public function __construct(
        bool $success,
        string $message = null,
        string $trace = null
    ) {
        $this->success = $success;
        $this->errorMessage = $message;
        $this->stackTrace = $trace;
    }

    /**
     * @param bool $success
     * @return Response
     */
    public function setSuccess(bool $success): Response
    {
        $this->success = $success;
        return $this;
    }

    /**
     * @return bool
     */
    public function isSuccess(): bool
    {
        return $this->success;
    }

    /**
     * @param string $errorMessage
     * @return Response
     */
    public function setErrorMessage(string $errorMessage): Response
    {
        $this->errorMessage = $errorMessage;
        return $this;
    }

    /**
     * @return string
     */
    public function getErrorMessage(): string
    {
        return $this->errorMessage;
    }

    /**
     * @param string $stackTrace
     * @return Response
     */
    public function setStackTrace(string $stackTrace): Response
    {
        $this->stackTrace = $stackTrace;
        return $this;
    }

    /**
     * @return string
     */
    public function getStackTrace(): string
    {
        return $this->stackTrace;
    }
}