import { SheepIcon } from '../components/Sheep'

/** 信封图标（邮箱）。 */
function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  )
}

/** GitHub 图标。 */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

/** 一条羊脚印（与 Projects 一致的点缀）。 */
function Footprint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <ellipse cx="7" cy="8" rx="4.2" ry="6" fill="currentColor" />
      <ellipse cx="17" cy="8" rx="4.2" ry="6" fill="currentColor" />
    </svg>
  )
}

/** 联系方式：简介 + 邮箱/GitHub（prd.md 第 4 条）。 */
function Contact() {
  return (
    <section className="relative overflow-hidden bg-emerald-50/70 px-6 py-20">
      {/* 羊脚印点缀 */}
      <div className="pointer-events-none absolute inset-0 text-green-900" aria-hidden="true">
        <Footprint className="absolute left-[8%] top-[20%] h-6 w-9 -rotate-12 opacity-25" />
        <Footprint className="absolute bottom-[18%] right-[10%] h-6 w-9 rotate-6 opacity-25" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-green-900 sm:text-4xl">联系我</h2>
        <p className="mt-2 text-green-900/60">Contact · 一起聊聊吧</p>

        {/* 个人信息卡片 */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-green-100 sm:p-10">
          <SheepIcon className="mx-auto h-10 w-16" />
          <p className="mt-4 text-sm leading-relaxed text-green-900/60">
            你好，我是安静的鸟 —— 一只在草原上慢慢走、认真写代码的小鸟。
            喜欢把想法做成干净、好用、有点可爱的东西。
            如果有合作、机会，或者只是想打个招呼，欢迎随时找我。
          </p>

          {/* 联系渠道 */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:quiet-bird@example.com"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-800 ring-1 ring-emerald-100 transition hover:bg-emerald-100 sm:w-auto"
            >
              <MailIcon className="h-4 w-4" />
              quiet-bird@example.com
            </a>
            <a
              href="https://github.com/quiet-bird"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-800 ring-1 ring-emerald-100 transition hover:bg-emerald-100 sm:w-auto"
            >
              <GithubIcon className="h-4 w-4" />
              github.com/quiet-bird
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
