import { useMemo, useState } from "react"

function expensiveCalculation(n: number) {
    console.log("Running expensive calculation...")
    let result = 0
    for (let i = 0; i < 1_000_000; i++) {
        result += n
    }
    return result
}

export default function UseMemo() {
    const [count, setCount] = useState(0)
    const [dark, setDark] = useState(false)

    const computedValue = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    return (
        <div
            className={`space-y-10 max-w-2xl p-4 rounded ${dark ? "bg-neutral-900" : "bg-neutral-800"
                }`}
        >
            <h1 className="text-2xl font-bold">useMemo</h1>

            <p className="text-neutral-400">
                <code className="text-neutral-300">useMemo</code> caches the
                result of a computation and only recalculates it when its
                dependencies change.
            </p>

            {/* ================= WHAT THIS PAGE DEMONSTRATES ================= */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                    What this page demonstrates
                </h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>
                        Components can re-render without re-running expensive
                        calculations.
                    </li>
                    <li>
                        <code className="text-neutral-300">useMemo</code>{" "}
                        recalculates only when dependencies change.
                    </li>
                    <li>
                        <code className="text-neutral-300">useMemo</code>{" "}
                        does <strong>not</strong> prevent re-renders.
                    </li>
                </ul>
            </section>

            {/* ================= EXPLANATION OF STATE ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">
                    State used in this example
                </h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`const [count, setCount] = useState(0)
const [dark, setDark] = useState(false)`}
                    </code>
                </pre>

                <p className="text-neutral-400">
                    Changing <code className="text-neutral-300">count</code>{" "}
                    affects the calculation. Changing{" "}
                    <code className="text-neutral-300">dark</code>{" "}
                    only affects the UI.
                </p>
            </section>

            {/* ================= MEMOIZED CALCULATION ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">
                    Memoized computation
                </h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`const computedValue = useMemo(() => {
  return expensiveCalculation(count)
}, [count])`}
                    </code>
                </pre>

                <p className="text-neutral-400">
                    The expensive calculation only runs when{" "}
                    <code className="text-neutral-300">count</code>{" "}
                    changes. Toggling the theme still re-renders the component,
                    but the calculation is skipped.
                </p>
            </section>

            {/* ================= LIVE EXAMPLE ================= */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">
                    Live example
                </h2>

                <p className="text-sm text-neutral-500">
                    👉 Open the console and observe when the calculation runs.
                </p>

                <div className="space-y-3">
                    <button
                        className="px-4 py-2 bg-blue-600 rounded"
                        onClick={() => setCount(c => c + 1)}
                    >
                        Increment count (recalculates)
                    </button>

                    <button
                        className="px-4 py-2 bg-neutral-700 rounded"
                        onClick={() => setDark(d => !d)}
                    >
                        Toggle theme (no recalculation)
                    </button>

                    <p className="text-green-400">
                        Computed value: {computedValue}
                    </p>
                </div>
            </section>

            {/* ================= KEY TAKEAWAY ================= */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                    Key takeaway
                </h2>

                <p className="text-neutral-400">
                    <code className="text-neutral-300">useMemo</code>{" "}
                    optimizes expensive computations, not renders.
                </p>

                <p className="text-sm text-neutral-500">
                    If a calculation is cheap, <code className="text-neutral-300">useMemo</code>{" "}
                    is unnecessary and can add complexity.
                </p>
            </section>
        </div>
    )
}
