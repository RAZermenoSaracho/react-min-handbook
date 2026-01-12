import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../../store"
import { increment, decrement, reset } from "../../store/counterSlice"
import { toggleTheme } from "../../store/themeSlice"

export default function ReduxStore() {
    const dispatch = useDispatch<AppDispatch>()

    const count = useSelector((state: RootState) => state.counter.value)
    const theme = useSelector((state: RootState) => state.theme.mode)

    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">Redux Store</h1>

            <p className="text-neutral-400">
                This page shows how multiple independent slices can live inside
                a single Redux store and be consumed by React components.
            </p>

            {/* ================= WHAT THIS PAGE DEMONSTRATES ================= */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                    What this page demonstrates
                </h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>Global state lives outside React components</li>
                    <li>Components read state using selectors</li>
                    <li>State updates happen through dispatched actions</li>
                    <li>Multiple slices coexist without interfering</li>
                </ul>
            </section>

            {/* ================= COUNTER SLICE ================= */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Counter slice</h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`const count = useSelector(
  (state: RootState) => state.counter.value
)

dispatch(increment())
dispatch(decrement())
dispatch(reset())`}
                    </code>
                </pre>

                <p className="text-green-400 text-xl">
                    Counter value: {count}
                </p>

                <div className="flex items-center gap-3">
                    <button
                        className="px-4 py-2 bg-blue-600 rounded"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>

                    <button
                        className="px-4 py-2 bg-neutral-700 rounded"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>

                    <button
                        className="px-4 py-2 bg-red-600 rounded"
                        onClick={() => dispatch(reset())}
                    >
                        Reset
                    </button>
                </div>

                <p className="text-sm text-neutral-500">
                    The component does not manage this state locally. Redux owns
                    the data and controls how it changes.
                </p>
            </section>

            {/* ================= THEME SLICE ================= */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Theme slice</h2>

                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`const theme = useSelector(
  (state: RootState) => state.theme.mode
)

dispatch(toggleTheme())`}
                    </code>
                </pre>

                <p className="text-green-400">
                    Current theme (Redux): {theme}
                </p>

                <button
                    className="px-4 py-2 bg-purple-600 rounded"
                    onClick={() => dispatch(toggleTheme())}
                >
                    Toggle theme
                </button>

                <p className="text-sm text-neutral-500">
                    UI-related state can also live in Redux when it needs to be
                    shared consistently across the application.
                </p>
            </section>

            {/* ================= KEY IDEA ================= */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">Key idea</h2>

                <p className="text-neutral-400">
                    Redux centralizes state and enforces explicit updates through
                    actions and reducers.
                </p>

                <p className="text-sm text-neutral-500">
                    This structure scales well as applications grow and state
                    logic becomes more complex.
                </p>
            </section>
        </div>
    )
}
