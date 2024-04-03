<?php

namespace App\Repositories\Eloquent;

use App\DTO\Tasks\CreateTaskDTO;
use App\DTO\Tasks\EditTaskDTO;
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

    public function getAll(string $filter = ''): array|LengthAwarePaginator
    {
        $query = $this->model
            ->where(function ($query) use ($filter) {
                if ($filter) {
                    $query->orWhere('title', 'LIKE', "%{$filter}%");
                }
            });

        return $query->get()->toArray();
    }

    public function findById(string $id): ?Task
    {
        return $this->model->find($id);
    }

    public function create(CreateTaskDTO $dto): Task
    {
        $isFavorite = $dto->is_favorite ?? 'false';
        $requestData = [
            'title' => $dto->title,
            'description' => $dto->description,
            'is_favorite' => $isFavorite,
            'color' => $dto->color,
        ];

        return $this->model->create((array) $requestData);
    }

    public function update(EditTaskDTO $dto): ?bool
    {
        if (!$task = $this->findById($dto->id)) {
            return false;
        }

        $currentData = $task->toArray();
        $data = (array) $dto;
        $dataToUpdate = array_filter($data, function ($value) {
            return $value !== null;
        });

        $updatedData = array_merge($currentData, $dataToUpdate);

        return $task->update($updatedData);
    }

    public function delete(string $id): bool
    {
        if (!$task = $this->findById($id)) {
            return false;
        }

        return $task->delete();
    }
}
