type Theme = "light" | "dark"

function Button({ theme }: { theme: Theme }) {
    return (
        <button
            className={`px-3 py-1 rounded ${theme === "dark"
                ? "bg-neutral-800 text-white"
                : "bg-neutral-200 text-black"
                }`}
        >
            Action
        </button>
    )
}

function Card({ theme }: { theme: Theme }) {
    return (
        <div className="border border-neutral-800 p-4 rounded">
            <Button theme={theme} />
        </div>
    )
}

function Page({ theme }: { theme: Theme }) {
    return <Card theme={theme} />
}

export default function PropDrillingExample() {
    const theme: Theme = "dark"

    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">Prop Drilling</h1>

            <p className="text-neutral-400">
                Prop drilling happens when data is passed through multiple
                components that do not actually need it, just to reach a
                deeply nested component.
            </p>

            {/* VISUAL TREE */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Component tree</h2>

                <div className="rounded bg-neutral-900 p-4 text-sm text-neutral-300">
                    <ul className="space-y-1">
                        <li>
                            <span className="font-mono">PropDrillingExample</span>
                            <ul className="ml-4 border-l border-neutral-700 pl-4 space-y-1">
                                <li>
                                    <span className="font-mono">
                                        Page <span className="text-neutral-500">(receives theme)</span>
                                    </span>
                                    <ul className="ml-4 border-l border-neutral-700 pl-4 space-y-1">
                                        <li>
                                            <span className="font-mono">
                                                Card <span className="text-neutral-500">(receives theme)</span>
                                            </span>
                                            <ul className="ml-4 border-l border-neutral-700 pl-4">
                                                <li>
                                                    <span className="font-mono text-green-400">
                                                        Button <span className="text-neutral-500">(uses theme)</span>
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
                    The <code className="text-neutral-300">theme</code> value flows
                    through multiple layers, even though only the Button needs it.
                </p>
            </section>

            {/* CODE SNIPPET */}
            <section className="space-y-5">
                <h2 className="text-lg font-semibold">
                    Key code (prop passthrough)
                </h2>

                <p className="text-neutral-400">
                    The following components receive the <code className="text-neutral-300">theme</code> prop
                    but do not actually use it. They only pass it down to their children.
                </p>

                {/* Page */}
                <div>
                    <p className="text-sm text-neutral-500 mb-1">
                        Page component
                    </p>
                    <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                        <code>
                            {`function Page({ theme }) {
  // ❌ theme is not used here
  return <Card theme={theme} />
}`}
                        </code>
                    </pre>
                </div>

                {/* Card */}
                <div>
                    <p className="text-sm text-neutral-500 mb-1">
                        Card component
                    </p>
                    <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                        <code>
                            {`function Card({ theme }) {
  // ❌ theme is not used here
  return <Button theme={theme} />
}`}
                        </code>
                    </pre>
                </div>


                <p className="text-neutral-400">
                    This pattern is called <strong>prop drilling</strong>. As the component
                    tree grows, more components are forced to accept and forward props
                    they do not care about.
                </p>
            </section>


            {/* LIVE EXAMPLE */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Live example</h2>
                <p className="text-neutral-400">
                    The button below receives the theme after passing through
                    multiple layers.
                </p>

                <Page theme={theme} />
            </section>

            <p className="text-sm text-neutral-500">
                This example works, but it scales poorly as the application grows.
                The next section shows how Context API fixes this problem.
            </p>
        </div>
    )
}
