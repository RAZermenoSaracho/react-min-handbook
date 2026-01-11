import type { ReactNode } from "react"

type CardProps = {
    title?: string
    children: ReactNode
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 space-y-3">
            {title && (
                <h3 className="text-lg font-semibold">{title}</h3>
            )}
            {children}
        </div>
    )
}
