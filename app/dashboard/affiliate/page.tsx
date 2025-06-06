import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, DollarSign, Copy, Share2, TrendingUp, Gift, Star, Eye } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AffiliatePage() {
  const affiliateStats = {
    totalReferrals: 24,
    activeReferrals: 18,
    totalEarnings: 1240,
    pendingEarnings: 320,
    conversionRate: 12.5,
    clickThroughRate: 8.3,
  }

  const referrals = [
    {
      id: 1,
      name: "Alex Chen",
      email: "alex@example.com",
      joinDate: "2024-11-15",
      status: "Active",
      plan: "Creator",
      commission: 2.0,
      totalSpent: 0,
    },
    {
      id: 2,
      name: "TechStart Inc",
      email: "hello@techstart.com",
      joinDate: "2024-11-20",
      status: "Active",
      plan: "Vendor",
      commission: 10.0,
      totalSpent: 2500,
    },
    {
      id: 3,
      name: "Maya Rodriguez",
      email: "maya@creator.com",
      joinDate: "2024-12-01",
      status: "Pending",
      plan: "Creator",
      commission: 0,
      totalSpent: 0,
    },
  ]

  const commissionHistory = [
    {
      id: 1,
      referral: "TechStart Inc",
      amount: 125.0,
      date: "2024-12-05",
      status: "Paid",
      type: "Campaign Spend",
    },
    {
      id: 2,
      referral: "Alex Chen",
      amount: 2.0,
      date: "2024-11-15",
      status: "Paid",
      type: "Plan Purchase",
    },
    {
      id: 3,
      referral: "Creative Studio",
      amount: 75.0,
      date: "2024-11-28",
      status: "Pending",
      type: "Campaign Spend",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Affiliate Program</h1>
        <p className="text-gray-600">Earn money by referring new users to ClipMart</p>
      </div>

      {/* Affiliate Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{affiliateStats.totalReferrals}</div>
            <p className="text-xs text-gray-600">{affiliateStats.activeReferrals} active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${affiliateStats.totalEarnings}</div>
            <p className="text-xs text-gray-600">${affiliateStats.pendingEarnings} pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{affiliateStats.conversionRate}%</div>
            <p className="text-xs text-gray-600">Above average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
            <Eye className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{affiliateStats.clickThroughRate}%</div>
            <p className="text-xs text-gray-600">Link performance</p>
          </CardContent>
        </Card>
      </div>

      {/* Referral Link */}
      <Card>
        <CardHeader>
          <CardTitle>Your Referral Link</CardTitle>
          <CardDescription>Share this link to earn commissions on new sign-ups</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input value="https://clipmart.com/ref/sarah-martinez" readOnly className="flex-1 bg-gray-50" />
            <Button variant="outline">
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Gift className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-orange-600">Commission Structure</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Creator Referrals</p>
                <p className="text-gray-600">$2 per successful sign-up</p>
              </div>
              <div>
                <p className="font-medium">Vendor Referrals</p>
                <p className="text-gray-600">5% of their campaign spend</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Affiliate Tabs */}
      <Tabs defaultValue="referrals" className="space-y-4">
        <TabsList>
          <TabsTrigger value="referrals">My Referrals</TabsTrigger>
          <TabsTrigger value="earnings">Earnings History</TabsTrigger>
          <TabsTrigger value="resources">Marketing Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="referrals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Referrals</CardTitle>
              <CardDescription>People who signed up using your referral link</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {referrals.map((referral) => (
                  <div key={referral.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-500 font-semibold text-sm">
                          {referral.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{referral.name}</h3>
                        <p className="text-sm text-gray-600">{referral.email}</p>
                        <p className="text-xs text-gray-500">Joined {referral.joinDate}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Badge
                        className={
                          referral.plan === "Creator" ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
                        }
                      >
                        {referral.plan}
                      </Badge>
                      <p className="text-sm text-gray-600 mt-1">
                        {referral.totalSpent > 0 ? `$${referral.totalSpent} spent` : "No spend yet"}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={
                          referral.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                        }
                      >
                        {referral.status}
                      </Badge>
                      <p className="text-sm font-semibold mt-1">${referral.commission.toFixed(2)} earned</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Commission History</CardTitle>
              <CardDescription>Your affiliate earnings and payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {commissionHistory.map((commission) => (
                  <div key={commission.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{commission.type}</h3>
                      <p className="text-sm text-gray-600">From: {commission.referral}</p>
                      <p className="text-xs text-gray-500">{commission.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">${commission.amount.toFixed(2)}</p>
                      <Badge
                        className={
                          commission.status === "Paid" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                        }
                      >
                        {commission.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Marketing Materials</CardTitle>
                <CardDescription>Ready-to-use promotional content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <h3 className="font-semibold">Banner Images</h3>
                  <p className="text-sm text-gray-600">High-quality banners for websites and social media</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Download Pack
                  </Button>
                </div>
                <div className="p-3 border rounded-lg">
                  <h3 className="font-semibold">Social Media Templates</h3>
                  <p className="text-sm text-gray-600">Instagram, Twitter, and Facebook post templates</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Download Pack
                  </Button>
                </div>
                <div className="p-3 border rounded-lg">
                  <h3 className="font-semibold">Email Templates</h3>
                  <p className="text-sm text-gray-600">Pre-written email campaigns for your audience</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Download Pack
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Tips</CardTitle>
                <CardDescription>Maximize your affiliate earnings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Target Content Creators</h3>
                    <p className="text-sm text-gray-600">Focus on YouTubers, TikTokers, and Instagram creators</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Highlight AI Features</h3>
                    <p className="text-sm text-gray-600">Emphasize video repurposing and translation capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Share Success Stories</h3>
                    <p className="text-sm text-gray-600">Use case studies and testimonials in your promotions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Engage Your Audience</h3>
                    <p className="text-sm text-gray-600">Create tutorials and demos showing ClipMart in action</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
