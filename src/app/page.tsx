import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect to MCP Hub as the default homepage
  redirect('/mcp-hub')
}