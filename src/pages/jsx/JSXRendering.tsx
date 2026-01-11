const topics = ["JSX", "Rendering", "Components", "Hooks"]

export default function JSXRendering() {
    const isLoggedIn = true

    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">JSX & Rendering</h1>

            <p className="text-neutral-400">
                JSX allows you to write HTML-like syntax inside JavaScript.
                It lets you embed expressions, render lists, and conditionally
                display UI based on state.
            </p>

            {/* JSX expressions */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">JSX Expressions</h2>

                <p className="text-neutral-400">
                    Any JavaScript expression can be embedded inside JSX using
                    curly braces.
                </p>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-200 overflow-x-auto">
                    <code>
                        {`const name = "React";

<h1>Hello, {name}!</h1>`}
                    </code>
                </pre>

                <p className="text-green-400">
                    Hello, React!
                </p>
            </section>

            {/* Rendering lists */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Rendering Lists</h2>

                <p className="text-neutral-400">
                    Use <code className="text-neutral-300">map</code> to render
                    lists of elements. Always provide a stable{" "}
                    <code className="text-neutral-300">key</code>.
                </p>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-200 overflow-x-auto">
                    <code>
                        {`const topics = ["JSX", "Rendering", "Components", "Hooks"];

<ul>
  {topics.map(topic => (
    <li key={topic}>{topic}</li>
  ))}
</ul>`}
                    </code>
                </pre>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    {topics.map(topic => (
                        <li key={topic}>{topic}</li>
                    ))}
                </ul>
            </section>

            {/* Conditional rendering */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Conditional Rendering</h2>

                <p className="text-neutral-400">
                    Use JavaScript conditions to control what gets rendered.
                    Avoid hiding elements with CSS when possible.
                </p>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-200 overflow-x-auto">
                    <code>
                        {`const isLoggedIn = true;

{isLoggedIn ? (
  <p>Welcome back!</p>
) : (
  <p>Please sign in.</p>
)}`}
                    </code>
                </pre>

                {isLoggedIn ? (
                    <p className="text-green-400">Welcome back!</p>
                ) : (
                    <p className="text-yellow-400">Please sign in.</p>
                )}
            </section>

            {/* Summary */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Key Takeaways</h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>JSX is syntactic sugar for JavaScript function calls.</li>
                    <li>You can embed any JavaScript expression inside JSX.</li>
                    <li>
                        Lists are rendered using{" "}
                        <code className="text-neutral-300">map</code>.
                    </li>
                    <li>UI output is controlled by data, not manual DOM updates.</li>
                </ul>
            </section>
        </div>
    )
}
