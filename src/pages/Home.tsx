import Sheep from '../components/Sheep'

/** 一朵插画云：位置和动画延迟由 props 控制，避免重复代码。 */
function Cloud({ top, left, delay }: { top: string; left: string; delay?: string }) {
  return (
    <div className="cloud" style={{ top, left, animationDelay: delay }}>
      <svg viewBox="0 0 100 50" className="h-8 w-16 opacity-90 md:h-10 md:w-20">
        <ellipse cx="30" cy="36" rx="26" ry="13" fill="#fff" />
        <ellipse cx="56" cy="28" rx="20" ry="12" fill="#fff" />
        <ellipse cx="78" cy="37" rx="17" ry="10" fill="#fff" />
      </svg>
    </div>
  )
}

/** 首页：草原插画背景 + 大标题 + 简介（prd.md 第 1 条）。 */
function Home() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-emerald-50 to-green-200">
      {/* 背景插画层（不拦截点击） */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* 太阳：光晕 + 光芒 + 渐变核心，忽闪忽闪 */}
        <div className="sun" aria-hidden="true">
          <span className="sun-glow" />
          <svg viewBox="0 0 120 120">
            <defs>
              <radialGradient id="sun-core" cx="35%" cy="35%" r="80%">
                <stop offset="0%" stopColor="#fef9c3" />
                <stop offset="55%" stopColor="#fcd34d" />
                <stop offset="100%" stopColor="#f59e0b" />
              </radialGradient>
            </defs>
            {/* 12 根光芒 */}
            <g stroke="#fcd34d" strokeWidth="5" strokeLinecap="round">
              {Array.from({ length: 12 }, (_, i) => {
                const a = (i * 30 * Math.PI) / 180
                return (
                  <line
                    key={i}
                    x1={60 + 33 * Math.cos(a)}
                    y1={60 + 33 * Math.sin(a)}
                    x2={60 + 46 * Math.cos(a)}
                    y2={60 + 46 * Math.sin(a)}
                  />
                )
              })}
            </g>
            <circle cx="60" cy="60" r="26" fill="url(#sun-core)" />
          </svg>
        </div>
        {/* 云朵 */}
        <Cloud top="16%" left="16%" />
        <Cloud top="34%" left="58%" delay="-14s" />
        {/* 大片绿色草原：三层宽阔色带，顶端轻微起伏 */}
        <svg
          className="absolute bottom-0 h-1/2 w-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,180 C240,140 480,200 720,170 C960,140 1200,190 1440,160 L1440,400 L0,400 Z"
            fill="#bbf7d0"
          />
          <path
            d="M0,240 C300,200 620,260 940,230 C1160,210 1320,250 1440,235 L1440,400 L0,400 Z"
            fill="#a7f3d0"
          />
          <path
            d="M0,320 C320,285 720,340 1080,310 C1260,295 1380,320 1440,310 L1440,400 L0,400 Z"
            fill="#86efac"
          />
        </svg>
      </div>

      {/* 内容层 */}
      <div className="relative z-10 px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-green-900 sm:text-6xl md:text-7xl">
          你好，我是<span className="text-green-600">安静的鸟</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-green-900/70 sm:text-lg md:text-xl">
          一只在草原上慢慢走、认真写代码的小鸟。这里是我的个人作品集——关于我、我做过的东西，以及怎么找到我。
        </p>
      </div>

      {/* 走来走去的羊 */}
      <Sheep />
    </section>
  )
}

export default Home
