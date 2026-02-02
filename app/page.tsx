import { VercelBio } from "@/components/vercel-bio"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <VercelBio
        name="table"
        username="gorillatag.vr"
        avatarUrl="/images/profile.jpg"
        bio="@cammyapp @hatred @77 @drxxl @v3xi @manzy @tie @cruz"
        isVerified={true}
        isOwner={true}
        discordInvites={[
          {
            label: ".gg/gorillatagvr",
            url: "https://discord.gg/gorillatagvr",
            iconUrl: "/images/gorillatag-icon.png",
          },
          {
            label: ".gg/theforgottenlab",
            url: "https://discord.gg/theforgottenlab",
            iconUrl: "/images/forgottenlab-icon.png",
          },
        ]}
        announcements={[
          {
            id: "1",
            title: "bible verses, repent hes coming back!",
            content: "Leviticus 18:22, 1 Corinthians 6:9, 1 Timothy 1:10.",
            date: "JAN 31, 2026",
          },
        ]}
      />
    </main>
  )
}
