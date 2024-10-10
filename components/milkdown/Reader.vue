<script setup lang="ts">
import { Editor, rootCtx, defaultValueCtx, editorViewOptionsCtx } from "@milkdown/kit/core";
import { Milkdown, useEditor } from '@milkdown/vue'
import { commonmark } from '@milkdown/kit/preset/commonmark';
import { gfm } from "@milkdown/kit/preset/gfm";

import { nord } from '@milkdown/theme-nord';
import '@milkdown/theme-nord/style.css';
import '@/assets/css/milkdown/classic.scss'
import 'prism-themes/themes/prism-nord.css'

import { prism, prismConfig } from '@milkdown/plugin-prism'
import { cursor } from '@milkdown/plugin-cursor'
import { tooltipFactory } from '@milkdown/plugin-tooltip'
import { math } from '@milkdown/plugin-math'
import { emoji } from '@milkdown/plugin-emoji'

import c from 'refractor/lang/c'
import cpp from 'refractor/lang/cpp'
import csharp from 'refractor/lang/csharp'
import css from 'refractor/lang/css'
import go from 'refractor/lang/go'
import haskell from 'refractor/lang/haskell'
import python from 'refractor/lang/python'
import java from 'refractor/lang/java'
import javascript from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript'
import jsx from 'refractor/lang/jsx'
import kotlin from 'refractor/lang/kotlin'
import r from 'refractor/lang/r'
import rust from 'refractor/lang/rust'
import scala from 'refractor/lang/scala'
import sql from 'refractor/lang/sql'
import tsx from 'refractor/lang/tsx'
import markdown from 'refractor/lang/markdown'

const tootip = tooltipFactory('Tooltip')

const defaultValue: string = 'data.data.value'

useEditor((root) =>
    Editor
        .make()
        .config((ctx) => {
            ctx.set(rootCtx, root);
            ctx.set(defaultValueCtx, defaultValue);
            ctx.update(editorViewOptionsCtx, (prev) => ({
                ...prev,
                editable: () => false
            }))
            ctx.set(prismConfig.key, {
                configureRefractor: (refractor) => {
                    refractor.register(c)
                    refractor.register(cpp)
                    refractor.register(csharp)
                    refractor.register(css)
                    refractor.register(go)
                    refractor.register(haskell)
                    refractor.register(python)
                    refractor.register(markdown)
                    refractor.register(java)
                    refractor.register(javascript)
                    refractor.register(typescript)
                    refractor.register(jsx)
                    refractor.register(kotlin)
                    refractor.register(r)
                    refractor.register(rust)
                    refractor.register(scala)
                    refractor.register(sql)
                    refractor.register(tsx)
                }
            })
        })
        .config(nord)
        .use(commonmark)
        .use(gfm)
        .use(prism)
        .use(math)
        .use(emoji)
        .use(cursor)
        .use(tootip)
)
</script>

<template>
    <Milkdown />
</template>