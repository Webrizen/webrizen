"use client";
import React from 'react';
import Image from 'next/image';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
    const { setTheme } = useTheme()
    return (
        <header className="p-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="h-8 w-auto flex gap-2 justify-start items-center p-1 rounded-md hover:bg-[rgba(225,225,225,0.05)]">
                    <Image src="/Webrizen.png" alt="Webrizen Logo" width={500} height={500} className="h-full w-auto" />
                    <span>Webrizen</span>
                </Link>
                <div className="w-full flex justify-end items-center gap-2">
                    <Button asChild className="bg-gradient-to-r from-[rgb(99,18,240)] to-[rgb(35,35,201)] !text-white rounded hover:backdrop-blur-lg">
                        <a href="https://cal.com/webrizen">Schedule a Call</a>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
