import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { CRX_OUTDIR } from './globalConfig'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // 输出目录
        outDir: CRX_OUTDIR,
    },
    server: {
        // 指定dev sever的端口号，默认为5173
        port: 4000,
        // 自动打开浏览器运行以下页面
        open: '/',
        // 设置反向代理
        proxy: {
            // 以下示例表示：请求URL中含有"/api"，则反向代理到http://localhost
            // 例如: http://localhost:3000/api/login -> http://localhost/api/login
            // 如果反向代理到localhost报错Error: connect ECONNREFUSED ::1:80，
            // 则将localhost改127.0.0.1
            '/api': {
                target: 'http://localhost/',
                changeOrigin: true,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [react()],
})
