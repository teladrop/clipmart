import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinancePage() {
  const transactions = [
    {
      id: "TXN-001",
      type: "Creator Payout",
      amount: -15420,
      user: "Sarah Martinez",
      date: "2024-12-06",
      status: "Completed",
      method: "Bank Transfer",
    },
    {
      id: "TXN-002",
      type: "Vendor Payment",
      amount: 25000,
      user: "TechNova Inc",
      date: "2024-12-05",
      status: "Completed",
      method: "Credit Card",
    },
    {
      id: "TXN-003",
      type: "Platform Fee",
      amount: 3750,
      user: "Commission",
      date: "2024-12-05",
      status: "Completed",
      method: "Internal",
    },
    {
      id: "TXN-004",
      type: "Creator Payout",
      amount: -8900,
      user: "Alex Chen",
      date: "2024-12-04",
      status: "Pending",
      method: "PayPal",
    },
    {
      id: "TXN-005",
      type: "Refund",
      amount: -2400,
      user: "EcoWear Brand",
      date: "2024-12-03",
      status: "Processing",
      method: "Credit Card",
    },
  ]

  const payoutSchedule = [
    {
      creator: "Sarah Martinez",
      amount: 3240,
      dueDate: "2024-12-15",
      status: "Scheduled",
      method: "Bank Transfer",
    },
    {
      creator: "Maya Patel",
      amount: 4120,
      dueDate: "2024-12-15",
      status: "Scheduled",
      method: "PayPal",
    },
    {
      creator: "David Kim",
      amount: 2890,
      dueDate: "2024-12-20",
      status: "Pending Review",
      method: "Bank Transfer",
    },
    {
      creator: "Emma Wilson",
      amount: 1560,
      dueDate: "2024-12-20",
      status: "Scheduled",
      method: "PayPal",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Financial Overview</h1>
          <p className="text-gray-600">Platform financial management and reporting</p>
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

      {/* Financial Metrics */}
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
            <CardTitle className="text-sm font-medium">Creator Payouts</CardTitle>
            <Wallet className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$76,007</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.8% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Fees</CardTitle>
            <CreditCard className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$13,413</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +18.2% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payouts</CardTitle>
            <Clock className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$11,810</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="w-3 h-3 mr-1" />
              -5.2% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Tabs */}
      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transaction History</TabsTrigger>
          <TabsTrigger value="payouts">Creator Payouts</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
          <TabsTrigger value="reconciliation">Reconciliation</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>All platform financial transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.amount > 0 ? "bg-green-100" : "bg-red-100"
                        }`}
                      >
                        {transaction.amount > 0 ? (
                          <ArrowUpRight className="w-5 h-5 text-green-600" />
                        ) : (
                          <ArrowDownRight className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{transaction.type}</h3>
                        <p className="text-sm text-gray-600">{transaction.user}</p>
                        <p className="text-xs text-gray-500">
                          {transaction.id} • {transaction.date} • {transaction.method}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-bold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                      </p>
                      <Badge
                        className={
                          transaction.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : transaction.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payouts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Creator Payouts</CardTitle>
              <CardDescription>Scheduled payments to creators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payoutSchedule.map((payout, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-500 font-semibold text-sm">
                          {payout.creator
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{payout.creator}</h3>
                        <p className="text-sm text-gray-600">Due: {payout.dueDate}</p>
                        <p className="text-xs text-gray-500">{payout.method}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">${payout.amount.toLocaleString()}</p>
                      <Badge
                        className={
                          payout.status === "Scheduled" ? "bg-blue-100 text-blue-600" : "bg-yellow-100 text-yellow-600"
                        }
                      >
                        {payout.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold text-blue-600">Total Scheduled Payouts</span>
                </div>
                <p className="text-2xl font-bold text-blue-600 mt-2">
                  ${payoutSchedule.reduce((sum, payout) => sum + payout.amount, 0).toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Revenue sources and distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Campaign Fees</span>
                    <span className="text-xl font-bold text-green-600">$67,200</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Platform Commission</span>
                    <span className="text-xl font-bold text-blue-600">$13,413</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Premium Features</span>
                    <span className="text-xl font-bold text-purple-600">$5,890</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Other Revenue</span>
                    <span className="text-xl font-bold text-orange-600">$2,917</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>Revenue trends over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Revenue Growth</span>
                    <span className="font-semibold text-green-600">+15.3%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Avg. Transaction Value</span>
                    <span className="font-semibold">$1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Transaction Volume</span>
                    <span className="font-semibold">2,847</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Platform Margin</span>
                    <span className="font-semibold">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reconciliation" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Financial reconciliation tools will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
