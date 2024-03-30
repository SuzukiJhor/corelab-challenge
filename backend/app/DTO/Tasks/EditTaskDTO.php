<?php

namespace App\DTO\Tasks;

class EditTaskDTO
{
    public function __construct(
        public ?string $id = null,
        public ?string $title = null,
        public ?string $description = null,
        public ?string $is_favorite = null,
        public ?string $color = null
    ) {
        //
    }
}
