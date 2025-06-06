import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, DollarSign, Calendar, Download, Plus, AlertCircle, CheckCircle, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BillingPage() {
  const transactions = [
    {
      id: "TXN-001",
      description: "Campaign funding - Fitness App Launch",
      amount: 5000,
      date: "Dec 1, 2024",
      status: "Completed",
      type: "Deposit",
    },
    {
      id: "TXN-002",
      description: "Campaign spend - Product Review",
      amount: -2260,
      date: "Nov 28, 2024",
      status: "Completed",
      type: "Spend",
    },
    {
      id: "TXN-003",
      description: "Campaign funding - Holiday Sale",
      amount: 3000,
      date: "Nov 25, 2024",
      status: "Completed",
      type: "Deposit",
    },
    {
      id: "TXN-004",
      description: "Campaign spend - Brand Awareness",
      amount: -445,
      date: "Nov 20, 2024",
      status: "Pending",
      type: "Spend",
    },
  ]

  const paymentMethods = [
    {
      id: 1,
      type: "Credit Card",
      last4: "4242",
      brand: "Visa",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "Bank Account",
      last4: "8901",
      brand: "Chase",
      expiry: null,
      isDefault: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Billing & Payments</h1>
        <p className="text-gray-600">Manage your account balance and payment methods</p>
      </div>

      {/* Account Balance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,295</div>
            <p className="text-xs text-gray-600">Available for campaigns</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month Spend</CardTitle>
            <Calendar className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,705</div>
            <p className="text-xs text-gray-600">Across all campaigns</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Charges</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$445</div>
            <p className="text-xs text-gray-600">Processing payments</p>
          </CardContent>
        </Card>
      </div>

      {/* Add Funds */}
      <Card>
        <CardHeader>
          <CardTitle>Add Funds</CardTitle>
          <CardDescription>Add money to your account to fund campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Label htmlFor="amount">Amount ($)</Label>
              <Input id="amount" type="number" placeholder="1000" min="50" />
            </div>
            <div className="flex-1">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Visa ending in 4242</option>
                <option>Chase ending in 8901</option>
              </select>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Funds
            </Button>
          </div>
          <div className="mt-4 p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-orange-600">
                Minimum deposit is $50. Funds are typically available within 1-2 business days.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billing Tabs */}
      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transaction History</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>Your recent account activity</CardDescription>
                </div>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "Deposit" ? "bg-green-100" : "bg-red-100"
                        }`}
                      >
                        {transaction.type === "Deposit" ? (
                          <Plus className="w-5 h-5 text-green-600" />
                        ) : (
                          <DollarSign className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{transaction.description}</h3>
                        <p className="text-sm text-gray-600">
                          {transaction.id} • {transaction.date}
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
                            : "bg-yellow-100 text-yellow-600"
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

        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payment methods</CardDescription>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Method
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {method.brand} ending in {method.last4}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {method.type} {method.expiry && `• Expires ${method.expiry}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {method.isDefault && <Badge className="bg-orange-100 text-orange-600">Default</Badge>}
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Invoices</CardTitle>
                  <CardDescription>Download your billing invoices</CardDescription>
                </div>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Download className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Invoice #INV-00{i}</h3>
                        <p className="text-sm text-gray-600">
                          December {i}, 2024 • $2,{i}60.00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-600">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Paid
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
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
