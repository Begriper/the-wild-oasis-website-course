export default function Page() {
  return (
    <main className="mt-24">
      <img src="/bg.png" alt="Mountains and forests with two cabins" />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 font-normal tracking-tight text-8xl text-primary-50">
          Welcome to paradise.
        </h1>
        <a
          href="/cabins"
          className="px-8 py-6 text-lg font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600"
        >
          Explore luxury cabins
        </a>
      </div>
    </main>
  );
}
