export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-black mb-4 relative">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">VibeMCP</span>
          <sup className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent absolute top-1 ml-0.5">™</sup>
        </h1>
        <p className="text-xl text-muted-foreground">Test English Page Works!</p>
        <p className="mt-4">Route: /en</p>
      </div>
    </div>
  );
}