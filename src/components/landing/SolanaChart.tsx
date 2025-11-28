import { useEffect, useRef } from 'react';
import { createChart, ColorType, IChartApi } from 'lightweight-charts';

export const SolanaChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<any>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: 'hsl(var(--foreground))',
      },
      grid: {
        vertLines: { color: 'hsl(var(--border))' },
        horzLines: { color: 'hsl(var(--border))' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    chartRef.current = chart;

    const candlestickSeries = (chart as any).addCandlestickSeries({
      upColor: 'hsl(140 60% 50%)',
      downColor: 'hsl(0 84.2% 60.2%)',
      borderVisible: false,
      wickUpColor: 'hsl(140 60% 50%)',
      wickDownColor: 'hsl(0 84.2% 60.2%)',
    });

    candlestickSeriesRef.current = candlestickSeries;

    // Generate initial mock data for Solana price
    const generateMockData = () => {
      const data = [];
      let basePrice = 150;
      const now = Math.floor(Date.now() / 1000);
      
      for (let i = 100; i > 0; i--) {
        const time = now - (i * 300); // 5-minute intervals
        const volatility = Math.random() * 5;
        const trend = (Math.random() - 0.5) * 2;
        
        const open = basePrice;
        const close = open + trend;
        const high = Math.max(open, close) + Math.random() * volatility;
        const low = Math.min(open, close) - Math.random() * volatility;
        
        data.push({
          time,
          open,
          high,
          low,
          close,
        });
        
        basePrice = close;
      }
      
      return data;
    };

    const initialData = generateMockData();
    candlestickSeries.setData(initialData);

    // Simulate live updates
    const updateInterval = setInterval(() => {
      if (!candlestickSeriesRef.current) return;

      const lastCandle = initialData[initialData.length - 1];
      const time = Math.floor(Date.now() / 1000);
      const volatility = Math.random() * 2;
      const trend = (Math.random() - 0.5) * 1;
      
      const open = lastCandle.close;
      const close = open + trend;
      const high = Math.max(open, close) + Math.random() * volatility;
      const low = Math.min(open, close) - Math.random() * volatility;

      const newCandle = {
        time,
        open,
        high,
        low,
        close,
      };

      initialData.push(newCandle);
      if (initialData.length > 100) {
        initialData.shift();
      }
      
      candlestickSeriesRef.current.update(newCandle);
    }, 3000);

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(updateInterval);
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="glass-panel rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SOL/USD
            </h3>
            <p className="text-sm text-muted-foreground">Live Solana Chart</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Live</span>
          </div>
        </div>
        <div ref={chartContainerRef} className="w-full" />
      </div>
    </div>
  );
};
