import { useEffect, useState } from "react"

export default function UseEffect() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("")

    /* ================= EFFECT ================= */
    useEffect(() => {
        setMessage(`Count changed to ${count}`)

        return () => {
            // cleanup runs before the next effect
            // or when the component unmounts
        }
    }, [count])

    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">useEffect</h1>

            <p className="text-neutral-400">
                <code className="text-neutral-300">useEffect</code> lets you run
                side effects after React renders a component.
            </p>

            {/* ================= CODE ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Key code</h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`useEffect(() => {
  setMessage(\`Count changed to \${count}\`)

  return () => {
    // cleanup
  }
}, [count])`}
                    </code>
                </pre>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>The effect runs after the component renders.</li>
                    <li>It runs again when <code className="text-neutral-300">count</code> changes.</li>
                    <li>The cleanup runs before the next effect.</li>
                </ul>
            </section>

            {/* ================= LIVE ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Live example</h2>

                <p className="text-neutral-400">
                    Click the button to update the state. The effect reacts
                    to the change.
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

                <p className="text-sm text-green-400">
                    {message}
                </p>
            </section>

            {/* ================= DEPENDENCIES ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Dependency array</h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`useEffect(() => {
  // runs only once (on mount)
}, [])

useEffect(() => {
  // runs on every render
})

useEffect(() => {
  // runs when value changes
}, [value])`}
                    </code>
                </pre>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li><code>[]</code> → run once (on mount)</li>
                    <li>No array → run on every render</li>
                    <li><code>[value]</code> → run when value changes</li>
                </ul>
            </section>

            {/* ================= COMMON MISTAKES ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold text-red-400">
                    Common mistakes
                </h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>Using <code className="text-neutral-300">useEffect</code> to derive state.</li>
                    <li>Missing dependencies.</li>
                    <li>Running effects that belong in event handlers.</li>
                    <li>Forgetting cleanup logic.</li>
                </ul>
            </section>

            <p className="text-sm text-neutral-500">
                If you are not sure whether you need an effect, you probably do not.
            </p>
        </div>
    )
}
