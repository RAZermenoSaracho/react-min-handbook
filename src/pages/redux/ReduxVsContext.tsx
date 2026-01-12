export default function ReduxVsContext() {
    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">Redux vs Context</h1>

            <p className="text-neutral-400">
                Redux and Context are often compared, but they solve different
                problems and operate at different levels of abstraction.
            </p>

            {/* ================= CORE DIFFERENCE ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">
                    Core difference
                </h2>

                <p className="text-neutral-400">
                    Context is a way to <em>pass data</em>. Redux is a way to
                    <em>structure state</em>.
                </p>
            </section>

            {/* ================= COMPARISON ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Conceptual comparison</h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`Context:
- Data transport mechanism
- Minimal structure
- No enforced update pattern
- Easy to overuse

Redux:
- State architecture
- Explicit actions & reducers
- Predictable updates
- Excellent debugging tools`}
                    </code>
                </pre>
            </section>

            {/* ================= SAME PROBLEM ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">
                    Same problem, different tools
                </h2>

                <p className="text-neutral-400">
                    In this handbook, theme management is implemented twice:
                </p>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>
                        Using <strong>Context API</strong> for simple shared UI state
                    </li>
                    <li>
                        Using <strong>Redux</strong> to demonstrate structured global state
                    </li>
                </ul>

                <p className="text-sm text-neutral-500">
                    Both approaches work. The trade-off is simplicity versus structure.
                </p>
            </section>

            {/* ================= WHEN TO USE ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">When to use each</h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>
                        Use <strong>Context</strong> for small, stable global values
                        (themes, locale, auth flags).
                    </li>
                    <li>
                        Use <strong>Redux</strong> when state updates are frequent,
                        complex, or come from many places.
                    </li>
                    <li>
                        Redux is ideal when traceability and debugging matter.
                    </li>
                </ul>
            </section>

            {/* ================= KEY TAKEAWAY ================= */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">Key takeaway</h2>

                <p className="text-neutral-400">
                    Context removes prop drilling. Redux enforces discipline.
                </p>

                <p className="text-sm text-neutral-500">
                    Start with Context. Introduce Redux when complexity justifies it.
                </p>
            </section>
        </div>
    )
}
