import { formatGitHubNumber } from '@/lib/format'

export default function FormatTestPage() {
  const testNumbers = [
    0, 1, 23, 456, 999, 1000, 1234, 2500, 12500, 999999, 1000000, 1200000, 2500000, 12000000
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">GitHub数字格式化测试</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testNumbers.map((num) => (
            <div key={num} className="bg-white p-4 rounded-lg shadow border">
              <div className="text-sm text-gray-500 mb-1">原始数字:</div>
              <div className="text-lg font-mono mb-2">{num.toLocaleString()}</div>
              <div className="text-sm text-gray-500 mb-1">GitHub格式:</div>
              <div className="text-xl font-bold text-purple-600">{formatGitHubNumber(num)}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">格式化规则</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><strong>0-999:</strong> 显示原数字</li>
            <li><strong>1000-999999:</strong> 显示为k单位 (如 2.5k)</li>
            <li><strong>1000000+:</strong> 显示为m单位 (如 1.2m)</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            这个格式化方案模仿GitHub的数字显示风格，提供更简洁的统计数据展示
          </p>
        </div>
      </div>
    </div>
  )
}