import { useTheme } from "../../context/useTheme"

function Button() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className={`px-3 py-1 rounded ${theme === "dark"
                ? "bg-neutral-800 text-white"
                : "bg-neutral-200 text-black"
                }`}
        >
            Toggle theme
        </button>
    )
}

export default function ContextExample() {
    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">Context API</h1>

            <p className="text-neutral-400">
                Context API allows components to access shared data directly,
                without passing props through intermediate layers.
            </p>

            {/* VISUAL TREE */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Component tree</h2>

                <div className="rounded bg-neutral-900 p-4 text-sm text-neutral-300">
                    <ul className="space-y-1">
                        <li>
                            <span className="font-mono">ThemeProvider</span>
                            <ul className="ml-4 border-l border-neutral-700 pl-4 space-y-1">
                                <li>
                                    <span className="font-mono">Page</span>
                                    <ul className="ml-4 border-l border-neutral-700 pl-4 space-y-1">
                                        <li>
                                            <span className="font-mono">Card</span>
                                            <ul className="ml-4 border-l border-neutral-700 pl-4">
                                                <li>
                                                    <span className="font-mono text-green-400">
                                                        Button <span className="text-neutral-500">(reads from context)</span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <p className="text-neutral-400">
                    The component hierarchy stays the same, but the data flow changes.
                </p>
            </section>

            {/* CODE SNIPPET */}
            <section className="space-y-5">
                <h2 className="text-lg font-semibold">Key code comparison</h2>

                {/* BEFORE */}
                <div>
                    <p className="text-sm text-neutral-400 mb-2">
                        ❌ Before (Prop Drilling)
                    </p>
                    <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                        <code>
                            {`function Button({ theme }: { theme: Theme }) {
  return (
    <button className={theme === "dark" ? "dark" : "light"}>
      Action
    </button>
  )
}`}
                        </code>
                    </pre>
                </div>

                {/* AFTER */}
                <div>
                    <p className="text-sm text-neutral-400 mb-2">
                        ✅ After (Context API)
                    </p>
                    <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                        <code>
                            {`function Button() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      Toggle theme
    </button>
  )
}`}
                        </code>
                    </pre>
                </div>

                <p className="text-neutral-400">
                    The button no longer receives{" "}
                    <code className="text-neutral-300">theme</code> as a prop.
                    It reads the value directly from context using a custom hook.
                </p>
            </section>



            {/* LIVE EXAMPLE */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Live example</h2>

                <p className="text-neutral-400">
                    The button below reads and updates the theme directly from context.
                </p>

                <Button />
            </section>

            <p className="text-sm text-neutral-500">
                Context is ideal for global concerns like themes, authentication,
                language settings, or feature flags.
            </p>
        </div>
    )
}
