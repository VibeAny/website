// Google Analytics 4 tracking utilities for VibeMCP.net

// 扩展 Window 接口以支持 gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config?: Record<string, any>
    ) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}

// GA4 事件参数类型
export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: {
    [key: string]: string | number | boolean;
  };
}

// 页面浏览事件参数
export interface GAPageView {
  page_title: string;
  page_location: string;
  page_path: string;
}

// 检查 GA 是否可用
export const isGAAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.gtag === 'function' && 
         process.env.NODE_ENV === 'production';
};

/**
 * 发送页面浏览事件
 * @param pageView 页面信息
 */
export const trackPageView = (pageView: Partial<GAPageView> = {}): void => {
  if (!isGAAvailable()) return;

  const defaultPageView: GAPageView = {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...pageView,
  };

  window.gtag('event', 'page_view', defaultPageView);
};

/**
 * 发送自定义事件
 * @param event 事件信息
 */
export const trackEvent = (event: GAEvent): void => {
  if (!isGAAvailable()) return;

  const { action, category, label, value, custom_parameters } = event;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    ...custom_parameters,
  });
};

/**
 * 预定义的 VibeMCP.net 事件追踪函数
 */
export const trackVibeMCPEvents = {
  // MCP 服务器相关事件
  viewMCPServer: (serverName: string, serverCategory?: string) => {
    trackEvent({
      action: 'view_mcp_server',
      category: 'MCP_Server',
      label: serverName,
      custom_parameters: {
        server_category: serverCategory || 'unknown'
      }
    });
  },

  searchMCPServers: (searchTerm: string, resultsCount: number) => {
    trackEvent({
      action: 'search_mcp_servers',
      category: 'Search',
      label: searchTerm,
      value: resultsCount
    });
  },

  filterMCPServers: (filterType: string, filterValue: string) => {
    trackEvent({
      action: 'filter_mcp_servers',
      category: 'Filter',
      label: `${filterType}:${filterValue}`
    });
  },

  // 用户交互事件
  changeLanguage: (language: string) => {
    trackEvent({
      action: 'change_language',
      category: 'User_Interaction',
      label: language
    });
  },

  toggleTheme: (theme: string) => {
    trackEvent({
      action: 'toggle_theme',
      category: 'User_Interaction',
      label: theme
    });
  },

  // 外部链接点击
  clickExternalLink: (linkUrl: string, linkText?: string) => {
    trackEvent({
      action: 'click_external_link',
      category: 'External_Links',
      label: linkUrl,
      custom_parameters: {
        link_text: linkText || ''
      }
    });
  },

  // 页面停留时间追踪（用户离开时调用）
  trackTimeOnPage: (pageTitle: string, timeInSeconds: number) => {
    trackEvent({
      action: 'time_on_page',
      category: 'User_Engagement',
      label: pageTitle,
      value: timeInSeconds
    });
  }
};

/**
 * 设置用户属性
 * @param properties 用户属性
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setUserProperties = (properties: Record<string, any>): void => {
  if (!isGAAvailable()) return;

  window.gtag('set', 'user_properties', properties);
};

const analyticsUtils = {
  trackPageView,
  trackEvent,
  trackVibeMCPEvents,
  setUserProperties,
  isGAAvailable
};

export default analyticsUtils;