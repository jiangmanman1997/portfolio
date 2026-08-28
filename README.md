# 安静的鸟 · 个人作品集

羊毛毡插画风格的个人作品集网站：草原上有一只走来走去的小羊。
基于 **React + TypeScript + Vite + Tailwind CSS** 构建，淡色主题、可爱风。

## 页面

| 路由 | 说明 |
| --- | --- |
| `/` | 首页：草原插画背景（忽闪的太阳、漂移的云朵、大片绿色草原）+ 正常迈步走来走去的小羊 + 大标题与简介 |
| `/projects` | 作品集：项目卡片列表（标题、描述、技术栈标签），卡片右上角小羊图标，空白处羊脚印点缀 |
| `/contact` | 联系：个人简介 + 邮箱 / GitHub 入口 |

## 技术栈

- **React 19** + **TypeScript** — 函数式组件 + hooks
- **Vite 8** — 构建与开发服务器
- **Tailwind CSS v4**（`@tailwindcss/vite` 插件）— 全部样式
- **react-router-dom 7** — 多页面路由

## 展示

![首页](screenshots/home.png)

![作品集](screenshots/projects.png)

![联系](screenshots/contact.png)

## 快速开始

```bash
npm install
npm run dev      # 开发服务器
npm run build    # 生产构建（产物在 dist/）
```

## 目录结构

- `src/pages/` — 页面（Home / Projects / Contact）
- `src/components/` — 共享组件（Header、Sheep、SheepIcon）

> 注：`BrowserRouter` 部署到静态托管时，直接访问 `/projects` 等深层路径需要 SPA fallback（或改用 `HashRouter`）。
