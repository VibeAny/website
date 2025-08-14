// Remote MCP Servers Data from mcpservers.org
export interface RemoteMcpServer {
  id: string;
  name: string;
  description: string;
  category: 'development' | 'productivity' | 'payment' | 'web' | 'data' | 'communication' | 'utility';
  supportedProtocols: ('http' | 'sse')[];
  urls: {
    http?: string;
    sse?: string;
  };
  authType: 'oauth' | 'open' | 'apikey';
  status: 'active' | 'beta';
  icon: string;
  features: string[];
  documentationUrl?: string;
  githubUrl?: string;
}

export const remoteMcpServers: RemoteMcpServer[] = [
  // Development Tools
  {
    id: 'github',
    name: 'GitHub',
    description: "GitHub's official MCP Server",
    category: 'development',
    supportedProtocols: ['http'],
    urls: {
      http: 'https://api.githubcopilot.com/mcp/'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Github',
    features: [
      'Repository management',
      'Issue tracking', 
      'Pull request operations',
      'GitHub Actions integration'
    ],
    documentationUrl: 'https://github.com/github/github-mcp-server',
    githubUrl: 'https://github.com/github/github-mcp-server'
  },
  {
    id: 'sentry',
    name: 'Sentry',
    description: 'Sentry is a developer-first error tracking and performance monitoring platform.',
    category: 'development',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.sentry.dev/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Error tracking',
      'Performance monitoring',
      'Issue management',
      'Release tracking'
    ],
    documentationUrl: 'https://mcp.sentry.dev/'
  },
  {
    id: 'linear',
    name: 'Linear',
    description: 'Linear is a project management tool.',
    category: 'productivity',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.linear.app/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Issue tracking',
      'Project management',
      'Sprint planning',
      'Team workflows'
    ],
    documentationUrl: 'https://linear.app/changelog/2025-05-01-mcp'
  },
  {
    id: 'deepwiki',
    name: 'DeepWiki',
    description: 'DeepWiki automatically generates architecture diagrams, documentation, and links to source code to help you understand unfamiliar codebases quickly.',
    category: 'development',
    supportedProtocols: ['http', 'sse'],
    urls: {
      http: 'https://mcp.deepwiki.com/mcp',
      sse: 'https://mcp.deepwiki.com/sse'
    },
    authType: 'open',
    status: 'active',
    icon: 'Server',
    features: [
      'Code analysis',
      'Architecture diagrams',
      'Documentation generation',
      'Codebase understanding'
    ],
    documentationUrl: 'https://docs.devin.ai/work-with-devin/deepwiki-mcp'
  },
  {
    id: 'intercom',
    name: 'Intercom',
    description: 'Intercom is a customer support platform.',
    category: 'communication',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.intercom.com/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Customer support',
      'Live chat',
      'Knowledge base',
      'User engagement'
    ],
    documentationUrl: 'https://www.intercom.com/blog/introducing-model-context-protocol-fin/'
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Neon is a fully managed serverless PostgreSQL.',
    category: 'data',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.neon.tech/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Database management',
      'Query execution',
      'Schema operations',
      'Performance insights'
    ],
    documentationUrl: 'https://neon.tech/docs/ai/neon-mcp-server'
  },
  
  // Payment Platforms
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'PayPal is a global online payment system.',
    category: 'payment',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.paypal.com/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Payment processing',
      'Transaction management',
      'Account information',
      'Payment history'
    ],
    documentationUrl: 'https://developer.paypal.com/limited-release/agents/'
  },
  {
    id: 'square',
    name: 'Square',
    description: 'Square is a payment processing platform.',
    category: 'payment',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.squareup.com/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Payment processing',
      'Point of sale',
      'Inventory management',
      'Customer management'
    ],
    documentationUrl: 'https://developer.squareup.com/docs/mcp'
  },
  
  {
    id: 'coingecko',
    name: 'CoinGecko',
    description: 'CoinGecko is a cryptocurrency data platform.',
    category: 'data',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.api.coingecko.com/sse'
    },
    authType: 'open',
    status: 'active',
    icon: 'Server',
    features: [
      'Cryptocurrency data',
      'Market information',
      'Price tracking',
      'Market analysis'
    ],
    documentationUrl: 'https://mcp.api.coingecko.com/'
  },
  {
    id: 'asana',
    name: 'Asana',
    description: 'Asana is a project management tool.',
    category: 'productivity',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.asana.com/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Project management',
      'Task tracking',
      'Team collaboration',
      'Workflow automation'
    ],
    documentationUrl: 'https://developers.asana.com/docs/using-asanas-model-control-protocol-mcp-server'
  },
  {
    id: 'atlassian',
    name: 'Atlassian',
    description: 'Collaboration software for software, IT and business teams',
    category: 'productivity',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.atlassian.com/v1/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Jira issue management',
      'Confluence documentation',
      'Agile board management', 
      'Team collaboration'
    ],
    documentationUrl: 'https://www.atlassian.com/platform/remote-mcp-server'
  },
  {
    id: 'wix',
    name: 'Wix',
    description: 'Wix is a website builder.',
    category: 'web',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.wix.com/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Website creation',
      'Template management',
      'E-commerce tools',
      'SEO optimization'
    ],
    documentationUrl: 'https://www.wix.com/studio/developers/mcp-server'
  },
  {
    id: 'webflow',
    name: 'Webflow',
    description: 'Visual website builder',
    category: 'web',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.webflow.com/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Website building',
      'CMS management',
      'E-commerce integration',
      'Design systems'
    ],
    documentationUrl: 'https://developers.webflow.com/data/docs/ai-tools'
  },
  {
    id: 'globalping',
    name: 'Globalping',
    description: 'Remote MCP server that gives LLMs access to run network commands with Globalping',
    category: 'utility',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.globalping.dev/sse'
    },
    authType: 'oauth',
    status: 'active',
    icon: 'Server',
    features: [
      'Network monitoring',
      'Global ping tests',
      'Traceroute analysis',
      'Network diagnostics'
    ],
    githubUrl: 'https://github.com/jsdelivr/globalping-mcp-server'
  },
  {
    id: 'semgrep',
    name: 'Semgrep',
    description: 'Semgrep is a static analysis tool for code security and quality.',
    category: 'development',
    supportedProtocols: ['sse'],
    urls: {
      sse: 'https://mcp.semgrep.ai/sse'
    },
    authType: 'open',
    status: 'active',
    icon: 'Server',
    features: [
      'Code security scanning',
      'Quality analysis',
      'Vulnerability detection',
      'Rule management'
    ],
    githubUrl: 'https://github.com/semgrep/mcp?tab=readme-ov-file#hosted-server'
  },
  
  // Utilities (HTTP only)
  {
    id: 'fetch',
    name: 'Fetch',
    description: 'An MCP server that provides web content fetching capabilities. This server enables LLMs to retrieve and process content from web pages, converting HTML to markdown for easier consumption.',
    category: 'utility',
    supportedProtocols: ['http'],
    urls: {
      http: 'https://remote.mcpservers.org/fetch/mcp'
    },
    authType: 'open',
    status: 'active',
    icon: 'Server',
    features: [
      'Web content fetching',
      'HTML to markdown conversion',
      'Content processing',
      'URL extraction'
    ]
  },
  {
    id: 'sequential-thinking',
    name: 'Sequential Thinking',
    description: 'An MCP server implementation that provides a tool for dynamic and reflective problem-solving through a structured thinking process.',
    category: 'utility',
    supportedProtocols: ['http'],
    urls: {
      http: 'https://remote.mcpservers.org/sequentialthinking/mcp'
    },
    authType: 'open',
    status: 'active',
    icon: 'Server',
    features: [
      'Structured thinking',
      'Problem solving',
      'Reflective analysis',
      'Dynamic processing'
    ]
  },
  {
    id: 'edgeone-pages',
    name: 'EdgeOne Pages',
    description: 'An MCP service designed for deploying HTML content to EdgeOne Pages and obtaining an accessible public URL.',
    category: 'web',
    supportedProtocols: ['http'],
    urls: {
      http: 'https://remote.mcpservers.org/edgeone-pages/mcp'
    },
    authType: 'open',
    status: 'active',
    icon: 'Server',
    features: [
      'HTML deployment',
      'Public URL generation',
      'EdgeOne integration',
      'Content hosting'
    ]
  }
];

export const categoryLabels = {
  development: 'Development',
  productivity: 'Productivity', 
  payment: 'Payment',
  web: 'Web Development',
  data: 'Data & Analytics',
  communication: 'Communication',
  utility: 'Utilities'
};

export const categoryColors = {
  development: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700',
  productivity: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  payment: 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700',
  web: 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-700',
  data: 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-700',
  communication: 'bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-700',
  utility: 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-600'
};