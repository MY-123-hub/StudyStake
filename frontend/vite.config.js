import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署配置
// 如果部署到 https://<username>.github.io/<repo-name>/
// base 设为 /<repo-name>/
export default defineConfig({
  plugins: [react()],
  base: './', // 相对路径，GitHub Pages 兼容
  build: {
    outDir: 'dist',
  },
})
