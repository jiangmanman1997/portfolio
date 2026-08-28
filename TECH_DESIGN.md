# 技术设计

## 技术栈
- React + Typescript + Vite
- Tailwind CSS
- React Route（如果页面多的话）
- Framer Motion(动画效果)

## 项目结构
src/
    components/
        Header.tsx
        Home.tsx
        About.tsx
        Projects.tsx
        Contact.tsx
        Footer.tsx
    data/
        project.ts
        skill.ts
    App.tsx
    main.tsx

## 数据管理
- 项目数据和技能数据存储在Typescript文件中
- 使用数组存储，方便后续添加和修改