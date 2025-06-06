"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Star,
  MapPin,
  Calendar,
  TrendingUp,
  MoreHorizontal,
  UserPlus,
  Mail,
  ExternalLink,
  Play,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react"
import { useState } from "react"

export default function CreatorNetworkPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const creators = [
    {
      id: 1,
      name: "Sarah Martinez",
      username: "@sarahfit",
      avatar: "SM",
      category: "Fitness & Health",
      location: "Los Angeles, CA",
      followers: 125000,
      engagement: 4.8,
      avgViews: 15600,
      rating: 4.9,
      completedCampaigns: 23,
      responseTime: "2 hours",
      platforms: ["YouTube", "Instagram", "TikTok"],
      bio: "Certified personal trainer helping people achieve their fitness goals through fun, accessible workouts.",
      recentWork: ["Nike Campaign", "Protein Plus", "FitApp Launch"],
      priceRange: "$500-$2000",
      verified: true,
      topPerformer: true,
    },
    {
      id: 2,
      name: "Alex Chen",
      username: "@techwithalex",
      avatar: "AC",
      category: "Technology",
      location: "San Francisco, CA",
      followers: 89000,
      engagement: 5.2,
      avgViews: 12400,
      rating: 4.7,
      completedCampaigns: 18,
      responseTime: "4 hours",
      platforms: ["YouTube", "Twitter", "LinkedIn"],
      bio: "Tech reviewer and software engineer sharing the latest in consumer technology and gadgets.",
      recentWork: ["Samsung Galaxy", "MacBook Review", "AI Startup"],
      priceRange: "$800-$3000",
      verified: true,
      topPerformer: false,
    },
    {
      id: 3,
      name: "Maya Patel",
      username: "@mayastyle",
      avatar: "MP",
      category: "Fashion & Lifestyle",
      location: "New York, NY",
      followers: 67000,
      engagement: 6.1,
      avgViews: 9800,
      rating: 4.8,
      completedCampaigns: 31,
      responseTime: "1 hour",
      platforms: ["Instagram", "TikTok", "Pinterest"],
      bio: "Fashion enthusiast and lifestyle blogger sharing affordable style tips and sustainable fashion.",
      recentWork: ["Zara Collection", "Eco Fashion", "Style Guide"],
      priceRange: "$300-$1500",
      verified: true,
      topPerformer: true,
    },
    {
      id: 4,
      name: "David Kim",
      username: "@gamingwithdave",
      avatar: "DK",
      category: "Gaming",
      location: "Austin, TX",
      followers: 156000,
      engagement: 4.5,
      avgViews: 22000,
      rating: 4.6,
      completedCampaigns: 15,
      responseTime: "6 hours",
      platforms: ["YouTube", "Twitch", "TikTok"],
      bio: "Professional gamer and content creator covering the latest games, reviews, and gaming hardware.",
      recentWork: ["PlayStation 5", "Gaming Chair", "New RPG"],
      priceRange: "$1000-$4000",
      verified: true,
      topPerformer: false,
    },
    {
      id: 5,
      name: "Emma Johnson",
      username: "@emmacooks",
      avatar: "EJ",
      category: "Food & Cooking",
      location: "Chicago, IL",
      followers: 43000,
      engagement: 7.2,
      avgViews: 8500,
      rating: 4.9,
      completedCampaigns: 27,
      responseTime: "3 hours",
      platforms: ["YouTube", "Instagram", "TikTok"],
      bio: "Home chef sharing easy, delicious recipes for busy families and food lovers.",
      recentWork: ["Kitchen Tools", "Meal Kit", "Cookbook"],
      priceRange: "$200-$1000",
      verified: false,
      topPerformer: true,
    },
    {
      id: 6,
      name: "Marcus Thompson",
      username: "@marcustravel",
      avatar: "MT",
      category: "Travel",
      location: "Miami, FL",
      followers: 78000,
      engagement: 5.8,
      avgViews: 11200,
      rating: 4.7,
      completedCampaigns: 19,
      responseTime: "5 hours",
      platforms: ["YouTube", "Instagram"],
      bio: "Travel photographer and adventure seeker documenting amazing destinations around the world.",
      recentWork: ["Hotel Chain", "Luggage Brand", "Travel App"],
      priceRange: "$600-$2500",
      verified: true,
      topPerformer: false,
    },
  ]

  const categories = [
    "All",
    "Technology",
    "Fashion & Lifestyle",
    "Fitness & Health",
    "Gaming",
    "Food & Cooking",
    "Travel",
    "Education",
    "Entertainment",
  ]
  const platforms = ["All", "YouTube", "Instagram", "TikTok", "Twitter", "LinkedIn", "Twitch", "Pinterest"]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "YouTube":
        return <Youtube className="w-4 h-4" />
      case "Instagram":
        return <Instagram className="w-4 h-4" />
      case "Twitter":
        return <Twitter className="w-4 h-4" />
      default:
        return <Play className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Creator Network</h1>
          <p className="text-gray-600">Discover and connect with top creators for your campaigns</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <UserPlus className="w-4 h-4 mr-2" />
            Invite Creator
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search creators by name, category, or location..." className="pl-10" />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((platform) => (
                    <SelectItem key={platform} value={platform.toLowerCase()}>
                      {platform}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="followers">Followers</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Creator Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Total Creators</p>
                <p className="text-2xl font-bold">2,847</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Top Performers</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Avg. Engagement</p>
                <p className="text-2xl font-bold">5.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Total Reach</p>
                <p className="text-2xl font-bold">12.4M</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Creator Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Creators ({creators.length})</TabsTrigger>
          <TabsTrigger value="top">Top Performers (3)</TabsTrigger>
          <TabsTrigger value="verified">Verified (5)</TabsTrigger>
          <TabsTrigger value="favorites">My Favorites (0)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {creators.map((creator) => (
              <Card key={creator.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-500 font-semibold">{creator.avatar}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{creator.name}</h3>
                          {creator.verified && <Badge className="bg-blue-100 text-blue-600 text-xs">Verified</Badge>}
                          {creator.topPerformer && <Badge className="bg-yellow-100 text-yellow-600 text-xs">Top</Badge>}
                        </div>
                        <p className="text-sm text-gray-600">{creator.username}</p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Heart className="w-4 h-4 mr-2" />
                          Add to Favorites
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="w-4 h-4 mr-2" />
                          Send Message
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {creator.category}
                    </Badge>
                    <p className="text-sm text-gray-600 line-clamp-2">{creator.bio}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{creator.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{creator.responseTime}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold">{(creator.followers / 1000).toFixed(0)}K</p>
                      <p className="text-xs text-gray-600">Followers</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{creator.engagement}%</p>
                      <p className="text-xs text-gray-600">Engagement</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-lg font-bold">{creator.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Platforms:</span>
                      <div className="flex space-x-1">
                        {creator.platforms.slice(0, 3).map((platform) => (
                          <div
                            key={platform}
                            className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                            title={platform}
                          >
                            {getPlatformIcon(platform)}
                          </div>
                        ))}
                        {creator.platforms.length > 3 && (
                          <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs">
                            +{creator.platforms.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Campaigns:</span>
                      <span className="font-semibold">{creator.completedCampaigns}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Price Range:</span>
                      <span className="font-semibold text-orange-600">{creator.priceRange}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Recent Work:</p>
                    <div className="flex flex-wrap gap-1">
                      {creator.recentWork.map((work, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {work}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1" size="sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Message
                    </Button>
                    <Button className="bg-orange-500 hover:bg-orange-600 flex-1" size="sm">
                      <UserPlus className="w-4 h-4 mr-1" />
                      Invite
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="top">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Top performing creators will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verified">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Verified creators will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your favorite creators will appear here</p>
                <p className="text-sm text-gray-400 mt-2">Add creators to favorites to see them here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
