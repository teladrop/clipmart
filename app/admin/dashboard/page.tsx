import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Video,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Flag,
  Crown,
} from "lucide-react"

export default function AdminDashboardPage() {
  const recentActivity = [
    {
      type: "user",
      action: "New creator registered",
      user: "Sarah Martinez",
      time: "2 minutes ago",
      status: "success",
    },
    {
      type: "campaign",
      action: "Campaign approved",
      user: "TechNova - Gadget Review",
      time: "15 minutes ago",
      status: "success",
    },
    {
      type: "report",
      action: "Content flagged for review",
      user: "Video ID: VID-12345",
      time: "1 hour ago",
      status: "warning",
    },
    {
      type: "payment",
      action: "Payment processed",
      user: "$2,450 to creators",
      time: "2 hours ago",
      status: "success",
    },
    {
      type: "user",
      action: "Account suspended",
      user: "Spam Account #4521",
      time: "3 hours ago",
      status: "error",
    },
  ]

  const systemAlerts = [
    {
      type: "warning",
      message: "High server load detected on video processing",
      time: "5 minutes ago",
    },
    {
      type: "info",
      message: "Scheduled maintenance in 2 hours",
      time: "1 hour ago",
    },
    {
      type: "error",
      message: "Payment gateway timeout reported",
      time: "3 hours ago",
    },
  ]

  const topCreators = [
    {
      name: "Sarah Martinez",
      category: "Fitness",
      followers: "125K",
      earnings: "$3,240",
      videos: 24,
    },
    {
      name: "Alex Chen",
      category: "Tech",
      followers: "89K",
      earnings: "$2,890",
      videos: 18,
    },
    {
      name: "Maya Patel",
      category: "Lifestyle",
      followers: "156K",
      earnings: "$4,120",
      videos: 31,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black flex items-center space-x-2">
            <Crown className="w-8 h-8 text-red-500" />
            <span>Admin Dashboard</span>
          </h1>
          <p className="text-gray-600">Platform overview and system management</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Generate Report</Button>
          <Button className="bg-red-500 hover:bg-red-600">System Health</Button>
        </div>
      </div>

      {/* Key Platform Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.2% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Videos</CardTitle>
            <Video className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <ShoppingCart className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="w-3 h-3 mr-1" />
              -3.1% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue (30d)</CardTitle>
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
      </div>

      {/* System Health & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Recent system notifications and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      alert.type === "error" ? "bg-red-100" : alert.type === "warning" ? "bg-yellow-100" : "bg-blue-100"
                    }`}
                  >
                    {alert.type === "error" ? (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    ) : alert.type === "warning" ? (
                      <Clock className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{alert.message}</p>
                    <p className="text-sm text-gray-500">{alert.time}</p>
                  </div>
                  <Badge
                    className={
                      alert.type === "error"
                        ? "bg-red-100 text-red-600"
                        : alert.type === "warning"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                    }
                  >
                    {alert.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Platform health indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Server Uptime</span>
              <span className="font-semibold text-green-600">99.9%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Pending Reviews</span>
              <span className="font-semibold">23</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Active Support Tickets</span>
              <span className="font-semibold">7</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Storage Used</span>
              <span className="font-semibold">2.4TB / 5TB</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">API Calls (24h)</span>
              <span className="font-semibold">1.2M</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest platform activities and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.status === "success"
                        ? "bg-green-100"
                        : activity.status === "warning"
                          ? "bg-yellow-100"
                          : "bg-red-100"
                    }`}
                  >
                    {activity.type === "user" ? (
                      <Users className="w-4 h-4" />
                    ) : activity.type === "campaign" ? (
                      <ShoppingCart className="w-4 h-4" />
                    ) : activity.type === "report" ? (
                      <Flag className="w-4 h-4" />
                    ) : (
                      <DollarSign className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.user}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Creators */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Creators</CardTitle>
            <CardDescription>Highest earning creators this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCreators.map((creator, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-semibold text-sm">
                      {creator.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{creator.name}</h3>
                    <p className="text-sm text-gray-600">{creator.category}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-semibold">{creator.earnings}</p>
                    <p className="text-gray-600">{creator.followers} followers</p>
                    <p className="text-gray-500">{creator.videos} videos</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold">2.4M</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Flag className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">Pending Reports</p>
                <p className="text-2xl font-bold">23</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">Approved Content</p>
                <p className="text-2xl font-bold">98.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold">2.3h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
