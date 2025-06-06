"use client"

import { useState } from "react"
import {
  Menu,
  Video,
  Home,
  Repeat,
  Languages,
  PlayCircle,
  DollarSign,
  Users,
  Settings,
  BarChart3,
  Building2,
  CreditCard,
  Shield,
  FileText,
  TrendingUp,
  Wallet,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MobileNavProps {
  type: "creator" | "vendor" | "admin"
}

export function MobileNav({ type }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const logoColor = type === "admin" ? "bg-red-500" : "bg-orange-500"
  const portalLabel =
    type === "admin" ? (
      <p className="text-xs text-red-500 font-bold uppercase tracking-wider">Admin Panel</p>
    ) : type === "vendor" ? (
      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider dark:text-gray-400">Vendor Portal</p>
    ) : null

  const creatorNavItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Repurpose Video", url: "/dashboard/repurpose", icon: Repeat },
    { title: "Translate Video", url: "/dashboard/translate", icon: Languages },
    { title: "My Videos", url: "/dashboard/videos", icon: PlayCircle },
    { title: "Campaigns", url: "/dashboard/campaigns", icon: Building2 },
    { title: "Earnings", url: "/dashboard/earnings", icon: DollarSign },
    { title: "Affiliate", url: "/dashboard/affiliate", icon: Users },
    { title: "Settings", url: "/dashboard/settings", icon: Settings },
  ]

  const vendorNavItems = [
    { title: "Dashboard", url: "/vendor/dashboard", icon: Home },
    { title: "Create Campaign", url: "/vendor/campaigns/create", icon: Building2 },
    { title: "My Campaigns", url: "/vendor/campaigns", icon: FileText },
    { title: "Analytics", url: "/vendor/analytics", icon: BarChart3 },
    { title: "Billing", url: "/vendor/billing", icon: CreditCard },
    { title: "Settings", url: "/vendor/settings", icon: Settings },
  ]

  const adminNavItems = [
    { title: "Dashboard", url: "/admin/dashboard", icon: Home },
    { title: "User Management", url: "/admin/users", icon: Users },
    { title: "Content Moderation", url: "/admin/content", icon: Shield },
    { title: "Analytics", url: "/admin/analytics", icon: TrendingUp },
    { title: "Financial Management", url: "/admin/finance", icon: Wallet },
  ]

  const getNavItems = () => {
    switch (type) {
      case "creator":
        return creatorNavItems
      case "vendor":
        return vendorNavItems
      case "admin":
        return adminNavItems
      default:
        return creatorNavItems
    }
  }

  const navItems = getNavItems()

  return (
    <div className="flex items-center justify-between w-full px-4 py-3 border-b md:hidden bg-background">
      <div className="flex items-center space-x-2">
        <div className={`w-8 h-8 ${logoColor} rounded-lg flex items-center justify-center`}>
          <Video className="w-5 h-5 text-white" />
        </div>
        <div>
          <span className="text-xl font-black tracking-wide dark:text-white">ClipMart</span>
          {portalLabel}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <ThemeToggle />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="border-none">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-0 bg-sidebar">
            <div className="flex h-full w-full flex-col bg-sidebar text-sidebar-foreground">
              {/* Header */}
              <div className="flex flex-col gap-2 p-4 border-b border-sidebar-border">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 ${logoColor} rounded-lg flex items-center justify-center`}>
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-black tracking-wide">ClipMart</span>
                    {portalLabel}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-auto p-2">
                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.title}
                        href={item.url}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-sidebar-border">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start gap-2 px-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>{type === "admin" ? "AD" : type === "vendor" ? "VE" : "CR"}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start text-sm">
                        <span className="font-semibold">
                          {type === "admin" ? "Admin User" : type === "vendor" ? "Vendor User" : "Creator User"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {type === "admin"
                            ? "admin@clipmart.com"
                            : type === "vendor"
                              ? "vendor@clipmart.com"
                              : "creator@clipmart.com"}
                        </span>
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
