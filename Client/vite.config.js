import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import svgrPLugin from 'vite-plugin-svgr'

export default defineConfig({
    build:{
        outDir:'build'
    },
    plugins:[
        reactRefresh(),
        svgrPLugin({
            svgrOptions:{
                icons:true,
            },
        }),
    ],
})