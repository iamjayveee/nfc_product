import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CopyButton } from "@/components/CopyButton";
import { loadHub } from "../cafe";

export default function WifiPage(props: PageProps<"/h/[slug]/wifi">) {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-4 px-4 py-10">
      <Suspense fallback={<p className="text-muted">Loading…</p>}>
        <Wifi {...props} />
      </Suspense>
    </main>
  );
}

async function Wifi(props: PageProps<"/h/[slug]/wifi">) {
  const { cafe, query } = await loadHub(props);
  if (!cafe.wifiSsid) notFound();
  return (
    <>
      <a href={`/h/${cafe.slug}${query}`} className="text-muted">
        ← {cafe.name}
      </a>
      <h1 className="text-2xl font-semibold">WiFi</h1>
      <dl className="flex flex-col gap-1 rounded-lg bg-surface p-4">
        <dt className="text-sm text-muted">Network</dt>
        <dd className="text-lg font-medium">{cafe.wifiSsid}</dd>
        {cafe.wifiPassword && (
          <>
            <dt className="mt-2 text-sm text-muted">Password</dt>
            <dd className="font-mono text-lg">{cafe.wifiPassword}</dd>
          </>
        )}
      </dl>
      {cafe.wifiPassword && <CopyButton text={cafe.wifiPassword} label="Copy password" />}
      <p className="text-sm text-muted">Open your phone&apos;s WiFi settings, choose the network, and paste the password.</p>
    </>
  );
}
