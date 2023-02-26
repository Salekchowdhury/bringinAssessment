<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'book_name' => $this->faker->name(),
            'auth_name' => $this->faker->name(),
            'publish_date' => $this->faker->date(),
            'edition' => $this->faker->randomDigitNotNull(),
        ];

    }
}