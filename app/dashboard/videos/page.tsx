"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Play,
  Eye,
  Download,
  Share2,
  MoreHorizontal,
  Edit,
  Trash2,
  Upload,
  Calendar,
  Clock,
  Languages,
  Scissors,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function MyVideosPage() {
  const [selectedVideos, setSelectedVideos] = useState<number[]>([])

  const videos = [
    {
      id: 1,
      title: "10 Minute Morning Workout Routine",
      thumbnail: "/placeholder.svg?height=120&width=160",
      duration: "10:24",
      views: 15600,
      uploadDate: "2024-12-05",
      status: "Published",
      type: "Original",
      platforms: ["YouTube", "TikTok"],
      earnings: 78.0,
      category: "Fitness",
    },
    {
      id: 2,
      title: "Healthy Breakfast Ideas - Quick & Easy",
      thumbnail: "/placeholder.svg?height=120&width=160",
      duration: "8:15",
      views: 12400,
      uploadDate: "2024-12-03",
      status: "Published",
      type: "Repurposed",
      platforms: ["Instagram", "YouTube Shorts"],
      earnings: 62.0,
      category: "Food",
    },
    {
      id: 3,
      title: "Tech Review: Latest Smartphone 2024",
      thumbnail: "/placeholder.svg?height=120&width=160",
      duration: "15:32",
      views: 8900,
      uploadDate: "2024-12-01",
      status: "Processing",
      type: "Translated",
      platforms: ["YouTube"],
      earnings: 0,
      category: "Technology",
    },
    {
      id: 4,
      title: "Fashion Haul: Winter Collection",
      thumbnail: "/placeholder.svg?height=120&width=160",
      duration: "18:20",
      views: 22100,
      uploadDate: "2024-11-28",
      status: "Published",
      type: "Original",
      platforms: ["Instagram", "TikTok", "YouTube"],
      earnings: 110.5,
      category: "Fashion",
    },
    {
      id: 5,
      title: "Gaming Setup Tour 2024",
      thumbnail: "/placeholder.svg?height=120&width=160",
      duration: "12:45",
      views: 5600,
      uploadDate: "2024-11-25",
      status: "Draft",
      type: "Repurposed",
      platforms: [],
      earnings: 0,
      category: "Gaming",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-600"
      case "Processing":
        return "bg-yellow-100 text-yellow-600"
      case "Draft":
        return "bg-gray-100 text-gray-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Repurposed":
        return <Scissors className="w-4 h-4" />
      case "Translated":
        return <Languages className="w-4 h-4" />
      default:
        return <Play className="w-4 h-4" />
    }
  }

  const publishedVideos = videos.filter((v) => v.status === "Published")
  const draftVideos = videos.filter((v) => v.status === "Draft")
  const processingVideos = videos.filter((v) => v.status === "Processing")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">My Videos</h1>
          <p className="text-gray-600">Manage your uploaded and generated content</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Upload className="w-4 h-4 mr-2" />
          Upload Video
        </Button>
      </div>

      {/* Video Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Videos</CardTitle>
            <Play className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{videos.length}</div>
            <p className="text-xs text-gray-600">{publishedVideos.length} published</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {videos.reduce((sum, video) => sum + video.views, 0).toLocaleString()}
            </div>
            <p className="text-xs text-gray-600">Across all videos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <Eye className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${videos.reduce((sum, video) => sum + video.earnings, 0).toFixed(2)}
            </div>
            <p className="text-xs text-gray-600">From all videos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Views</CardTitle>
            <Eye className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(videos.reduce((sum, video) => sum + video.views, 0) / videos.length).toLocaleString()}
            </div>
            <p className="text-xs text-gray-600">Per video</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search videos..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="original">Original</SelectItem>
                <SelectItem value="repurposed">Repurposed</SelectItem>
                <SelectItem value="translated">Translated</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Video Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Videos ({videos.length})</TabsTrigger>
          <TabsTrigger value="published">Published ({publishedVideos.length})</TabsTrigger>
          <TabsTrigger value="processing">Processing ({processingVideos.length})</TabsTrigger>
          <TabsTrigger value="drafts">Drafts ({draftVideos.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Videos</CardTitle>
                  <CardDescription>Your complete video library</CardDescription>
                </div>
                {selectedVideos.length > 0 && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Bulk Actions ({selectedVideos.length})
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-white text-gray-800">
                          {getTypeIcon(video.type)}
                          <span className="ml-1">{video.type}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{video.views.toLocaleString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{video.uploadDate}</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={getStatusColor(video.status)}>{video.status}</Badge>
                        <span className="text-sm font-semibold text-green-600">${video.earnings.toFixed(2)}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {video.platforms.map((platform) => (
                          <Badge key={platform} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Play className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Play className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Published videos will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processing">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Videos being processed will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Edit className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Draft videos will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
