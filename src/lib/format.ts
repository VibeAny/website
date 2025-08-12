/**
 * 格式化数字显示，模仿GitHub风格
 * 1000 -> 1k
 * 2500 -> 2.5k  
 * 1200000 -> 1.2m
 */
export function formatGitHubNumber(num: number): string {
  if (typeof num !== 'number' || isNaN(num)) {
    return '0';
  }
  
  if (num >= 1000000) {
    const millions = num / 1000000;
    return millions % 1 === 0 
      ? `${millions.toFixed(0)}m`
      : `${millions.toFixed(1)}m`;
  } else if (num >= 1000) {
    const thousands = num / 1000;
    return thousands % 1 === 0
      ? `${thousands.toFixed(0)}k`
      : `${thousands.toFixed(1)}k`;
  }
  
  return num.toString();
}

/**
 * 格式化带单位的数字显示
 */
export function formatNumberWithUnit(num: number, unit: string): string {
  return `${formatGitHubNumber(num)} ${unit}`;
}

/**
 * 解析GitHub格式数字（用于采集脚本）
 * "2.5k" -> 2500
 * "1.2m" -> 1200000
 */
export function parseGitHubNumber(text: string): number {
  if (!text) return 0;
  
  const cleanText = text.toLowerCase().trim().replace(/,/g, '');
  
  if (cleanText.includes('m')) {
    return Math.floor(parseFloat(cleanText) * 1000000);
  } else if (cleanText.includes('k')) {
    return Math.floor(parseFloat(cleanText) * 1000);
  }
  
  return parseInt(cleanText) || 0;
}