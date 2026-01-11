import type { ComponentPropsWithoutRef } from "react"

type InputProps = {
    label?: string
    hint?: string
    error?: string
} & ComponentPropsWithoutRef<"input">

const Input = ({
    label,
    hint,
    error,
    id,
    className,
    ...props
}: InputProps) => {
    return (
        <div className="space-y-1">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-neutral-300"
                >
                    {label}
                </label>
            )}

            <input
                id={id}
                className={`
          w-full rounded-md border bg-neutral-900 px-3 py-2 text-sm
          text-neutral-100 placeholder-neutral-500
          focus:outline-none focus:ring-2
          ${error
                        ? "border-red-500 focus:ring-red-500"
                        : "border-neutral-700 focus:ring-blue-500"
                    }
          ${className ?? ""}
        `}
                {...props}
            />

            {hint && !error && (
                <p className="text-xs text-neutral-500">{hint}</p>
            )}

            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}
        </div>
    )
}

export default Input
