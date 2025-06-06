import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Eye,
  DollarSign,
  Users,
  TrendingUp,
  Play,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function VendorDashboardPage() {
  const recentCampaigns = [
    {
      id: 1,
      title: "Fitness App Launch Campaign",
      status: "Active",
      views: 45200,
      spend: 2260,
      creators: 12,
      deadline: "Dec 15, 2024",
    },
    {
      id: 2,
      title: "Holiday Sale Promotion",
      status: "Pending",
      views: 0,
      spend: 0,
      creators: 0,
      deadline: "Dec 20, 2024",
    },
    {
      id: 3,
      title: "Product Review Campaign",
      status: "Completed",
      views: 128500,
      spend: 15420,
      creators: 25,
      deadline: "Nov 30, 2024",
    },
  ]

  const topCreators = [
    {
      name: "Sarah Martinez",
      category: "Fitness",
      views: 15600,
      engagement: "4.8%",
      avatar: "SM",
    },
    {
      name: "Alex Chen",
      category: "Tech",
      views: 12400,
      engagement: "5.2%",
      avatar: "AC",
    },
    {
      name: "Maya Patel",
      category: "Lifestyle",
      views: 9800,
      engagement: "6.1%",
      avatar: "MP",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Vendor Dashboard</h1>
          <p className="text-gray-600">Manage your campaigns and track performance</p>
        </div>
        <Button asChild className="bg-orange-500 hover:bg-orange-600">
          <Link href="/vendor/campaigns/create">
            <Plus className="w-4 h-4 mr-2" />
            Create Campaign
          </Link>
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">173.7K</div>
            <p className="text-xs text-gray-600">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
            <DollarSign className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$17,680</div>
            <p className="text-xs text-gray-600">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-600">2 pending approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Creators Reached</CardTitle>
            <Users className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">37</div>
            <p className="text-xs text-gray-600">Across all campaigns</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-orange-500" />
            </div>
            <CardTitle>Create New Campaign</CardTitle>
            <CardDescription>Launch a new campaign to reach creators</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
              <Link href="/vendor/campaigns/create">Get Started</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-orange-500" />
            </div>
            <CardTitle>View Analytics</CardTitle>
            <CardDescription>Deep dive into your campaign performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
              <Link href="/vendor/analytics">View Reports</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <CardTitle>Browse Creators</CardTitle>
            <CardDescription>Find and connect with top creators</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/vendor/creators">Explore Network</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Campaigns */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>Your latest campaign activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCampaigns.map((campaign) => (
                <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{campaign.title}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{campaign.views.toLocaleString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{campaign.creators}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{campaign.deadline}</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      className={
                        campaign.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : campaign.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-gray-100 text-gray-600"
                      }
                    >
                      {campaign.status}
                    </Badge>
                    <p className="text-sm font-semibold mt-1">${campaign.spend.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Creators */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Creators</CardTitle>
            <CardDescription>Creators driving the best results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCreators.map((creator, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-semibold text-sm">{creator.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{creator.name}</h3>
                    <p className="text-sm text-gray-600">{creator.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{creator.views.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{creator.engagement} engagement</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Status Overview</CardTitle>
          <CardDescription>Quick overview of all your campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-600">Active</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
              <Clock className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">Pending</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Play className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
              <AlertCircle className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-gray-600">Needs Review</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
