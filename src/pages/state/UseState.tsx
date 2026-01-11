import { useState } from "react"

export default function UseState() {
    const [count, setCount] = useState(0)

    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">useState</h1>

            <p className="text-neutral-400">
                <code className="text-neutral-300">useState</code> allows you to store
                and update local state inside functional components. When state
                changes, React re-renders the component.
            </p>

            {/* CODE SNIPPET */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Key code</h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`const [count, setCount] = useState(0)

<button
  onClick={() => setCount(prev => prev + 1)}
>
  Increment
</button>

<span>{count}</span>`}
                    </code>
                </pre>


                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>
                        <code className="text-neutral-300">count</code> is the current state value.
                    </li>
                    <li>
                        <code className="text-neutral-300">setCount</code> updates the state.
                    </li>
                    <li>
                        Updating state triggers a re-render.
                    </li>
                </ul>
            </section>

            {/* LIVE EXAMPLE */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Live example</h2>

                <p className="text-neutral-400">
                    Click the button to update the state. The UI automatically
                    re-renders with the new value.
                </p>

                <div className="flex items-center gap-4">
                    <button
                        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
                        onClick={() => setCount(prev => prev + 1)}
                    >
                        Increment
                    </button>

                    <span className="text-xl">{count}</span>
                </div>
            </section>

            {/* WHY FUNCTIONAL UPDATE */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                    Why use a functional update?
                </h2>

                <div className="rounded bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
                    {`setCount(prev => prev + 1)`}
                </div>

                <p className="text-neutral-400">
                    Using a functional update ensures that you always receive the
                    latest state value, even if React batches updates.
                </p>
            </section>

            <p className="text-sm text-neutral-500">
                State should be local by default. Lift it up or move it to
                context only when it needs to be shared.
            </p>
        </div>
    )
}
