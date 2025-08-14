import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { trackPageView, trackVibeMCPEvents } from '@/lib/analytics';

/**
 * 自动追踪页面浏览的 Hook
 * 在每次路由变化时发送页面浏览事件
 */
export const useGoogleAnalytics = () => {
  const router = useRouter();
  const timeOnPageStart = useRef<number>(Date.now());
  const currentPage = useRef<string>('');

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // 记录上一页的停留时间
      if (currentPage.current) {
        const timeSpent = Math.floor((Date.now() - timeOnPageStart.current) / 1000);
        trackVibeMCPEvents.trackTimeOnPage(currentPage.current, timeSpent);
      }

      // 追踪新页面
      trackPageView({
        page_path: url,
        page_location: window.location.href,
        page_title: document.title
      });

      // 更新追踪状态
      timeOnPageStart.current = Date.now();
      currentPage.current = document.title;
    };

    // 初始页面加载
    handleRouteChange(router.asPath);

    // 监听路由变化
    router.events.on('routeChangeComplete', handleRouteChange);

    // 页面卸载时记录停留时间
    const handleBeforeUnload = () => {
      if (currentPage.current) {
        const timeSpent = Math.floor((Date.now() - timeOnPageStart.current) / 1000);
        trackVibeMCPEvents.trackTimeOnPage(currentPage.current, timeSpent);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [router]);
};

/**
 * 追踪用户交互的 Hook
 * 提供常用的事件追踪函数
 */
export const useAnalyticsTracking = () => {
  return {
    // MCP 服务器相关追踪
    trackMCPServerView: (serverName: string, category?: string) => {
      trackVibeMCPEvents.viewMCPServer(serverName, category);
    },

    trackMCPServerSearch: (searchTerm: string, resultsCount: number) => {
      trackVibeMCPEvents.searchMCPServers(searchTerm, resultsCount);
    },

    trackMCPServerFilter: (filterType: string, filterValue: string) => {
      trackVibeMCPEvents.filterMCPServers(filterType, filterValue);
    },

    // 用户界面交互追踪
    trackLanguageChange: (language: string) => {
      trackVibeMCPEvents.changeLanguage(language);
    },

    trackThemeToggle: (theme: string) => {
      trackVibeMCPEvents.toggleTheme(theme);
    },

    trackExternalLink: (url: string, text?: string) => {
      trackVibeMCPEvents.clickExternalLink(url, text);
    }
  };
};

/**
 * 自动追踪外部链接点击的 Hook
 * 自动为页面上的外部链接添加点击追踪
 */
export const useExternalLinkTracking = () => {
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      
      if (target && target.tagName === 'A' && target.href) {
        const url = new URL(target.href);
        const currentHost = window.location.hostname;
        
        // 检查是否为外部链接
        if (url.hostname !== currentHost) {
          trackVibeMCPEvents.clickExternalLink(target.href, target.textContent || target.innerText);
        }
      }
    };

    // 添加全局点击监听器
    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
};

/**
 * 组合 Hook - 包含所有基础的 GA 追踪功能
 * 推荐在 _app.tsx 中使用
 */
export const useVibeMCPAnalytics = () => {
  useGoogleAnalytics();
  useExternalLinkTracking();
  
  return useAnalyticsTracking();
};