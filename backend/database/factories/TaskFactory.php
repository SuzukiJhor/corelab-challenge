<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    protected $model = Task::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->unique()->sentence,
            'description' => $this->faker->paragraph,
            'is_favorite' => $this->faker->randomElement(['true', 'false']),
            'color' => $this->faker->hexColor,
        ];
    }
}
