import { SheepIcon } from '../components/Sheep'

/** 一条羊脚印（两趾蹄印），用于空白处点缀。 */
function Footprint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <ellipse cx="7" cy="8" rx="4.2" ry="6" fill="currentColor" />
      <ellipse cx="17" cy="8" rx="4.2" ry="6" fill="currentColor" />
    </svg>
  )
}

/** 项目数据：占位内容，后续按需替换为真实项目。 */
const projects = [
  {
    title: 'CSV 数值求和工具',
    description: '读取 CSV 文件并汇总所有数值，自动跳过表头与空单元格，支持负数与小数。',
    stack: ['Python', '标准库 csv'],
  },
  {
    title: 'HTTP 请求小工具',
    description: '命令行发送 GET 请求，JSON 响应自动美化打印，出错时给出清晰报错。',
    stack: ['Python', 'urllib'],
  },
  {
    title: '个人作品集网站',
    description: '羊毛毡插画风格的作品集站点，首页有一只在草原上走来走去的小羊。',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
]

/** 项目卡片：标题 + 描述 + 技术栈标签，右上角小羊图标。 */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-green-100 transition hover:-translate-y-0.5 hover:shadow-md">
      {/* 右上角小羊图标 */}
      <SheepIcon className="absolute right-3 top-3 h-8 w-12" />
      <h3 className="pr-14 text-lg font-bold text-green-900">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-green-900/60">{project.description}</p>
      {/* 技术栈类别标签 */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

/** 项目展示：卡片列表 + 羊脚印点缀（prd.md 第 3 条）。 */
function Projects() {
  return (
    <section className="relative overflow-hidden bg-emerald-50/70 px-6 py-20">
      {/* 空白处的羊脚印（点缀，不拦截点击） */}
      <div className="pointer-events-none absolute inset-0 text-green-900" aria-hidden="true">
        <Footprint className="absolute left-[6%] top-[18%] h-6 w-9 -rotate-12 opacity-25" />
        <Footprint className="absolute left-[11%] top-[32%] h-6 w-9 rotate-3 opacity-25" />
        <Footprint className="absolute right-[8%] top-[22%] h-6 w-9 rotate-12 opacity-25" />
        <Footprint className="absolute bottom-[14%] right-[13%] h-6 w-9 -rotate-6 opacity-25" />
        <Footprint className="absolute bottom-[22%] right-[6%] h-6 w-9 rotate-6 opacity-25" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-3xl font-extrabold text-green-900 sm:text-4xl">项目</h2>
        <p className="mt-2 text-green-900/60">Projects · 一些做过的，和一些在做的</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
