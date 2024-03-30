<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Repositories\Eloquent\TaskRepository;
use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function __construct(private TaskRepository $taskRepository)
    {
    }

    public function index(Request $request)
    {
        $tasks = $this->taskRepository->getAll(
            totalPerPage: $request->total_per_page ?? 15,
            page: $request->page ?? 1,
            filter: $request->get('filter', ''),
        );

        return TaskResource::collection($tasks);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
