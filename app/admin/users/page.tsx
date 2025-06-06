"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Users,
  UserCheck,
  UserX,
  Crown,
  MoreHorizontal,
  Edit,
  Ban,
  Mail,
  Eye,
  Download,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function UserManagementPage() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  const users = [
    {
      id: 1,
      name: "Sarah Martinez",
      email: "sarah@example.com",
      role: "Creator",
      status: "Active",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      followers: "125K",
      videos: 24,
      earnings: "$3,240",
      verified: true,
    },
    {
      id: 2,
      name: "TechNova Inc",
      email: "campaigns@technova.com",
      role: "Vendor",
      status: "Active",
      joinDate: "2024-02-20",
      lastActive: "1 day ago",
      followers: "N/A",
      videos: 0,
      earnings: "$0",
      verified: true,
    },
    {
      id: 3,
      name: "Alex Chen",
      email: "alex.chen@email.com",
      role: "Creator",
      status: "Suspended",
      joinDate: "2024-03-10",
      lastActive: "1 week ago",
      followers: "89K",
      videos: 18,
      earnings: "$2,890",
      verified: false,
    },
    {
      id: 4,
      name: "Maya Patel",
      email: "maya.patel@gmail.com",
      role: "Creator",
      status: "Active",
      joinDate: "2024-01-05",
      lastActive: "30 minutes ago",
      followers: "156K",
      videos: 31,
      earnings: "$4,120",
      verified: true,
    },
    {
      id: 5,
      name: "EcoWear Brand",
      email: "marketing@ecowear.com",
      role: "Vendor",
      status: "Pending",
      joinDate: "2024-12-01",
      lastActive: "3 hours ago",
      followers: "N/A",
      videos: 0,
      earnings: "$0",
      verified: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-600"
      case "Suspended":
        return "bg-red-100 text-red-600"
      case "Pending":
        return "bg-yellow-100 text-yellow-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Creator":
        return "bg-blue-100 text-blue-600"
      case "Vendor":
        return "bg-purple-100 text-purple-600"
      case "Admin":
        return "bg-red-100 text-red-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const creators = users.filter((u) => u.role === "Creator")
  const vendors = users.filter((u) => u.role === "Vendor")
  const activeUsers = users.filter((u) => u.status === "Active")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">User Management</h1>
          <p className="text-gray-600">Manage creators, vendors, and platform users</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Users
          </Button>
          <Button className="bg-red-500 hover:bg-red-600">
            <Users className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-gray-600">+12 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeUsers.length}</div>
            <p className="text-xs text-gray-600">85% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Creators</CardTitle>
            <Crown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{creators.length}</div>
            <p className="text-xs text-gray-600">Content creators</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendors</CardTitle>
            <UserX className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vendors.length}</div>
            <p className="text-xs text-gray-600">Brand partners</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search users by name, email, or ID..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="creator">Creator</SelectItem>
                <SelectItem value="vendor">Vendor</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* User Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Users ({users.length})</TabsTrigger>
          <TabsTrigger value="creators">Creators ({creators.length})</TabsTrigger>
          <TabsTrigger value="vendors">Vendors ({vendors.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Platform Users</CardTitle>
                  <CardDescription>Complete list of registered users</CardDescription>
                </div>
                {selectedUsers.length > 0 && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Bulk Actions ({selectedUsers.length})
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={selectedUsers.includes(user.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedUsers([...selectedUsers, user.id])
                        } else {
                          setSelectedUsers(selectedUsers.filter((id) => id !== user.id))
                        }
                      }}
                    />
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-500 font-semibold">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{user.name}</h3>
                        {user.verified && <Crown className="w-4 h-4 text-yellow-500" />}
                      </div>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-xs text-gray-500">
                        Joined {user.joinDate} • Last active {user.lastActive}
                      </p>
                    </div>
                    <div className="text-center">
                      <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                      <p className="text-sm text-gray-600 mt-1">
                        {user.role === "Creator" ? `${user.followers} followers` : "Brand account"}
                      </p>
                    </div>
                    <div className="text-center">
                      <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                      <p className="text-sm text-gray-600 mt-1">
                        {user.role === "Creator" ? `${user.videos} videos` : "Campaign manager"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{user.earnings}</p>
                      <p className="text-sm text-gray-600">Total earnings</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="w-4 h-4 mr-2" />
                          Send Message
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Ban className="w-4 h-4 mr-2" />
                          Suspend User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="creators">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Crown className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Creator-specific management tools will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendors">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Vendor-specific management tools will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <UserCheck className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Users pending approval will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
