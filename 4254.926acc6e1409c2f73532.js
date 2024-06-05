(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[4254],{24254:e=>{e.exports="import {Injectable} from '@angular/core';\nimport {TuiEditorAttachedFile} from '@tbank/tui-editor';\nimport {BehaviorSubject, from, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n/**\n * @description:\n * You can get your credentials for testing API\n * by free file.io account:\n * https://www.file.io/plans\n */\nconst fileIO = {\n    host: `https://file.io/`,\n    autoDelete: `true`,\n    expires: `1d`,\n};\n\n@Injectable({\n    providedIn: `root`,\n})\nexport class FileIoService {\n    readonly loading$ = new BehaviorSubject(false);\n\n    upload(file: File): Observable<TuiEditorAttachedFile> {\n        const body = new FormData();\n\n        body.append(`file`, file, file.name);\n        body.append(`expires`, fileIO.expires);\n        body.append(`autoDelete`, fileIO.autoDelete);\n\n        return from(\n            fetch(fileIO.host, {\n                method: `POST`,\n                body,\n            }).then(async (response: Response) => response.json()),\n        ).pipe(map(result => ({name: result.name, link: result.link})));\n    }\n}\n"}}]);