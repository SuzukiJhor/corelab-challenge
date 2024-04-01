<?php

namespace App\Http\Controllers;

use App\DTO\Tasks\CreateTaskDTO;
use App\DTO\Tasks\EditTaskDTO;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Repositories\Eloquent\TaskRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Task;

class TaskController extends Controller
{
    public function __construct(private TaskRepository $taskRepository){}

    public function index(Request $request)
    {
        $tasks = $this->taskRepository->getAll(
            totalPerPage: $request->total_per_page ?? 15,
            page: $request->page ?? 1,
            filter: $request->get('filter', ''),
        );

        return TaskResource::collection($tasks);
    }

    public function store(StoreTaskRequest $request)
    {
        $task = $this->taskRepository->create(new CreateTaskDTO(...$request->validated()));
        
        return new TaskResource($task);
    }

    public function show(string $id)
    {
        if (!$task = $this->taskRepository->findById($id)) {
            return response()->json(['message' => 'task not found'], Response::HTTP_NOT_FOUND);
        }
    }

    public function update(UpdateTaskRequest $request, string $id)
    {
        $response = $this->taskRepository->update(new EditTaskDTO(...[$id, ...$request->validated()]));
        if (!$response) {
            return response()->json(['message' => 'task not found'], Response::HTTP_NOT_FOUND);
        }
        
        return response()->json(['message' => 'task updated with success']);
    }

    public function destroy(string $id)
    {
        if (!$this->taskRepository->delete($id)) {
            return response()->json(['message' => 'task not found'], Response::HTTP_NOT_FOUND);
        }
        
        return response()->json(['message' => 'task deleted with success'], Response::HTTP_NO_CONTENT);
    }
}
