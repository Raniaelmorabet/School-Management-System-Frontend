import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { CalendarDays, GraduationCap, Users ,Activity, Calendar } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { BsClock } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";

const activityData = [
    { month: "Jan", examinations: 400, meetings: 240 },
    { month: "Feb", examinations: 300, meetings: 139 },
    { month: "Mar", examinations: 200, meetings: 980 },
    { month: "Apr", examinations: 278, meetings: 390 },
    { month: "May", examinations: 189, meetings: 480 },
    { month: "Jun", examinations: 239, meetings: 380 },
    { month: "Jul", examinations: 349, meetings: 430 },
]

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/*<Header />*/}
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <div className="hidden md:flex items-center space-x-2">
                        <CalendarDays className="h-4 w-4" />
                        <span className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString()}
            </span>
                    </div>
                </div>

                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="reports">Reports</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card className="bg-[#1e3a8a] text-white">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Jury Members</CardTitle>
                                    <Users className="h-4 w-4" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">50,000</div>
                                    <p className="text-xs text-white/70">+2.1% from last month</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-[#f59e0b] text-white">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Meetings</CardTitle>
                                    <CalendarDays className="h-4 w-4" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">80,000</div>
                                    <p className="text-xs text-white/70">+18.1% from last month</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-[#1e3a8a] text-white">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Active Examinations</CardTitle>
                                    <GraduationCap className="h-4 w-4" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">1,429</div>
                                    <p className="text-xs text-white/70">+4.3% from last week</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-[#f59e0b] text-white">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                                    <Activity className="h-4 w-4" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">98.3%</div>
                                    <p className="text-xs text-white/70">+2.4% from last month</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Activity Overview</CardTitle>
                                    <CardDescription>
                                        Examination and meeting statistics for the current year
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <ResponsiveContainer width="100%" height={350}>
                                        <LineChart data={activityData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis
                                                dataKey="month"
                                                tick={{ fontSize: 12 }}
                                                tickMargin={10}
                                            />
                                            <YAxis
                                                tick={{ fontSize: 12 }}
                                                tickMargin={10}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: 'white',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '4px'
                                                }}
                                            />
                                            <Legend
                                                verticalAlign="top"
                                                height={36}
                                            />
                                            <Line
                                                name="Examinations"
                                                type="monotone"
                                                dataKey="examinations"
                                                stroke="#1e3a8a"
                                                strokeWidth={2}
                                                dot={{ r: 4, className: 'custom-dot' }}
                                                activeDot={{ r: 6 }}
                                            />
                                            <Line
                                                name="Meetings"
                                                type="monotone"
                                                dataKey="meetings"
                                                stroke="#f59e0b"
                                                strokeWidth={2}
                                                dot={{ r: 4 , className: 'custom-dot2'}}
                                                activeDot={{ r: 6 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>

                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Upcoming Sessions</CardTitle>
                                    <CardDescription>You have 3 sessions scheduled for today</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-8">
                                        <div className="flex items-center">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                                                <BsClock className="h-5 w-5 text-[#1e3a8a]" />
                                            </div>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium">Mathematics Final Exam</p>
                                                <p className="text-sm text-muted-foreground">
                                                    09:00 AM - Room 401
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                                                <Calendar className="h-5 w-5 text-[#f59e0b]" />
                                            </div>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium">Jury Meeting</p>
                                                <p className="text-sm text-muted-foreground">
                                                    11:30 AM - Conference Room
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                                                <FiUserCheck className="h-5 w-5 text-[#1e3a8a]" />
                                            </div>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium">Physics Oral Defense</p>
                                                <p className="text-sm text-muted-foreground">
                                                    02:00 PM - Room 302
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}