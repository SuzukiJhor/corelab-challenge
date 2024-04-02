<?php

namespace App\Repositories\Interfaces;

use App\DTO\Tasks\CreateTaskDTO;
use App\DTO\Tasks\EditTaskDTO;
use Illuminate\Pagination\LengthAwarePaginator;

interface TaskRepositoryInterface
{
    public function getAll(string $filter = ''): array|LengthAwarePaginator;
    public function findById(string $id): object|null;
    public function create(CreateTaskDTO $data): object;
    public function update(EditTaskDTO $data): bool|null;
    public function delete(string $id): bool;
}
