import { useState } from "react"

import Card from "../../components/ui/Card"
import ExampleBox from "../../components/ui/ExampleBox"
import Input from "../../components/ui/Input"

type GreetingProps = {
    name: string
}

function Greeting({ name }: GreetingProps) {
    return (
        <p className="text-green-400">
            Hello, {name || "stranger"}!
        </p>
    )
}

export default function PropsAndChildren() {
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)

    return (
        <div className="space-y-10 max-w-2xl">
            <h1 className="text-2xl font-bold">Props & Children</h1>

            <p className="text-neutral-400">
                Props allow components to receive data from their parent.
                Children allow components to receive dynamic content.
            </p>

            {/* ================= PROPS + STATE ================= */}
            <Card title="Props example (dynamic)">
                <ExampleBox description="State lives in the parent and is passed as a prop to a child component.">
                    <div className="space-y-6">
                        {/* CODE */}
                        <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                            <code>
                                {`const [name, setName] = useState("")

<Input
  value={name}
  onChange={event => setName(event.target.value)}
/>

<Greeting name={name} />`}
                            </code>
                        </pre>

                        {/* LIVE */}
                        <Input
                            id="name"
                            label="Your name"
                            placeholder="Type your name..."
                            value={name}
                            onChange={event => setName(event.target.value)}
                            hint="This value is passed as a prop"
                        />

                        <Greeting name={name} />
                    </div>
                </ExampleBox>
            </Card>

            {/* ================= CHILDREN ================= */}
            <Card title="Children example">
                <ExampleBox description="Components can receive arbitrary JSX using the children prop.">
                    <div className="space-y-6">
                        {/* CODE */}
                        <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                            <code>
                                {`<Card>
  <button onClick={() => setCount(prev => prev + 1)}>
    Increment
  </button>

  <span>{count}</span>
</Card>`}
                            </code>
                        </pre>

                        {/* LIVE */}
                        <div className="space-y-2">
                            <p>This content is passed as children.</p>
                            <div className="flex items-center gap-4">
                                <button
                                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
                                    onClick={() => setCount(prev => prev + 1)}
                                >
                                    Increment
                                </button>

                                <span className="text-xl">{count}</span>
                            </div>
                        </div>
                    </div>
                </ExampleBox>
            </Card>
        </div>
    )
}
