<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['nullable', 'min:2', 'max:255', 'unique:tasks'],
            'description' => ['nullable', 'string', 'min:2'],
            'is_favorite' => ['in:true,false'],
            'color' => ['string', 'max:255'],
        ];
    }
}
