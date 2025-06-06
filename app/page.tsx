import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Play,
  Users,
  Zap,
  Globe,
  DollarSign,
  Video,
  Scissors,
  Languages,
  ShoppingCart,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-black">ClipMart</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-orange-500">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-orange-500">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-orange-500">
              Reviews
            </Link>
            <Link href="/auth/signin" className="text-gray-600 hover:text-orange-500">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl md:text-6xl font-bold text-black mb-6 min-h-[200px] flex flex-col items-center justify-center">
            <div className="typewriter-line">
              <span className="typewriter-text creators-text">Creators: Clip Your Way to Wealth</span>
            </div>
            <div className="typewriter-line mt-4">
              <span className="typewriter-text vendors-text">
                Vendors: Meet the Right Audience with the Right Content
              </span>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The ultimate platform for content creators and brands to repurpose, translate, and monetize video content
            with AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              <Link href="/auth/signup?role=creator">Join as Creator</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg"
            >
              <Link href="/auth/signup?role=vendor">Join as Vendor</Link>
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Creators</span>
            </div>
            <div className="flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>1M+ Videos Processed</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>$500K+ Paid Out</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two Sections: Creators & Vendors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Creators */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">For Creators</h2>
              <p className="text-gray-600 mb-6">
                Transform your content into multiple formats and get paid for every view
              </p>
              <ul className="space-y-3 text-left max-w-sm mx-auto">
                <li className="flex items-center space-x-3">
                  <Scissors className="w-5 h-5 text-orange-500" />
                  <span>AI-powered video repurposing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Languages className="w-5 h-5 text-orange-500" />
                  <span>Translate videos with same voice</span>
                </li>
                <li className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-orange-500" />
                  <span>Earn from campaign marketplace</span>
                </li>
                <li className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <span>Built-in video editor</span>
                </li>
              </ul>
            </div>

            {/* For Vendors */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">For Vendors</h2>
              <p className="text-gray-600 mb-6">
                Connect with creators and scale your brand reach through video campaigns
              </p>
              <ul className="space-y-3 text-left max-w-sm mx-auto">
                <li className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span>Access 10,000+ creators</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-orange-500" />
                  <span>Multi-platform campaigns</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span>Real-time analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-orange-500" />
                  <span>Pay per view model</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed in the creator economy</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Repurpose Videos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transform long-form content into shorts, reels, and clips with AI-powered editing
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Languages className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Translate with AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Translate videos to any language while preserving your original voice and tone
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Get Paid for Views</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn money from brand campaigns and get paid for every view your content generates
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Campaign Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect creators with brands through our integrated campaign marketplace
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Simple Lifetime Pricing</h2>
            <p className="text-xl text-gray-600">Pay once, use forever. No monthly fees.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-500 w-fit mx-auto mb-4">Creator Plan</Badge>
                <CardTitle className="text-3xl font-bold">$2</CardTitle>
                <CardDescription>Lifetime Access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>AI Video Repurposing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Video Translation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Built-in Video Editor</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Campaign Marketplace Access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Affiliate Program</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/auth/signup?role=creator">Get Creator Access</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-500 w-fit mx-auto mb-4">Vendor Plan</Badge>
                <CardTitle className="text-3xl font-bold">$10</CardTitle>
                <CardDescription>Lifetime Access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Create Unlimited Campaigns</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Access 10,000+ Creators</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Real-time Analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Multi-platform Targeting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/auth/signup?role=vendor">Get Vendor Access</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied creators and brands</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "ClipMart transformed my content strategy. I can now repurpose one video into 10 different formats and
                  earn from brand campaigns!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Martinez</p>
                    <p className="text-sm text-gray-500">Content Creator</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The campaign marketplace is incredible. We've reached millions of views and found amazing creators to
                  work with."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mike Johnson</p>
                    <p className="text-sm text-gray-500">Brand Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The AI translation feature is mind-blowing. I can now reach global audiences without losing my
                  voice's authenticity."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-semibold">AL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alex Liu</p>
                    <p className="text-sm text-gray-500">YouTuber</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">ClipMart</span>
              </div>
              <p className="text-gray-400">Turn any video into views, reach & revenue with AI-powered tools.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-orange-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-orange-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/auth/signin" className="hover:text-orange-500">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/auth/signup" className="hover:text-orange-500">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-orange-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-orange-500">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-orange-500">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-orange-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-orange-500">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/academy" className="hover:text-orange-500">
                    Academy
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-orange-500">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:text-orange-500">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ClipMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
