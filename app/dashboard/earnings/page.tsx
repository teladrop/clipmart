import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Eye, Calendar, Download, CreditCard, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EarningsPage() {
  const earnings = [
    {
      id: 1,
      campaign: "Fitness App Launch",
      brand: "FitLife Pro",
      views: 12500,
      payPerView: 0.05,
      earned: 625,
      date: "Dec 1, 2024",
      status: "Paid",
    },
    {
      id: 2,
      campaign: "Sustainable Fashion",
      brand: "EcoWear",
      views: 8200,
      payPerView: 0.08,
      earned: 656,
      date: "Nov 28, 2024",
      status: "Pending",
    },
    {
      id: 3,
      campaign: "Tech Gadget Review",
      brand: "TechNova",
      views: 15600,
      payPerView: 0.12,
      earned: 1872,
      date: "Nov 25, 2024",
      status: "Paid",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Earnings</h1>
        <p className="text-gray-600">Track your revenue and manage payouts</p>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            <DollarSign className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,153</div>
            <p className="text-xs text-gray-600">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,281</div>
            <p className="text-xs text-gray-600">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$656</div>
            <p className="text-xs text-gray-600">2 campaigns pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Per View</CardTitle>
            <Eye className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0.087</div>
            <p className="text-xs text-gray-600">Across all campaigns</p>
          </CardContent>
        </Card>
      </div>

      {/* Payout Section */}
      <Card>
        <CardHeader>
          <CardTitle>Payout Information</CardTitle>
          <CardDescription>Manage your payout methods and withdraw earnings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <p className="text-lg font-semibold">Available for withdrawal</p>
              <p className="text-3xl font-bold text-orange-500">$2,497</p>
              <p className="text-sm text-gray-600">Minimum withdrawal: $50</p>
            </div>
            <div className="space-y-2">
              <Button className="bg-orange-500 hover:bg-orange-600 w-full md:w-auto">
                <CreditCard className="w-4 h-4 mr-2" />
                Withdraw Funds
              </Button>
              <Button variant="outline" className="w-full md:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Download Statement
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Earnings History */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Earnings</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings History</CardTitle>
              <CardDescription>Your complete earnings breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {earnings.map((earning) => (
                  <div key={earning.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{earning.campaign}</h3>
                      <p className="text-sm text-gray-600">{earning.brand}</p>
                      <p className="text-sm text-gray-500">{earning.date}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">{earning.views.toLocaleString()} views</p>
                      <p className="text-sm text-gray-600">${earning.payPerView} per view</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-orange-500">${earning.earned}</p>
                      <Badge
                        className={
                          earning.status === "Paid" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                        }
                      >
                        {earning.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paid">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <DollarSign className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Paid earnings will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Pending earnings will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
