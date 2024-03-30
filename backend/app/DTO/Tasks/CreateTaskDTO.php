<?php

namespace App\DTO\Tasks;

class CreateTaskDTO
{
    public function __construct(
        public string $title,
        public string $description,
        public string $is_favorite,
        public string $color,
    ) {
        //
    }
}
