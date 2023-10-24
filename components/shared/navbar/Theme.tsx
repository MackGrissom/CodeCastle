"use client";

import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";

const Theme = () => {
    const { mode, setMode } = useTheme();
    return (
        <Menubar className="relative border-none bg-transparent shadow-none">
        <MenubarMenu>
        <MenubarTrigger>
        {mode === "light" ? (
            <Image
            src="/assets/icons/sun.svg"
            width={20}
            height={20}
            alt="sun"
            className="active-theme"
            />
            ) : (
                <Image
                src="/assets/icons/moon.svg"
                height={20}
                width={20}
                alt="moon"
                className="active-theme"
                />
                )}
                </MenubarTrigger>
                <MenubarContent>
                <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
                </MenubarContent>
                </MenubarMenu>
                </Menubar>
                );
            };
            
            export default Theme;
            