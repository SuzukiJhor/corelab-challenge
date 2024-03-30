<?php

namespace App\Repositories\Eloquent;

use App\Models\Task;
use App\Repositories\Interfaces\TaskRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class TaskRepository implements TaskRepositoryInterface
{
    protected Model $model;

    public function __construct(Task $model)
    {
        $this->model = $model;
    }

    public function getAll(int $totalPerPage = null, int $page = null, string $filter = ''): array|LengthAwarePaginator
    {
        return $this->model
            ->where(function ($query) use ($filter) {
                if ($filter) {
                    $query->orWhere('title', 'LIKE', "%{$filter}%");
                }
            })
            ->paginate($totalPerPage, ['*'], 'page', $page);
    }

    public function findById(string $id): ?object
    {
        return $this->model->find($id);
    }

    public function create(array $data): object
    {
        return $this->model->create($data);
    }

    public function update(string $id, array $data): ?object
    {
        $record = $this->model->findOrFail($id);
        $record->update($data);
        return $record;
    }

    public function delete(string $id): bool
    {
        $record = $this->model->findOrFail($id);
        return $record->delete();
    }
}
