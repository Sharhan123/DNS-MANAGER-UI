import React from 'react'

function LeftBar() {
  return (
    <aside id="sidebar"
    class="bg-custom w-[60px] lg:w-[240px] h-full whitespace-nowrap fixed shadow  transition-all duration-500 ease-in-out">
    <div class="flex flex-col justify-between h-full">
        <ul class="flex flex-col gap-1 mt-2">
            <li class="text-white hover:bg-gray-100 hover:text-gray-900">
                <a class="w-full flex items-center py-3" href="/">
                    <i class="fa-solid fa-house text-center px-5"></i>
                    <span class="whitespace-nowrap pl-1">Dashboard</span>
                </a>
            </li>

            <li class="text-white hover:bg-gray-100 hover:text-gray-900">
                <a class="w-full flex items-center py-3" href="#">
                    <i class="fa-solid fa-chart-line text-center px-5"></i>
                    <span class="whitespace-nowrap pl-1">Reports</span>
                </a>
            </li>

            <li class="text-white hover:bg-gray-100 hover:text-gray-900">
                <a class="w-full flex items-center py-3" href="#">
                    <i class="fa-solid fa-users text-center px-5"></i>
                    <span class="whitespace-nowrap pl-1">Users</span>
                </a>
            </li>
        </ul>
        <ul class="flex flex-col gap-1 mb-2">
            <li class="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <a class="w-full flex items-center py-3" href="#">
                    <i class="fa-solid fa-right-from-bracket text-center px-5"></i>
                    <span class="pl-1">Logout</span>
                </a>
            </li>
        </ul>

    </div>
</aside>
  )
}

export default LeftBar
