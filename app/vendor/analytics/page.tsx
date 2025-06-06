"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Eye,
  DollarSign,
  Users,
  TrendingUp,
  TrendingDown,
  Download,
  Target,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function AnalyticsPage() {
  const campaignPerformance = [
    {
      name: "Fitness App Launch",
      views: 45200,
      spend: 2260,
      cpm: 50,
      engagement: 4.8,
      creators: 12,
      status: "Active",
      roi: 285,
      conversions: 1240,
      ctr: 3.2,
      startDate: "2024-01-15",
      endDate: "2024-02-15",
    },
    {
      name: "Product Review Campaign",
      views: 128500,
      spend: 15420,
      cpm: 120,
      engagement: 5.2,
      creators: 25,
      status: "Completed",
      roi: 340,
      conversions: 3850,
      ctr: 4.1,
      startDate: "2023-12-01",
      endDate: "2024-01-01",
    },
    {
      name: "Holiday Sale Promotion",
      views: 8900,
      spend: 712,
      cpm: 80,
      engagement: 3.9,
      creators: 8,
      status: "Active",
      roi: 195,
      conversions: 420,
      ctr: 2.8,
      startDate: "2024-01-20",
      endDate: "2024-02-20",
    },
  ]

  const topCreators = [
    {
      name: "Sarah Martinez",
      category: "Fitness",
      views: 15600,
      engagement: 4.8,
      cost: 780,
      avatar: "SM",
      campaigns: 3,
      avgRoi: 320,
      reliability: 98,
    },
    {
      name: "Alex Chen",
      category: "Tech",
      views: 12400,
      engagement: 5.2,
      cost: 1488,
      avatar: "AC",
      campaigns: 5,
      avgRoi: 285,
      reliability: 95,
    },
    {
      name: "Maya Patel",
      category: "Lifestyle",
      views: 9800,
      engagement: 6.1,
      cost: 490,
      avatar: "MP",
      campaigns: 2,
      avgRoi: 410,
      reliability: 100,
    },
    {
      name: "David Kim",
      category: "Gaming",
      views: 8200,
      engagement: 4.5,
      cost: 984,
      avatar: "DK",
      campaigns: 4,
      avgRoi: 265,
      reliability: 92,
    },
  ]

  const monthlyTrends = [
    { month: "Oct", views: 45000, spend: 3200, conversions: 890 },
    { month: "Nov", views: 62000, spend: 4800, conversions: 1240 },
    { month: "Dec", views: 89000, spend: 7200, conversions: 1850 },
    { month: "Jan", views: 125000, spend: 9800, conversions: 2650 },
    { month: "Feb", views: 182000, spend: 12400, conversions: 3420 },
  ]

  const competitorBenchmarks = [
    { metric: "Average CPM", ourValue: 83.5, industry: 95.2, performance: "better" },
    { metric: "Engagement Rate", ourValue: 4.9, industry: 3.8, performance: "better" },
    { metric: "Conversion Rate", ourValue: 2.8, industry: 2.1, performance: "better" },
    { metric: "Cost per Conversion", ourValue: 6.75, industry: 8.9, performance: "better" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights into your campaign performance and ROI</p>
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
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Enhanced Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">182.6K</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.5% from last month
            </div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
            <DollarSign className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,392</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.2% from last month
            </div>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. CPM</CardTitle>
            <Target className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$83.50</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="w-3 h-3 mr-1" />
              -3.1% from last month
            </div>
            <Progress value={45} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
            <Users className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.9%</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +0.8% from last month
            </div>
            <Progress value={82} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total ROI</CardTitle>
            <Activity className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">285%</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15.2% from last month
            </div>
            <Progress value={90} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="creators">Creators</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Performance Trends
                </CardTitle>
                <CardDescription>Monthly performance over the last 5 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyTrends.map((month, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 text-sm">
                      <div className="font-medium">{month.month}</div>
                      <div className="text-center">
                        <p className="text-gray-600">Views</p>
                        <p className="font-semibold">{month.views.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">Spend</p>
                        <p className="font-semibold">${month.spend.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">Conversions</p>
                        <p className="font-semibold">{month.conversions.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  Budget Allocation
                </CardTitle>
                <CardDescription>How your budget is distributed across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">YouTube</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-20 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">58% ($10,704)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">TikTok</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-10 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">27% ($5,024)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Instagram</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-5 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">15% ($2,664)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance Analysis</CardTitle>
              <CardDescription>Detailed breakdown of your campaign metrics with ROI insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((campaign, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold">{campaign.name}</h3>
                        <Badge
                          className={
                            campaign.status === "Active" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                          }
                        >
                          {campaign.status}
                        </Badge>
                        <Badge variant="outline">ROI: {campaign.roi}%</Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Views</p>
                        <p className="font-semibold">{campaign.views.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Spend</p>
                        <p className="font-semibold">${campaign.spend.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">CPM</p>
                        <p className="font-semibold">${campaign.cpm}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Engagement</p>
                        <p className="font-semibold">{campaign.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Creators</p>
                        <p className="font-semibold">{campaign.creators}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Conversions</p>
                        <p className="font-semibold">{campaign.conversions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">CTR</p>
                        <p className="font-semibold">{campaign.ctr}%</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Duration</p>
                        <p className="font-semibold">30 days</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="creators" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Creator Performance & Reliability</CardTitle>
              <CardDescription>Top performing creators with reliability scores and ROI metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCreators.map((creator, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-500 font-semibold">{creator.avatar}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{creator.name}</h3>
                        <p className="text-sm text-gray-600">{creator.category}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {creator.campaigns} campaigns
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {creator.reliability}% reliable
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-8 text-center">
                      <div>
                        <p className="text-sm text-gray-600">Views</p>
                        <p className="font-semibold">{creator.views.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Engagement</p>
                        <p className="font-semibold">{creator.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Avg ROI</p>
                        <p className="font-semibold">{creator.avgRoi}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Cost</p>
                        <p className="font-semibold">${creator.cost}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Age Demographics</CardTitle>
                <CardDescription>Age breakdown of your audience reach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">18-24</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-16 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">32%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">25-34</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-24 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">35-44</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-8 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">45+</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-4 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Top countries by audience reach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">United States</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-20 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">38%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Canada</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-12 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">22%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">United Kingdom</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-8 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Australia</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-6 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">12%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Other</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-5 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">13%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>YouTube</CardTitle>
                <CardDescription>Performance on YouTube</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Views</span>
                    <span className="font-semibold">89.2K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Spend</span>
                    <span className="font-semibold">$10,704</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">CPM</span>
                    <span className="font-semibold">$120</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Engagement</span>
                    <span className="font-semibold">5.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">ROI</span>
                    <span className="font-semibold text-green-600">295%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TikTok</CardTitle>
                <CardDescription>Performance on TikTok</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Views</span>
                    <span className="font-semibold">62.8K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Spend</span>
                    <span className="font-semibold">$5,024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">CPM</span>
                    <span className="font-semibold">$80</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Engagement</span>
                    <span className="font-semibold">6.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">ROI</span>
                    <span className="font-semibold text-green-600">340%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Instagram</CardTitle>
                <CardDescription>Performance on Instagram</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Views</span>
                    <span className="font-semibold">30.6K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Spend</span>
                    <span className="font-semibold">$2,664</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">CPM</span>
                    <span className="font-semibold">$87</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Engagement</span>
                    <span className="font-semibold">4.1%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">ROI</span>
                    <span className="font-semibold text-green-600">220%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="benchmarks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Industry Benchmarks</CardTitle>
              <CardDescription>Compare your performance against industry standards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {competitorBenchmarks.map((benchmark, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{benchmark.metric}</h3>
                      <Badge
                        className={
                          benchmark.performance === "better" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }
                      >
                        {benchmark.performance === "better" ? "Above Average" : "Below Average"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Your Performance</p>
                        <p className="text-lg font-semibold text-orange-500">
                          {typeof benchmark.ourValue === "number" && benchmark.ourValue % 1 !== 0
                            ? benchmark.ourValue.toFixed(2)
                            : benchmark.ourValue}
                          {benchmark.metric.includes("Rate") || benchmark.metric.includes("Engagement")
                            ? "%"
                            : benchmark.metric.includes("CPM") || benchmark.metric.includes("Cost")
                              ? ""
                              : ""}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Industry Average</p>
                        <p className="text-lg font-semibold text-gray-500">
                          {typeof benchmark.industry === "number" && benchmark.industry % 1 !== 0
                            ? benchmark.industry.toFixed(2)
                            : benchmark.industry}
                          {benchmark.metric.includes("Rate") || benchmark.metric.includes("Engagement")
                            ? "%"
                            : benchmark.metric.includes("CPM") || benchmark.metric.includes("Cost")
                              ? ""
                              : ""}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className={`h-2 rounded-full ${benchmark.performance === "better" ? "bg-green-500" : "bg-red-500"}`}
                          style={{
                            width: `${Math.min((benchmark.ourValue / benchmark.industry) * 50, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
