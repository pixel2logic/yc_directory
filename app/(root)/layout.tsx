export default function Layout({children}: readonly<{ children: React.ReactNode}>) {
    return (
        <main className="font-work-sans">{ children }</main>
    )
}