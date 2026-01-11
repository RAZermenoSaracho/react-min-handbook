import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"

export default function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            {/* Mobile header */}
            <header className="flex items-center gap-4 border-b border-neutral-800 p-4 md:hidden">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="text-neutral-300 hover:text-white"
                    aria-label="Open sidebar"
                >
                    ☰
                </button>
                <h1 className="font-semibold">React Minimal Handbook</h1>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                {/* Main content */}
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
