export default function ReduxIntro() {
    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">Redux</h1>

            <p className="text-neutral-400">
                Redux is a predictable state container for JavaScript applications.
                It centralizes application state and enforces a strict, unidirectional
                data flow.
            </p>

            {/* ================= WHY REDUX ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Why Redux exists</h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>Sharing state across many distant components</li>
                    <li>Avoiding deeply nested prop drilling</li>
                    <li>Making state changes explicit and traceable</li>
                    <li>Debugging complex state transitions</li>
                </ul>
            </section>

            {/* ================= CORE IDEAS ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Core concepts</h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`Store      → holds the global state
Action     → describes what happened
Reducer    → decides how state changes
Dispatch   → sends actions to the store`}
                    </code>
                </pre>

                <p className="text-neutral-400">
                    Components never modify state directly. They dispatch actions,
                    and reducers define how the state updates.
                </p>
            </section>

            {/* ================= FLOW ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Unidirectional data flow</h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`UI → dispatch(action)
   → reducer(state, action)
   → new state
   → UI re-renders`}
                    </code>
                </pre>

                <p className="text-sm text-neutral-500">
                    This strict flow makes applications easier to reason about
                    as they grow.
                </p>
            </section>
        </div>
    )
}
