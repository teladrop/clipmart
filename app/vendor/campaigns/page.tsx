import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Eye,
  Users,
  DollarSign,
  Calendar,
  MoreHorizontal,
  Edit,
  Pause,
  Play,
  Trash2,
  Plus,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function MyCampaignsPage() {
  const campaigns = [
    {
      id: 1,
      title: "Fitness App Launch Campaign",
      status: "Active",
      views: 45200,
      spend: 2260,
      budget: 5000,
      creators: 12,
      applicants: 45,
      deadline: "Dec 15, 2024",
      payPerView: 0.05,
      platforms: ["YouTube", "TikTok"],
      category: "Fitness",
    },
    {
      id: 2,
      title: "Holiday Sale Promotion",
      status: "Pending",
      views: 0,
      spend: 0,
      budget: 3000,
      creators: 0,
      applicants: 23,
      deadline: "Dec 20, 2024",
      payPerView: 0.08,
      platforms: ["Instagram", "TikTok"],
      category: "Fashion",
    },
    {
      id: 3,
      title: "Product Review Campaign",
      status: "Completed",
      views: 128500,
      spend: 15420,
      budget: 15000,
      creators: 25,
      applicants: 89,
      deadline: "Nov 30, 2024",
      payPerView: 0.12,
      platforms: ["YouTube"],
      category: "Technology",
    },
    {
      id: 4,
      title: "Brand Awareness Drive",
      status: "Paused",
      views: 8900,
      spend: 445,
      budget: 2000,
      creators: 5,
      applicants: 15,
      deadline: "Jan 15, 2025",
      payPerView: 0.05,
      platforms: ["Instagram"],
      category: "Lifestyle",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-600"
      case "Pending":
        return "bg-yellow-100 text-yellow-600"
      case "Completed":
        return "bg-blue-100 text-blue-600"
      case "Paused":
        return "bg-gray-100 text-gray-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const activeCampaigns = campaigns.filter((c) => c.status === "Active")
  const pendingCampaigns = campaigns.filter((c) => c.status === "Pending")
  const completedCampaigns = campaigns.filter((c) => c.status === "Completed")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">My Campaigns</h1>
          <p className="text-gray-600">Manage and track all your campaigns</p>
        </div>
        <Button asChild className="bg-orange-500 hover:bg-orange-600">
          <Link href="/vendor/campaigns/create">
            <Plus className="w-4 h-4 mr-2" />
            Create Campaign
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search campaigns..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-2xl font-bold">{activeCampaigns.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold">182.6K</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Total Spend</p>
                <p className="text-2xl font-bold">$18.1K</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Creators</p>
                <p className="text-2xl font-bold">42</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Campaigns ({campaigns.length})</TabsTrigger>
          <TabsTrigger value="active">Active ({activeCampaigns.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingCampaigns.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedCampaigns.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold">{campaign.title}</h3>
                      <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{campaign.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{campaign.creators} creators</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{campaign.deadline}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>${campaign.payPerView} per view</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {campaign.platforms.map((platform) => (
                        <Badge key={platform} variant="outline">
                          {platform}
                        </Badge>
                      ))}
                      <Badge variant="outline">{campaign.category}</Badge>
                    </div>
                  </div>
                  <div className="lg:text-right space-y-2">
                    <div className="flex lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-1">
                      <div>
                        <p className="text-2xl font-bold text-orange-500">${campaign.spend.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">of ${campaign.budget.toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{campaign.applicants} applicants</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
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
                            Edit Campaign
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pause className="w-4 h-4 mr-2" />
                            Pause Campaign
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Campaign
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Play className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Active campaigns will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Pending campaigns will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Eye className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Completed campaigns will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
