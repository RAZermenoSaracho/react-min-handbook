import { NavLink } from "react-router-dom"

type SidebarProps = {
    isOpen: boolean
    onClose: () => void
}

const sections = [
    {
        title: "Fundamentals",
        links: [
            { to: "/", label: "Home" },
            { to: "/jsx", label: "JSX & Rendering" },
        ],
    },
    {
        title: "Components & Data Flow",
        links: [
            { to: "/props", label: "Props & Children" },
            { to: "/state", label: "useState" },
        ],
    },
    {
        title: "Hooks (Core)",
        links: [
            { to: "/use-effect", label: "useEffect" },
            { to: "/use-context", label: "useContext" },
        ],
    },
    {
        title: "Hooks (Advanced & Performance)",
        links: [
            { to: "/use-ref", label: "useRef" },
            { to: "/use-memo", label: "useMemo" },
        ],
    },
    {
        title: "State Architecture",
        links: [
            { to: "/prop-drilling", label: "Prop Drilling" },
            { to: "/context", label: "Context API" },
        ],
    },
    {
        title: "Data & Side Effects",
        links: [
            { to: "/data-fetching", label: "Fetching & WebSockets" },
        ],
    },
    {
        title: "Redux",
        links: [
            { to: "/redux", label: "Redux (Intro)" },
            { to: "/redux/store", label: "Redux Store" },
            { to: "/redux/vs-context", label: "Redux vs Context" },
        ]
    }
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`
          fixed z-50 inset-y-0 left-0 w-64 bg-neutral-950 border-r border-neutral-800
          transform transition-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0
        `}
            >
                <div className="p-4 flex items-center justify-between md:block">
                    <h2 className="text-lg font-semibold">
                        React Handbook
                    </h2>

                    <button
                        onClick={onClose}
                        className="md:hidden text-neutral-400 hover:text-white"
                        aria-label="Close sidebar"
                    >
                        ✕
                    </button>
                </div>

                <nav className="px-2 space-y-6">
                    {sections.map(section => (
                        <div key={section.title}>
                            <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                {section.title}
                            </p>

                            <div className="space-y-1">
                                {section.links.map(link => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        onClick={onClose}
                                        className={({ isActive }) =>
                                            `block rounded px-3 py-2 text-sm ${isActive
                                                ? "bg-neutral-800 text-white"
                                                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    )
}
