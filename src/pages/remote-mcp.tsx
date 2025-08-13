import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/ui/page-layout";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Server,
  ChevronDown,
  Cloud,
} from "lucide-react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import {
  remoteMcpServers,
  categoryColors,
  type RemoteMcpServer,
} from "@/data/remote-mcp-servers";
import { useState } from "react";

export default function RemoteMcpPage() {
  const { t } = useTranslation("common");
  const title = t("remoteMcp.title");

  // Protocol selection state
  const [selectedProtocol, setSelectedProtocol] = useState<
    Record<string, "http" | "sse">
  >({});

  // Get available protocols for a server
  const getAvailableProtocols = (server: RemoteMcpServer) => {
    return server.supportedProtocols;
  };

  // Get current protocol for a server
  const getCurrentProtocol = (serverId: string, server: RemoteMcpServer) => {
    const selected = selectedProtocol[serverId];
    if (selected && server.supportedProtocols.includes(selected)) {
      return selected;
    }
    // Default to first available protocol
    return server.supportedProtocols[0];
  };

  // Generate server URL based on selected protocol
  const getServerUrl = (serverId: string, server: RemoteMcpServer) => {
    const protocol = getCurrentProtocol(serverId, server);
    return server.urls[protocol] || "";
  };

  const generateCursorLink = (serverName: string, url: string) => {
    const config = btoa(JSON.stringify({ url }));
    return `cursor://anysphere.cursor-deeplink/mcp/install?name=${serverName.toLowerCase()}&config=${config}`;
  };

  const generateVSCodeLink = (serverName: string, url: string) => {
    // VS Code MCP extension deep link format
    const config = JSON.stringify({ name: serverName.toLowerCase(), url });
    return `vscode:mcp/install?${encodeURIComponent(config)}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleConnect = (action: string, serverName: string, url: string) => {
    switch (action) {
      case "cursor":
        window.open(generateCursorLink(serverName, url), "_self");
        break;
      case "vscode":
        window.open(generateVSCodeLink(serverName, url), "_self");
        break;
      case "copy":
        copyToClipboard(url);
        break;
    }
  };

  return (
    <>
      <Head>
        <title>{title} | VibeMCP</title>
        <meta
          name="description"
          content="Connect to public remote MCP servers instantly. No setup required - just copy the URL and start using powerful integrations in your AI conversations."
        />
        <meta
          name="keywords"
          content="Remote MCP, Public MCP servers, Model Context Protocol, GitHub MCP, Sentry MCP, Linear MCP, Claude AI integration, Third-party MCP services"
        />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Connect to public remote MCP servers instantly. No setup required - just copy the URL and start using powerful integrations in your AI conversations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://vibemcp.net/remote-mcp" />
        <meta property="og:site_name" content="VibeMCP" />
        <meta
          property="og:image"
          content="https://vibemcp.net/og-remote-mcp.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Remote MCP Services - Hosted Model Context Protocol Servers"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Connect to public remote MCP servers instantly. No setup required - just copy the URL and start using powerful integrations in your AI conversations."
        />
        <meta
          name="twitter:image"
          content="https://vibemcp.net/og-remote-mcp.png"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://vibemcp.net/remote-mcp" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
      </Head>

      <PageLayout currentPath="/remote-mcp">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <Badge
              className="mb-8 white-card px-6 py-2 ui-pulse-glow bg-gradient-to-r from-green-50 to-blue-50 text-blue-700 border-blue-200/50 shadow-lg"
              variant="secondary"
            >
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                <span className="font-semibold">
                  {t("remoteMcp.badge", {
                    defaultValue: "Remote MCP Services",
                  })}
                </span>
              </div>
            </Badge>
          </div>
          <div className="fade-in" style={{ animationDelay: "0.4s" }}>
            <h1 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-green-800 bg-clip-text text-transparent leading-tight max-w-5xl mx-auto">
              {t("remoteMcp.heading", { defaultValue: "Remote MCP Servers" })}
            </h1>
          </div>
          <div className="fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              {t("remoteMcp.subtitle", {
                defaultValue:
                  "Discover third-party hosted MCP servers ready for instant integration",
              })}
            </p>
          </div>

          {/* Quick Stats Bar */}
          <div
            className="fade-in max-w-2xl mx-auto"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex flex-wrap justify-center gap-6 mb-16 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>{remoteMcpServers.length} Active Servers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>7 Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>Instant Connect</span>
              </div>
            </div>
          </div>
        </section>

        {/* Servers Grid */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            {remoteMcpServers.map((server, index) => (
              <div
                key={server.id}
                className="fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Card className="white-card border-0 p-6 rounded-2xl transition-none hover:shadow-md hover:shadow-gray-200/50">
                  <div className="flex items-start space-x-5">
                    {/* Logo */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                      {server.icon === "Github" ? (
                        <Github className="h-7 w-7 text-gray-600" />
                      ) : (
                        <Server className="h-7 w-7 text-gray-600" />
                      )}
                    </div>

                    {/* Server details - optimized layout */}
                    <div className="flex-1 min-w-0">
                      {/* Header row with title, badges, and external link */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-bold text-foreground">
                            {server.name}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant="secondary"
                              className={`text-xs px-2 py-1 font-semibold ${
                                categoryColors[server.category]
                              } rounded-full`}
                            >
                              {server.category}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className={`text-xs px-2 py-1 font-semibold rounded-full ${
                                server.authType === "oauth"
                                  ? "bg-blue-50 text-blue-600 border-blue-200"
                                  : server.authType === "open"
                                  ? "bg-green-50 text-green-600 border-green-200"
                                  : "bg-gray-50 text-gray-600 border-gray-200"
                              }`}
                            >
                              {server.authType}
                            </Badge>
                          </div>
                        </div>
                        {server.documentationUrl && (
                          <a
                            href={server.documentationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-3"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                        {server.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {server.features.slice(0, 4).map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Connection controls - left protocol+URL, right connect button */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center space-x-2 flex-1">
                          {/* Protocol selector */}
                          <div className="relative flex-shrink-0">
                            <select
                              className={`w-full pl-3 pr-8 py-1.5 text-xs border rounded-md font-medium appearance-none min-w-[60px] h-8 focus:outline-none transition-all ${
                                server.supportedProtocols.length === 1
                                  ? "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-60"
                                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-foreground cursor-pointer hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary/20"
                              }`}
                              value={getCurrentProtocol(server.id, server)}
                              onChange={(e) =>
                                setSelectedProtocol((prev) => ({
                                  ...prev,
                                  [server.id]: e.target.value as "http" | "sse",
                                }))
                              }
                              disabled={server.supportedProtocols.length === 1}
                            >
                              {getAvailableProtocols(server).map((protocol) => (
                                <option key={protocol} value={protocol}>
                                  {protocol}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              className={`absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 pointer-events-none ${
                                server.supportedProtocols.length === 1
                                  ? "text-gray-400 dark:text-gray-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </div>

                          {/* URL display - takes remaining space */}
                          <div className="flex-1 min-w-[200px]">
                            <input
                              type="text"
                              value={getServerUrl(server.id, server)}
                              readOnly
                              className="w-full px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-mono"
                              title={getServerUrl(server.id, server)}
                            />
                          </div>
                        </div>

                        {/* Connect button - right aligned */}
                        <div className="relative flex-shrink-0">
                          <select
                            className="w-full pl-4 pr-8 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-purple-600 border-0 rounded-md font-semibold text-white appearance-none cursor-pointer min-w-[100px] h-8 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                            onChange={(e) => {
                              if (e.target.value) {
                                handleConnect(
                                  e.target.value,
                                  server.name,
                                  getServerUrl(server.id, server)
                                );
                                e.target.value = ""; // Reset selection after action
                              }
                            }}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Connect
                            </option>
                            <option value="cursor">Add to Cursor</option>
                            <option value="vscode">Add to VS Code</option>
                            <option value="copy">Copy URL</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-white pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Overview */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="white-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">
                {remoteMcpServers.length}+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Remote Servers
              </div>
            </div>
            <div className="white-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">
                7
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Categories
              </div>
            </div>
            <div className="white-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">
                OAuth
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Secure Auth
              </div>
            </div>
            <div className="white-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">
                24/7
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Availability
              </div>
            </div>
          </div>
        </section>

        {/* How to Connect */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-green-800 bg-clip-text text-transparent leading-tight">
              How to Connect
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Connect to third-party hosted MCP servers in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div
              className="fade-in text-center"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-20 h-20 white-card rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow shadow-lg">
                <span className="text-3xl font-black text-gradient">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Choose Server
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Browse and select from our curated directory of third-party MCP
                servers
              </p>
            </div>

            <div
              className="fade-in text-center"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-20 h-20 white-card rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow shadow-lg">
                <span className="text-3xl font-black text-gradient">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Configure Client
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Click &quot;Connect&quot; and choose your preferred client
                (Cursor, VS Code) or copy the URL
              </p>
            </div>

            <div
              className="fade-in text-center"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-20 h-20 white-card rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow shadow-lg">
                <span className="text-3xl font-black text-gradient">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Start Using
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Restart your client and start using the MCP server features in
                your conversations
              </p>
            </div>
          </div>

          <div
            className="text-center mt-12 fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="btn-modern px-10 py-4 text-lg font-semibold"
            >
              Explore Local Servers
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
