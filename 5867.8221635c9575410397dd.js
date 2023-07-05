"use strict";(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[5867],{5867:e=>{e.exports="/**\n * @description:\n * This converter help you to painlessly migrate old tags to the tui-editor[new]\n */\nexport function tuiLegacyEditorConverter(content: string): string {\n    const tree = new DOMParser().parseFromString(content, `text/html`);\n\n    migration(tree.body);\n\n    return tree.body.innerHTML;\n}\n\nfunction migration(element: Element): void {\n    for (const child of Array.from(element.children)) {\n        if (child.children.length) {\n            migration(child);\n        }\n\n        if (child.tagName === `FONT`) {\n            if (child.hasAttribute(`size`)) {\n                switch (child.getAttribute(`size`)) {\n                    case `6`: {\n                        migrateHeading(`h1`, child);\n                        break;\n                    }\n                    case `5`: {\n                        migrateHeading(`h2`, child);\n                        break;\n                    }\n\n                    case `4`: {\n                        migrateParagraph(`17px`, child);\n                        break;\n                    }\n\n                    case `3`: {\n                        migrateParagraph(`15px`, child);\n                        break;\n                    }\n\n                    case `2`: {\n                        migrateParagraph(`13px`, child);\n                        break;\n                    }\n                    default:\n                        break;\n                }\n            } else if (child.hasAttribute(`color`)) {\n                migrateFontHighlight(child);\n            }\n        }\n    }\n}\n\nfunction migrateHeading(selector: string, element: Element): void {\n    const heading = document.createElement(selector);\n\n    heading.innerHTML = element.innerHTML;\n\n    if (element.parentElement?.tagName === `P`) {\n        const newRef = element.parentElement?.parentElement?.insertBefore(\n            heading,\n            element.parentElement,\n        );\n\n        element.parentElement?.removeChild(element);\n\n        if (newRef?.nextSibling && !newRef?.nextSibling?.textContent?.trim()) {\n            newRef.nextSibling?.parentElement?.removeChild(newRef.nextSibling);\n        }\n    } else {\n        element.parentElement?.replaceChild(heading, element);\n    }\n}\n\nfunction migrateParagraph(fontSize: string, element: Element): void {\n    const p = document.createElement(`p`);\n    const span = document.createElement(`span`);\n\n    span.setAttribute(`style`, `font-size: ${fontSize}`);\n    span.innerHTML = element.innerHTML;\n    p.append(span);\n\n    element.parentElement?.replaceChild(\n        element.parentElement.tagName === `P` ? span : p,\n        element,\n    );\n}\n\nfunction migrateFontHighlight(element: Element): void {\n    const span = document.createElement(`span`);\n\n    span.setAttribute(`style`, `color: ${element.getAttribute(`color`)}`);\n    span.innerHTML = element.innerHTML;\n    element.parentElement?.replaceChild(span, element);\n}\n"}}]);