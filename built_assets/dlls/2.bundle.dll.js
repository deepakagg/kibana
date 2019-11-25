(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[2],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js ***!
  \****************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#%\\^\\&\\*\\(\\)\\=\\$\\-\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        blockComment: ['###', '###'],\n        lineComment: '#'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*#region\\\\b\"),\n            end: new RegExp(\"^\\\\s*#endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    ignoreCase: true,\n    tokenPostfix: '.coffee',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    regEx: /\\/(?!\\/\\/)(?:[^\\/\\\\]|\\\\.)*\\/[igm]*/,\n    keywords: [\n        'and', 'or', 'is', 'isnt', 'not', 'on', 'yes', '@', 'no', 'off',\n        'true', 'false', 'null', 'this',\n        'new', 'delete', 'typeof', 'in', 'instanceof',\n        'return', 'throw', 'break', 'continue', 'debugger',\n        'if', 'else', 'switch', 'for', 'while', 'do', 'try', 'catch', 'finally',\n        'class', 'extends', 'super',\n        'undefined', 'then', 'unless', 'until', 'loop', 'of', 'by', 'when'\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?&%|+\\-*\\/\\^\\.,\\:]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [/\\@[a-zA-Z_]\\w*/, 'variable.predefined'],\n            [/[a-zA-Z_]\\w*/, {\n                    cases: {\n                        'this': 'variable.predefined',\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': ''\n                    }\n                }],\n            // whitespace\n            [/[ \\t\\r\\n]+/, ''],\n            // Comments\n            [/###/, 'comment', '@comment'],\n            [/#.*$/, 'comment'],\n            // regular expressions\n            ['///', { token: 'regexp', next: '@hereregexp' }],\n            [/^(\\s*)(@regEx)/, ['', 'regexp']],\n            [/(\\()(\\s*)(@regEx)/, ['@brackets', '', 'regexp']],\n            [/(\\,)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\n            [/(\\=)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\n            [/(\\:)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\n            [/(\\[)(\\s*)(@regEx)/, ['@brackets', '', 'regexp']],\n            [/(\\!)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\n            [/(\\&)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\n            [/(\\|)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\n            [/(\\?)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\n            [/(\\{)(\\s*)(@regEx)/, ['@brackets', '', 'regexp']],\n            [/(\\;)(\\s*)(@regEx)/, ['', '', 'regexp']],\n            // delimiters\n            [/}/, {\n                    cases: {\n                        '$S2==interpolatedstring': { token: 'string', next: '@pop' },\n                        '@default': '@brackets'\n                    }\n                }],\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/@symbols/, 'delimiter'],\n            // numbers\n            [/\\d+[eE]([\\-+]?\\d+)?/, 'number.float'],\n            [/\\d+\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F]+/, 'number.hex'],\n            [/0[0-7]+(?!\\d)/, 'number.octal'],\n            [/\\d+/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[,.]/, 'delimiter'],\n            // strings:\n            [/\"\"\"/, 'string', '@herestring.\"\"\"'],\n            [/'''/, 'string', '@herestring.\\'\\'\\''],\n            [/\"/, {\n                    cases: {\n                        '@eos': 'string',\n                        '@default': { token: 'string', next: '@string.\"' }\n                    }\n                }],\n            [/'/, {\n                    cases: {\n                        '@eos': 'string',\n                        '@default': { token: 'string', next: '@string.\\'' }\n                    }\n                }],\n        ],\n        string: [\n            [/[^\"'\\#\\\\]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\./, 'string.escape.invalid'],\n            [/\\./, 'string.escape.invalid'],\n            [/#{/, {\n                    cases: {\n                        '$S2==\"': { token: 'string', next: 'root.interpolatedstring' },\n                        '@default': 'string'\n                    }\n                }],\n            [/[\"']/, {\n                    cases: {\n                        '$#==$S2': { token: 'string', next: '@pop' },\n                        '@default': 'string'\n                    }\n                }],\n            [/#/, 'string']\n        ],\n        herestring: [\n            [/(\"\"\"|''')/, {\n                    cases: {\n                        '$1==$S2': { token: 'string', next: '@pop' },\n                        '@default': 'string'\n                    }\n                }],\n            [/[^#\\\\'\"]+/, 'string'],\n            [/['\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\./, 'string.escape.invalid'],\n            [/#{/, { token: 'string.quote', next: 'root.interpolatedstring' }],\n            [/#/, 'string']\n        ],\n        comment: [\n            [/[^#]+/, 'comment',],\n            [/###/, 'comment', '@pop'],\n            [/#/, 'comment'],\n        ],\n        hereregexp: [\n            [/[^\\\\\\/#]+/, 'regexp'],\n            [/\\\\./, 'regexp'],\n            [/#.*$/, 'comment'],\n            ['///[igm]*', { token: 'regexp', next: '@pop' }],\n            [/\\//, 'regexp'],\n        ],\n    },\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js?");

/***/ })

}]);