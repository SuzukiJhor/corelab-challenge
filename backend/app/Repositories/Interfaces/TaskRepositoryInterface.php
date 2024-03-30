<?php

namespace App\Repositories\Interfaces;

use Illuminate\Pagination\LengthAwarePaginator;

interface TaskRepositoryInterface
{
    public function getAll(int $totalPerPage = null, int $page = null, string $filter = ''): array|LengthAwarePaginator;
    public function findById(string $id): object|null;
    public function create(array $data): object;
    public function update(string $id, array $data): object|null;
    public function delete(string $id): bool;
}
