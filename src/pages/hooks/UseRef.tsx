import { useRef, useState } from "react"

export default function UseRef() {
    const renderCount = useRef(0)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [, forceRender] = useState(0)

    // This line runs on every render
    renderCount.current++

    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">useRef</h1>

            <p className="text-neutral-400">
                <code className="text-neutral-300">useRef</code> is used to store
                mutable values that persist across renders <strong>without</strong>
                causing a re-render.
            </p>

            {/* ================= WHAT WE ARE DEMONSTRATING ================= */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                    What this page demonstrates
                </h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>
                        <code className="text-neutral-300">useRef</code> values
                        persist between renders.
                    </li>
                    <li>
                        Updating <code className="text-neutral-300">ref.current</code>{" "}
                        does <strong>not</strong> trigger a re-render.
                    </li>
                    <li>
                        <code className="text-neutral-300">useRef</code> can also
                        reference DOM elements directly.
                    </li>
                </ul>
            </section>

            {/* ================= RENDER COUNTER ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">
                    Example 1: Persisting values without re-render
                </h2>

                <p className="text-neutral-400">
                    In this example, we use a ref to count how many times the
                    component renders. The ref value updates on every render,
                    but React does not re-render when the ref changes.
                </p>

                {/* CODE */}
                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`const renderCount = useRef(0)

renderCount.current++`}
                    </code>
                </pre>

                <div className="rounded border border-neutral-800 p-4 space-y-3">
                    <p className="text-green-400">
                        Render count: {renderCount.current}
                    </p>

                    <button
                        className="px-4 py-2 bg-blue-600 rounded"
                        onClick={() => forceRender(v => v + 1)}
                    >
                        Force re-render
                    </button>
                </div>

                <p className="text-sm text-neutral-500">
                    Clicking the button causes a re-render via state, which
                    increments the ref. The ref itself never causes the render.
                </p>
            </section>

            {/* ================= STRICT MODE NOTE ================= */}
            <section className="space-y-2 rounded border border-yellow-800 bg-yellow-950/30 p-4">
                <h3 className="text-sm font-semibold text-yellow-400">
                    Why does the render count increase by 2?
                </h3>

                <p className="text-sm text-neutral-300">
                    In development mode, React Strict Mode intentionally renders components
                    twice to detect side effects and unsafe logic.
                </p>

                <p className="text-sm text-neutral-300">
                    This causes the ref-based render counter to increment twice per visible
                    render. This behavior does not occur in production builds.
                </p>

                <pre className="rounded bg-neutral-900 p-3 text-xs text-neutral-400 overflow-x-auto">
                    <code>
                        {`<React.StrictMode>
  <App />
</React.StrictMode>`}
                    </code>
                </pre>

                <p className="text-sm text-neutral-500">
                    This is expected behavior and does not indicate a bug in useRef.
                </p>
            </section>

            {/* ================= DOM REFERENCE ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">
                    Example 2: Referencing DOM elements
                </h2>

                <p className="text-neutral-400">
                    A common use case for <code className="text-neutral-300">useRef</code>{" "}
                    is interacting with DOM elements directly, without triggering a re-render
                    or using document queries.
                </p>

                <p className="text-neutral-400">
                    In this example, clicking the button will programmatically move the
                    cursor into the input field below.
                </p>

                <p className="text-sm text-neutral-500">
                    👉 Click the button and observe how the input receives focus automatically.
                </p>

                {/* CODE */}
                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`const inputRef = useRef<HTMLInputElement | null>(null)

<input ref={inputRef} />

inputRef.current?.focus()`}
                    </code>
                </pre>

                <input
                    ref={inputRef}
                    className="px-3 py-2 rounded bg-neutral-900 border border-neutral-700"
                    placeholder="Focus me"
                />

                <button
                    className="px-4 py-2 bg-green-600 rounded"
                    onClick={() => inputRef.current?.focus()}
                >
                    Focus input
                </button>

                <p className="text-sm text-neutral-500">
                    No state changes occur here. React does not re-render the component.
                    The interaction happens directly on the DOM node.
                </p>
            </section>

            {/* ================= KEY TAKEAWAY ================= */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                    Key takeaway
                </h2>

                <p className="text-neutral-400">
                    <code className="text-neutral-300">useRef</code> is not for
                    rendering data. It is for storing values or references that
                    must survive renders without affecting the render cycle.
                </p>

                <p className="text-sm text-neutral-500">
                    If a value should update the UI, use state. If it should
                    persist silently, use a ref.
                </p>
            </section>
        </div>
    )
}
