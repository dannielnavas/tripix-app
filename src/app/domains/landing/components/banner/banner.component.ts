import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [RouterLink],
  template: `
    <section class="bg-gray-900 text-white">
      <div
        class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Understand User Flow.

            <span class="sm:block"> Increase Conversion. </span>
          </h1>

          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
              routerLink="/login"
            >
              Get Started
            </a>

            <a
              class="block w-full rounded-sm border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './banner.component.scss',
})
export class BannerComponent {}
