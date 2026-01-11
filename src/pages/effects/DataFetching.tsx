import { useEffect, useState } from "react"

type CoinGeckoResponse = {
    bitcoin: {
        usd: number
    }
}

export default function DataFetching() {
    /* ================= FETCH STATE ================= */
    const [price, setPrice] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    /* ================= WEBSOCKET STATE ================= */
    const [livePrice, setLivePrice] = useState<string | null>(null)

    /* ================= FETCH (HTTP / PULL) ================= */
    useEffect(() => {
        const controller = new AbortController()

        async function fetchPrice() {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
                    { signal: controller.signal }
                )

                if (!response.ok) {
                    throw new Error("Failed to fetch price")
                }

                const data: CoinGeckoResponse = await response.json()
                setPrice(data.bitcoin.usd.toString())
            } catch (err) {
                if (err instanceof Error && err.name !== "AbortError") {
                    setError(err.message)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchPrice()

        return () => {
            // Cleanup: cancel fetch if component unmounts
            controller.abort()
        }
    }, [])

    /* ================= WEBSOCKET (PUSH) ================= */
    useEffect(() => {
        const socket = new WebSocket(
            "wss://stream.binance.com:9443/ws/btcusdt@trade"
        )

        socket.onmessage = event => {
            const data = JSON.parse(event.data)
            setLivePrice(data.p)
        }

        socket.onerror = () => {
            console.error("WebSocket error")
        }

        return () => {
            // Cleanup: close connection
            socket.close()
        }
    }, [])

    return (
        <div className="space-y-12 max-w-2xl">
            <h1 className="text-2xl font-bold">
                Fetching Data & Real-Time Updates
            </h1>

            <p className="text-neutral-400">
                This page demonstrates two different ways of synchronizing React
                with external data using <code className="text-neutral-300">useEffect</code>.
            </p>

            {/* ================= NETWORK BEHAVIOR NOTE ================= */}
            <section className="space-y-2 rounded border border-yellow-800 bg-yellow-950/30 p-4">
                <h2 className="text-sm font-semibold text-yellow-400">
                    ⚠️ Important note about network behavior
                </h2>

                <p className="text-sm text-neutral-300">
                    External APIs and WebSocket connections depend on network conditions.
                    Errors shown in the browser console do not always indicate broken React
                    logic.
                </p>

                <p className="text-sm text-neutral-300">
                    Firewalls, DNS resolution, VPNs, corporate networks, or React Strict Mode
                    can cause warnings even when data continues to flow correctly.
                </p>
            </section>

            {/* ================= FETCH SECTION ================= */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                    Fetching data (HTTP / Pull)
                </h2>

                <p className="text-neutral-400">
                    Fetching data uses a request-response model. The effect runs
                    once, requests data, and updates state when the response arrives.
                </p>

                {/* CODE */}
                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`useEffect(() => {
  const controller = new AbortController()

  async function fetchPrice() {
    const response = await fetch(url, {
      signal: controller.signal
    })
    const data = await response.json()
    setPrice(data)
  }

  fetchPrice()

  return () => controller.abort()
}, [])`}
                    </code>
                </pre>

                {/* LIVE */}
                <div className="rounded border border-neutral-800 p-4 space-y-2">
                    {loading && <p className="text-neutral-400">Loading...</p>}
                    {error && <p className="text-red-400">{error}</p>}
                    {price && (
                        <p className="text-green-400">
                            BTC price (HTTP): ${price}
                        </p>
                    )}
                </div>
            </section>

            {/* ================= WEBSOCKET SECTION ================= */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                    WebSocket (Real-time / Push)
                </h2>

                <p className="text-neutral-400">
                    WebSockets keep a persistent connection open. Data is pushed
                    from the server whenever it changes.
                </p>

                {/* CODE */}
                <pre className="rounded bg-neutral-900 p-4 text-sm text-neutral-300 overflow-x-auto">
                    <code>
                        {`useEffect(() => {
  const socket = new WebSocket(url)

  socket.onmessage = event => {
    setLivePrice(JSON.parse(event.data).p)
  }

  return () => socket.close()
}, [])`}
                    </code>
                </pre>

                {/* LIVE */}
                <div className="rounded border border-neutral-800 p-4">
                    {livePrice ? (
                        <p className="text-green-400">
                            BTC price (live): ${livePrice}
                        </p>
                    ) : (
                        <p className="text-neutral-400">
                            Connecting to WebSocket...
                        </p>
                    )}
                </div>

                <p className="text-sm text-neutral-500">
                    Note: HTTP requests may fail due to DNS issues, API downtime, or network
                    restrictions. This does not indicate a problem with{" "}
                    <code className="text-neutral-300">useEffect</code>.
                </p>

            </section>

            <section className="space-y-2 rounded border border-neutral-800 bg-neutral-900/40 p-4">
                <h3 className="text-sm font-semibold text-neutral-200">
                    Why do WebSocket errors appear even when data updates?
                </h3>

                <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                    <li>
                        WebSocket servers may reject or close connections during the initial
                        handshake.
                    </li>
                    <li>
                        Some networks block <code className="text-neutral-300">wss://</code>{" "}
                        traffic.
                    </li>
                    <li>
                        Browser WebSocket errors are generic and do not always mean failure.
                    </li>
                    <li>
                        In development mode, React Strict Mode intentionally mounts and unmounts
                        components twice.
                    </li>
                </ul>

                <p className="text-sm text-neutral-400">
                    If live data continues to update, the connection is working despite the
                    warning.
                </p>
            </section>

            <section className="space-y-2">
                <h3 className="text-sm font-semibold text-neutral-300">
                    React Strict Mode (development only)
                </h3>

                <pre className="rounded bg-neutral-900 p-3 text-xs text-neutral-400 overflow-x-auto">
                    <code>
                        {`<React.StrictMode>
  <App />
</React.StrictMode>`}
                    </code>
                </pre>

                <p className="text-sm text-neutral-400">
                    In development, React intentionally runs effects twice to detect
                    side effects. This can cause WebSocket connections to open and close
                    immediately, producing console warnings.
                </p>

                <p className="text-sm text-neutral-500">
                    This behavior does not occur in production builds.
                </p>

                <p className="text-sm text-neutral-500">
                    Console warnings are not always bugs. Always validate behavior by
                    observing UI updates and data flow.
                </p>

            </section>

            {/* ================= SUMMARY ================= */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                    Key differences
                </h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>
                        Fetch uses a <strong>pull</strong> model (request-response).
                    </li>
                    <li>
                        WebSocket uses a <strong>push</strong> model (live updates).
                    </li>
                    <li>
                        Both rely on <code className="text-neutral-300">useEffect</code>
                        for lifecycle management.
                    </li>
                    <li>
                        Cleanup logic is mandatory in both cases.
                    </li>
                </ul>
            </section>

            <p className="text-sm text-neutral-500">
                If you forget cleanup logic in effects, you will eventually
                create memory leaks or duplicated subscriptions.
            </p>
        </div>
    )
}
