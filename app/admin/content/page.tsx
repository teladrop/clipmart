"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Video,
  Flag,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Play,
  MoreHorizontal,
  AlertTriangle,
  Shield,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function ContentModerationPage() {
  const [selectedContent, setSelectedContent] = useState<number[]>([])

  const contentItems = [
    {
      id: 1,
      title: "10 Minute Morning Workout Routine",
      creator: "Sarah Martinez",
      type: "Video",
      status: "Approved",
      uploadDate: "2024-12-05",
      views: 15600,
      reports: 0,
      category: "Fitness",
      duration: "10:24",
      flagReason: null,
    },
    {
      id: 2,
      title: "Tech Review: Latest Smartphone",
      creator: "Alex Chen",
      type: "Video",
      status: "Flagged",
      uploadDate: "2024-12-04",
      views: 8900,
      reports: 3,
      category: "Technology",
      duration: "15:32",
      flagReason: "Misleading claims",
    },
    {
      id: 3,
      title: "Healthy Breakfast Ideas",
      creator: "Maya Patel",
      type: "Video",
      status: "Pending",
      uploadDate: "2024-12-06",
      views: 0,
      reports: 0,
      category: "Food",
      duration: "8:15",
      flagReason: null,
    },
    {
      id: 4,
      title: "Gaming Setup Tour 2024",
      creator: "David Kim",
      type: "Video",
      status: "Rejected",
      uploadDate: "2024-12-03",
      views: 2400,
      reports: 1,
      category: "Gaming",
      duration: "12:45",
      flagReason: "Copyright violation",
    },
    {
      id: 5,
      title: "Fashion Haul: Winter Collection",
      creator: "Emma Wilson",
      type: "Video",
      status: "Approved",
      uploadDate: "2024-12-02",
      views: 22100,
      reports: 0,
      category: "Fashion",
      duration: "18:20",
      flagReason: null,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-600"
      case "Flagged":
        return "bg-red-100 text-red-600"
      case "Pending":
        return "bg-yellow-100 text-yellow-600"
      case "Rejected":
        return "bg-gray-100 text-gray-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const flaggedContent = contentItems.filter((item) => item.status === "Flagged")
  const pendingContent = contentItems.filter((item) => item.status === "Pending")
  const approvedContent = contentItems.filter((item) => item.status === "Approved")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Content Moderation</h1>
          <p className="text-gray-600">Review and moderate platform content</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Shield className="w-4 h-4 mr-2" />
            Auto-Moderation Settings
          </Button>
          <Button className="bg-red-500 hover:bg-red-600">
            <Flag className="w-4 h-4 mr-2" />
            Review Queue
          </Button>
        </div>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Content</CardTitle>
            <Video className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contentItems.length}</div>
            <p className="text-xs text-gray-600">Videos uploaded</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingContent.length}</div>
            <p className="text-xs text-gray-600">Awaiting moderation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flagged Content</CardTitle>
            <Flag className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{flaggedContent.length}</div>
            <p className="text-xs text-gray-600">Requires attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-gray-600">Content approved</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search content by title, creator, or ID..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Content ({contentItems.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingContent.length})</TabsTrigger>
          <TabsTrigger value="flagged">Flagged ({flaggedContent.length})</TabsTrigger>
          <TabsTrigger value="approved">Approved ({approvedContent.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Platform Content</CardTitle>
                  <CardDescription>Complete list of uploaded content</CardDescription>
                </div>
                {selectedContent.length > 0 && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Bulk Actions ({selectedContent.length})
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={selectedContent.includes(item.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedContent([...selectedContent, item.id])
                        } else {
                          setSelectedContent(selectedContent.filter((id) => id !== item.id))
                        }
                      }}
                    />
                    <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        {item.reports > 0 && <AlertTriangle className="w-4 h-4 text-red-500" />}
                      </div>
                      <p className="text-sm text-gray-600">by {item.creator}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                        <span>Uploaded {item.uploadDate}</span>
                        <span>{item.duration}</span>
                        <span>{item.category}</span>
                        {item.flagReason && <span className="text-red-500">• {item.flagReason}</span>}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">{item.views.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">views</p>
                    </div>
                    <div className="text-center">
                      <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                      {item.reports > 0 && <p className="text-xs text-red-500 mt-1">{item.reports} reports</p>}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Review
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Flag className="w-4 h-4 mr-2" />
                            Flag for Review
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Pending content reviews will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flagged">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Flag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Flagged content requiring attention will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approved">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Approved content will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
