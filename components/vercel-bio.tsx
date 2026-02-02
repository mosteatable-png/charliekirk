"use client"

import { useState } from "react"
import { BadgeCheck, Crown, ExternalLink, Megaphone } from "lucide-react"

interface DiscordInvite {
  label: string
  url: string
  iconUrl?: string
}

interface Announcement {
  id: string
  title: string
  content: string
  date: string
}

interface VercelBioProps {
  name?: string
  username?: string
  bio?: string
  avatarUrl?: string
  discordInvites?: DiscordInvite[]
  announcements?: Announcement[]
  isVerified?: boolean
  isOwner?: boolean
}

function VercelLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 76 65"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
    </svg>
  )
}

function DiscordLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  )
}

export function VercelBio({
  name = "Username",
  username,
  bio = "Welcome to my profile! I'm passionate about building amazing experiences.",
  avatarUrl,
  discordInvites = [
    { label: ".gg/gorillatagvr", url: "https://discord.gg/gorillatagvr" },
    { label: ".gg/theforgottenlab", url: "https://discord.gg/theforgottenlab" },
  ],
  announcements = [],
  isVerified = true,
  isOwner = true,
}: VercelBioProps) {
  const [activeTab, setActiveTab] = useState<"links" | "announcements">("links")

  return (
    <div className="w-full max-w-md">
      <div className="relative overflow-hidden rounded-xl border-2 border-transparent bg-card p-6 shadow-2xl" style={{ borderImage: "linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff) 1" }}>
        {/* Colorful gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/10 via-cyan-500/5 to-yellow-500/10" />
        
        {/* Animated color orbs */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-500/10 to-orange-500/10 blur-3xl" />

        <div className="relative">
          {/* Header with Avatar and Vercel Logo */}
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* Avatar with colorful ring */}
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-secondary p-0.5" style={{ background: "linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)" }}>
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-card">
                    {avatarUrl ? (
                      <img
                        src={avatarUrl || "/placeholder.svg"}
                        alt={name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-foreground">
                        {name.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>
                {isVerified && (
                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ring-2 ring-card">
                    <BadgeCheck className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              {/* Name and Badges */}
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">{name}</h2>
                </div>
                {username && (
                  <p className="text-sm text-cyan-400/80">@{username}</p>
                )}
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {isVerified && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-2.5 py-1 text-xs font-medium text-cyan-400">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Verified
                    </span>
                  )}
                  {isOwner && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-2.5 py-1 text-xs font-medium text-yellow-400">
                      <Crown className="h-3.5 w-3.5" />
                      Owner
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Vercel Logo with gradient */}
            <VercelLogo className="h-5 w-5 text-pink-400 opacity-70" />
          </div>

          {/* Bio */}
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {bio}
          </p>

          {/* Tabs with colorful active state */}
          <div className="mb-4 flex gap-1 rounded-lg bg-secondary/50 p-1">
            <button
              onClick={() => setActiveTab("links")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all ${
                activeTab === "links"
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-400 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <DiscordLogo className="h-4 w-4" />
              Links
            </button>
            <button
              onClick={() => setActiveTab("announcements")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all ${
                activeTab === "announcements"
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Megaphone className="h-4 w-4" />
              Announcements
            </button>
          </div>

          {/* Links Tab */}
          {activeTab === "links" && discordInvites.length > 0 && (
            <div className="space-y-2">
              <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                <DiscordLogo className="h-4 w-4" />
                Discord Communities
              </h3>
              <div className="space-y-2">
                {discordInvites.map((invite, index) => {
                  const colors = [
                    { border: "hover:border-pink-500/50", bg: "hover:bg-pink-500/10", text: "group-hover:text-pink-400" },
                    { border: "hover:border-cyan-500/50", bg: "hover:bg-cyan-500/10", text: "group-hover:text-cyan-400" },
                    { border: "hover:border-yellow-500/50", bg: "hover:bg-yellow-500/10", text: "group-hover:text-yellow-400" },
                    { border: "hover:border-purple-500/50", bg: "hover:bg-purple-500/10", text: "group-hover:text-purple-400" },
                  ]
                  const color = colors[index % colors.length]
                  return (
                    <a
                      key={index}
                      href={invite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between rounded-lg border border-border bg-secondary/50 px-4 py-3 transition-all ${color.border} ${color.bg}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                          {invite.iconUrl ? (
                            <img
                              src={invite.iconUrl || "/placeholder.svg"}
                              alt={invite.label}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <DiscordLogo className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <span className="font-mono text-sm text-foreground">
                          {invite.label}
                        </span>
                      </div>
                      <ExternalLink className={`h-4 w-4 text-muted-foreground transition-colors ${color.text}`} />
                    </a>
                  )
                })}
              </div>
            </div>
          )}

          {/* Announcements Tab */}
          {activeTab === "announcements" && (
            <div className="space-y-3">
              {announcements.length > 0 ? (
                announcements.map((announcement, index) => {
                  const borderColors = [
                    "border-l-pink-500",
                    "border-l-cyan-500",
                    "border-l-yellow-500",
                    "border-l-purple-500",
                  ]
                  const borderColor = borderColors[index % borderColors.length]
                  return (
                    <div
                      key={announcement.id}
                      className={`rounded-lg border border-border border-l-4 ${borderColor} bg-secondary/50 p-4`}
                    >
                      <div className="mb-2 flex items-start justify-between">
                        <h4 className="font-semibold text-foreground">
                          {announcement.title}
                        </h4>
                        <span className="text-xs text-cyan-400/80">
                          {announcement.date}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {announcement.content}
                      </p>
                    </div>
                  )
                })
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Megaphone className="mb-3 h-8 w-8 text-purple-400/50" />
                  <p className="text-sm text-muted-foreground">
                    No announcements yet
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Footer with colorful accents */}
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <span className="text-xs text-pink-400/80">made by table</span>
            <span className="font-mono text-xs text-cyan-400/80">v1.0.2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
