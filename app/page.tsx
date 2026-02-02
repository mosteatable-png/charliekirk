import { VercelBio } from "@/components/vercel-bio"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <VercelBio
        name="hatred"
        username="hatredisback"
        avatarUrl="/images.profile.jpg"
        bio="CammyAPP, table (ily) , Rizuejr, Nala, tie, renuled, Ella, Koda, Leo, vpn and 77"
        isVerified={true}
        isOwner={false}
        more={[
          {
            id: "1",
            title: "day 1's",
            content: "CammyAPP, table (ily) , Rizuejr, Nala, tie, renuled, Ella, Koda, Leo, vpn and 77",
            date: "FEB 2, 2026",
          },
        ]}
      />
    </main>
  )
}
