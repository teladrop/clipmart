"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Video,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Eye,
  Download,
  BarChart3,
  Globe,
  Clock,
  Target,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminAnalyticsPage() {
  const platformMetrics = [
    {
      platform: "YouTube",
      users: 8420,
      videos: 15600,
      views: "2.4M",
      revenue: "$45,200",
      growth: "+12.5%",
      color: "bg-red-100 text-red-600",
    },
    {
      platform: "TikTok",
      users: 6890,
      videos: 22100,
      views: "3.8M",
      revenue: "$28,900",
      growth: "+18.2%",
      color: "bg-black text-white",
    },
    {
      platform: "Instagram",
      users: 5240,
      videos: 12800,
      views: "1.9M",
      revenue: "$31,400",
      growth: "+8.7%",
      color: "bg-pink-100 text-pink-600",
    },
  ]

  const topCategories = [
    { name: "Technology", percentage: 28, videos: 12600, creators: 2400 },
    { name: "Fitness", percentage: 22, videos: 9800, creators: 1890 },
    { name: "Fashion", percentage: 18, videos: 8100, creators: 1560 },
    { name: "Food", percentage: 15, videos: 6700, creators: 1200 },
    { name: "Gaming", percentage: 17, videos: 7600, creators: 1450 },
  ]

  const revenueData = [
    { month: "Jan", creators: 15200, vendors: 8900, platform: 2400 },
    { month: "Feb", creators: 18600, vendors: 12400, platform: 3100 },
    { month: "Mar", creators: 22100, vendors: 15800, platform: 3800 },
    { month: "Apr", creators: 25400, vendors: 18200, platform: 4200 },
    { month: "May", creators: 28900, vendors: 21600, platform: 4900 },
    { month: "Jun", creators: 32400, vendors: 24800, platform: 5600 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Platform Analytics</h1>
          <p className="text-gray-600">Comprehensive platform performance insights</p>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Platform Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$89,420</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15.3% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.1M</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +22.1% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20,550</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.7% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Created</CardTitle>
            <Video className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50,500</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="w-3 h-3 mr-1" />
              -2.3% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Platform Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Analytics</TabsTrigger>
          <TabsTrigger value="content">Content Analytics</TabsTrigger>
          <TabsTrigger value="users">User Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Platform Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Performance</CardTitle>
                <CardDescription>Performance metrics by social platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platformMetrics.map((platform, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{platform.platform}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${platform.color}`}>
                          {platform.growth}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Users</p>
                          <p className="font-semibold">{platform.users.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Videos</p>
                          <p className="font-semibold">{platform.videos.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Views</p>
                          <p className="font-semibold">{platform.views}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Revenue</p>
                          <p className="font-semibold">{platform.revenue}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Content Categories</CardTitle>
                <CardDescription>Most popular content categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{category.name}</span>
                        <span className="text-sm text-gray-600">{category.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: `${category.percentage}%` }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{category.videos.toLocaleString()} videos</span>
                        <span>{category.creators.toLocaleString()} creators</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Geographic Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>User distribution by region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Globe className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="font-semibold">North America</p>
                  <p className="text-2xl font-bold">45%</p>
                  <p className="text-sm text-gray-600">9,248 users</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Globe className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="font-semibold">Europe</p>
                  <p className="text-2xl font-bold">28%</p>
                  <p className="text-sm text-gray-600">5,754 users</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Globe className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="font-semibold">Asia Pacific</p>
                  <p className="text-2xl font-bold">22%</p>
                  <p className="text-sm text-gray-600">4,521 users</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Globe className="w-8 h-8 text-purple-500" />
                  </div>
                  <p className="font-semibold">Other</p>
                  <p className="text-2xl font-bold">5%</p>
                  <p className="text-sm text-gray-600">1,027 users</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Revenue distribution by user type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueData.slice(-1).map((data, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Creator Earnings</span>
                        <span className="text-xl font-bold text-green-600">${data.creators.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="font-medium">Vendor Spend</span>
                        <span className="text-xl font-bold text-purple-600">${data.vendors.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <span className="font-medium">Platform Revenue</span>
                        <span className="text-xl font-bold text-red-600">${data.platform.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Trends</CardTitle>
                <CardDescription>6-month revenue trend analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {revenueData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border-b">
                      <span className="font-medium">{data.month}</span>
                      <div className="flex space-x-4 text-sm">
                        <span className="text-green-600">${data.creators.toLocaleString()}</span>
                        <span className="text-purple-600">${data.vendors.toLocaleString()}</span>
                        <span className="text-red-600">${data.platform.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Metrics</CardTitle>
              <CardDescription>Key financial performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Target className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Avg Revenue Per User</p>
                  <p className="text-2xl font-bold">$4.35</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Platform Commission</p>
                  <p className="text-2xl font-bold">15%</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Monthly Growth</p>
                  <p className="text-2xl font-bold">+12.5%</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Avg Campaign Duration</p>
                  <p className="text-2xl font-bold">18 days</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Content analytics dashboard will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">User analytics dashboard will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
