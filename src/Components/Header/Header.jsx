import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Slices/AuthSlice';
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

import { useDispatch, useSelector } from 'react-redux';
import logo2 from "../../assets/logo2.png"
import { loadingTrue } from '../Slices/LoadingSlice';
import { Bell, Search, User, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import jury from "../../assets/jury5.webp"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { Input } from "../ui/input"

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.authentication.user);
    const role = useSelector(state => state.authentication.role);

    const logoutFunc = () => {
        dispatch(loadingTrue());
        dispatch(logout());
        navigate('/login');
    }

    return (
        <div className="flex items-center justify-between px-16 py-2 bg-white shadow-sm">
            <Link to='/Home' className='font-bold'>
                <img src={logo2} className='w-[100px]' alt="Logo"/>
            </Link>
            <div className="flex items-center space-x-4">
                <div className="relative hidden md:block">
                    <CiSearch
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"/>
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="pl-10 pr-4 w-64"
                    />
                </div>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5"/>
                    <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full"/>
                    <span className="sr-only">Notifications</span>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={jury} alt={`${user?.firstName} ${user?.lastName}`}/>
                                <AvatarFallback>{user?.firstName?.[0]}{user?.lastName?.[0]}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium">{user?.firstName} {user?.lastName}</p>
                                <p className="text-xs text-muted-foreground">
                                    {role === 'director' ? 'Directeur Pédagogique' : 'Assistant'}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            <LuUser className="mr-2 h-4 w-4"/>
                            <span>View Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={logoutFunc} className="text-destructive">
                            <LogOut className="mr-2 h-4 w-4"/>
                            <span>Sign out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}

export default Header;