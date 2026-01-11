export default function Home() {
    return (
        <div className="space-y-8 max-w-2xl">
            <h1 className="text-3xl font-bold">
                React Minimal Handbook
            </h1>

            <p className="text-neutral-400">
                This application is a practical, hands-on guide to the most
                important concepts in React. It is designed to be read
                sequentially or used as a quick reference.
            </p>

            {/* Mental model */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                    Core Mental Model
                </h2>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>React builds UIs using small, reusable components.</li>
                    <li>Data flows from parent to child through props.</li>
                    <li>State changes trigger re-renders.</li>
                    <li>The UI is a function of state and props.</li>
                </ul>
            </section>

            {/* Syntax rules */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                    Syntax Rules to Remember
                </h2>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>JSX must return a single parent element.</li>
                    <li>JavaScript expressions go inside <code className="text-neutral-300">{`{ }`}</code>.</li>
                    <li>Use <code className="text-neutral-300">map</code> to render lists.</li>
                    <li>Always provide a stable <code className="text-neutral-300">key</code> when rendering lists.</li>
                </ul>
            </section>

            {/* Common shortcuts */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                    Common Patterns & Shortcuts
                </h2>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>Prefer arrow function components.</li>
                    <li>Destructure props in the function signature.</li>
                    <li>Use conditional rendering instead of hiding elements with CSS.</li>
                    <li>Keep components small and focused.</li>
                </ul>
            </section>

            {/* Rules of hooks */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                    Rules of Hooks
                </h2>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>Only call hooks at the top level.</li>
                    <li>Only call hooks inside React components or custom hooks.</li>
                    <li>Do not call hooks inside loops, conditions, or nested functions.</li>
                </ul>
            </section>

            {/* Navigation hint */}
            <p className="text-sm text-neutral-500">
                Use the sidebar to explore each topic in depth with
                interactive examples.
            </p>
        </div>
    )
}
