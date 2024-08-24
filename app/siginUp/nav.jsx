import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserCircleIcon, LogOutIcon, SettingsIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="p-4 font-sans">
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white rounded-full shadow-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="flex items-center space-x-3 z-10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            CadaMap
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-4 z-10">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Contact Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100/50 rounded-full transition-colors duration-200">
                <UserCircleIcon className="h-5 w-5 mr-2" />
                Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2 bg-white rounded-lg shadow-xl" align="end">
              <DropdownMenuItem className="flex items-center hover:bg-gray-100 rounded-md transition-colors duration-150">
                <UserCircleIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center hover:bg-gray-100 rounded-md transition-colors duration-150">
                <SettingsIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center text-red-600 hover:bg-red-50 rounded-md transition-colors duration-150">
                <LogOutIcon className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="md:hidden z-10">
          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </Link>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100/50 rounded-full transition-colors duration-200 justify-start">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              Account
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}

