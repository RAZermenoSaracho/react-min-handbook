import type { ReactNode } from "react"

type ExampleBoxProps = {
    description: string
    children: ReactNode
}

export default function ExampleBox({
    description,
    children,
}: ExampleBoxProps) {
    return (
        <div className="space-y-2">
            <p className="text-neutral-400 text-sm">
                {description}
            </p>
            {children}
        </div>
    )
}
