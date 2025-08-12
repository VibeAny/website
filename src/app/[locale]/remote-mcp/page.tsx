import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/ui/page-layout";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Server,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function RemoteMcpPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <PageLayout locale={locale} currentPath="/remote-mcp">
      {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <Badge
              className="mb-8 white-card px-6 py-2 ui-pulse-glow bg-green-50 text-green-600 border-green-200"
              variant="secondary"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold">Live & Available</span>
              </div>
            </Badge>
          </div>
          <div className="fade-in" style={{ animationDelay: "0.4s" }}>
            <h1 className="text-5xl font-black mb-6 text-gradient leading-tight max-w-4xl mx-auto">
              Remote MCP Services
            </h1>
          </div>
          <div className="fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Connect to our hosted MCP servers instantly. No setup required -
              just copy the URL and start using powerful integrations in your
              Claude conversations.
            </p>
          </div>
        </section>

        {/* Free Servers Grid */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Atlassian MCP Server */}
            <div className="fade-in" style={{ animationDelay: "0.3s" }}>
              <Card className="white-card border-0 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center group-hover:ui-pulse-glow transition-all">
                      <Server className="h-8 w-8 text-blue-500" />
                    </div>
                    <Badge className="bg-green-50 text-green-600 border-green-200 px-3 py-1">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Active
                      </div>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gradient">
                    Atlassian MCP Server
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Connect to Jira, Confluence, and other Atlassian services
                    with full API access
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>99.9% Uptime</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                      {t
                        .raw("freeServers.atlassian.features")
                        .map((feature: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ui-pulse-glow" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3 pt-4">
                      <Button size="sm" className="btn-modern flex-1">
                        Connect Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* GitHub MCP Server */}
            <div className="fade-in" style={{ animationDelay: "0.4s" }}>
              <Card className="white-card border-0 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center group-hover:ui-pulse-glow transition-all">
                      <Github className="h-8 w-8 text-gray-700" />
                    </div>
                    <Badge className="bg-green-50 text-green-600 border-green-200 px-3 py-1">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Active
                      </div>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gradient">
                    {t("freeServers.github.title")}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {t("freeServers.github.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{t("freeServers.github.uptime")}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                      {t
                        .raw("freeServers.github.features")
                        .map((feature: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-700 rounded-full ui-pulse-glow" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3 pt-4">
                      <Button size="sm" className="btn-modern flex-1">
                        {t("freeServers.github.connect")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AWS MCP Server */}
            <div className="fade-in" style={{ animationDelay: "0.5s" }}>
              <Card className="white-card border-0 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center group-hover:ui-pulse-glow transition-all">
                      <Server className="h-8 w-8 text-orange-500" />
                    </div>
                    <Badge className="bg-orange-50 text-orange-600 border-orange-200 px-3 py-1">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {t("freeServers.status.comingSoon")}
                      </div>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gradient">
                    {t("freeServers.aws.title")}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {t("freeServers.aws.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{t("freeServers.aws.eta")}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                      {t
                        .raw("freeServers.aws.features")
                        .map((feature: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full ui-pulse-glow" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button flex-1"
                        disabled
                      >
                        {t("freeServers.aws.notify")}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                        disabled
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Connect Section */}
        <section className="container mx-auto px-4 py-24 relative z-10">
          <div className="white-card rounded-3xl p-12">
            <div
              className="text-center mb-16 fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl font-black mb-6 text-gradient">
                {t("freeServers.howToConnect.title")}
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
                {t("freeServers.howToConnect.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="fade-in text-center"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-20 h-20 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow">
                  <span className="text-3xl font-black text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">
                  {t("freeServers.steps.step1.title")}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t("freeServers.steps.step1.description")}
                </p>
              </div>

              <div
                className="fade-in text-center"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-20 h-20 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow">
                  <span className="text-3xl font-black text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">
                  {t("freeServers.steps.step2.title")}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t("freeServers.steps.step2.description")}
                </p>
              </div>

              <div
                className="fade-in text-center"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-20 h-20 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow">
                  <span className="text-3xl font-black text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">
                  {t("freeServers.steps.step3.title")}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t("freeServers.steps.step3.description")}
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
                {t("freeServers.getStarted")}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}
