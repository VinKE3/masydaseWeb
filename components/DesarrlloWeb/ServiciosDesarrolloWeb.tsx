"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";

export function ServiciosDesarrolloWeb() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-grayDark dark:text-primaryDark">
              Todo lo que necesitas para tu negocio
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight from-primary to-azul bg-gradient-to-r bg-clip-text text-transparent text-azul block dark:bg-blueRadial degradedBlue sm:text-4xl">
              En un solo lugar
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Contamos con todas las herramientas necesarias para que tu negocio
              sobresalga en internet.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg
                  className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                  x-description="Heroicon name: mini/check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Invite team members
              </dt>
              <dd className="mt-2">
                Rerum repellat labore necessitatibus reprehenderit molestiae
                praesentium.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg
                  className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                  x-description="Heroicon name: mini/check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                List view
              </dt>
              <dd className="mt-2">
                Corporis asperiores ea nulla temporibus asperiores non tempore
                assumenda aut.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg
                  className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                  x-description="Heroicon name: mini/check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Keyboard shortcuts
              </dt>
              <dd className="mt-2">
                In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo
                sapiente dicta laboriosam.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg
                  className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                  x-description="Heroicon name: mini/check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Calendars
              </dt>
              <dd className="mt-2">
                Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate
                eligendi fugiat sequi.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg
                  className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                  x-description="Heroicon name: mini/check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Notifications
              </dt>
              <dd className="mt-2">
                Quos inventore harum enim nesciunt. Aut repellat rerum omnis
                adipisci.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg
                  className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                  x-description="Heroicon name: mini/check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Boards
              </dt>
              <dd className="mt-2">
                Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg
                  className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                  x-description="Heroicon name: mini/check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Reporting
              </dt>
              <dd className="mt-2">
                Eos laudantium repellat sed architecto earum unde incidunt.
                Illum sit dolores voluptatem.
              </dd>
            </div>

            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg
                  className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                  x-description="Heroicon name: mini/check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Mobile app
              </dt>
              <dd className="mt-2">
                Nulla est saepe accusamus nostrum est est. Fugit voluptatum
                omnis quidem voluptatem.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
