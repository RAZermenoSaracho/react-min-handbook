import { useTheme } from "../../context/useTheme"

export default function UseContext() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">useContext</h1>

            <p className="text-neutral-400">
                <code className="text-neutral-300">useContext</code> allows components to
                read shared state directly from a context, without passing props
                through intermediate components.
            </p>

            {/* ================= WHAT THIS PAGE DEMONSTRATES ================= */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                    What this page demonstrates
                </h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>
                        How shared state can live outside the component tree.
                    </li>
                    <li>
                        How components can consume that state using a custom hook.
                    </li>
                    <li>
                        How <code className="text-neutral-300">useContext</code>{" "}
                        eliminates prop drilling.
                    </li>
                </ul>
            </section>

            {/* ================= THE PROBLEM ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">
                    The problem: prop drilling
                </h2>

                <p className="text-neutral-400">
                    Without context, shared values like themes or user sessions
                    must be passed down through every level of the component tree,
                    even if intermediate components do not use them.
                </p>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`<Page theme={theme}>
  <Card theme={theme}>
    <Button theme={theme} />
  </Card>
</Page>`}
                    </code>
                </pre>

                <p className="text-sm text-neutral-500">
                    Only the Button needs the theme, but every component must
                    receive it as a prop.
                </p>
            </section>

            {/* ================= THE SOLUTION ================= */}
            <section className="space-y-3">
                <h2 className="text-lg font-semibold">
                    The solution: Context API
                </h2>

                <p className="text-neutral-400">
                    Context allows you to store shared state in a provider and
                    access it anywhere in the tree using{" "}
                    <code className="text-neutral-300">useContext</code>.
                </p>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`const ThemeContext = createContext(...)

function useTheme() {
  return useContext(ThemeContext)
}`}
                    </code>
                </pre>
            </section>

            {/* ================= LIVE EXAMPLE ================= */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">
                    Live example
                </h2>

                <p className="text-neutral-400">
                    The component below reads and updates the theme directly from
                    context. No props are passed.
                </p>

                <div className="rounded border border-neutral-800 p-4 space-y-3">
                    <p className="text-green-400">
                        Current theme: {theme}
                    </p>

                    <button
                        className="px-4 py-2 bg-blue-600 rounded"
                        onClick={toggleTheme}
                    >
                        Toggle theme
                    </button>
                </div>

                <p className="text-sm text-neutral-500">
                    Any component using <code className="text-neutral-300">useTheme</code>{" "}
                    will automatically re-render when the theme changes.
                </p>
            </section>

            {/* ================= KEY TAKEAWAY ================= */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                    Key takeaway
                </h2>

                <p className="text-neutral-400">
                    <code className="text-neutral-300">useContext</code>{" "}
                    is ideal for global concerns such as themes, authentication,
                    language settings, or feature flags.
                </p>

                <p className="text-sm text-neutral-500">
                    Context is not a replacement for all state. Use it when
                    many components need the same data.
                </p>
            </section>
        </div>
    )
}
