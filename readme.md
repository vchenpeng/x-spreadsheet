# x-spreadsheet

[![npm package](https://img.shields.io/npm/v/@sandload/x-data-spreadsheet.svg)](https://www.npmjs.org/package/@sandload/x-data-spreadsheet)
[![NPM downloads](http://img.shields.io/npm/dm/@sandload/x-data-spreadsheet.svg)](https://npmjs.org/package/@sandload/x-data-spreadsheet)
[![NPM downloads](http://img.shields.io/npm/dt/@sandload/x-data-spreadsheet.svg)](https://npmjs.org/package/@sandload/x-data-spreadsheet)
![GitHub](https://img.shields.io/github/license/myliang/x-spreadsheet.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/vchenpeng/x-spreadsheet.svg)

> A web-based JavaScript spreadsheet

## Introduction

基于原 `x-data-spreadsheet` 拓展了相关属性、事件。

<p align="center">
  <a href="https://github.com/myliang/x-spreadsheet">
    <img width="100%" src="https://raw.githubusercontent.com/myliang/x-spreadsheet/master/docs/demo.png">
  </a>
</p>

## Document

* en
* [zh-cn 中文](https://hondrytravis.github.io/x-spreadsheet-doc/)

## CDN
```html
<link rel="stylesheet" href="https://unpkg.com/x-data-spreadsheet@1.1.5/dist/xspreadsheet.css">
<script src="https://unpkg.com/x-data-spreadsheet@1.1.5/dist/xspreadsheet.js"></script>

<script>
   x_spreadsheet('#xspreadsheet');
</script>
```

## NPM

```shell
npm install @sandload/x-data-spreadsheet
```

```html
<div id="x-spreadsheet-demo"></div>
```

```javascript
import Spreadsheet from "x-data-spreadsheet";
// If you need to override the default options, you can set the override
// const options = {};
// new Spreadsheet('#x-spreadsheet-demo', options);
const s = new Spreadsheet("#x-spreadsheet-demo")
  .loadData({}) // load data
  .change(data => {
    // save data to db
  });

// data validation
s.validate()
```

```javascript
// default options
{
  mode: 'edit', // edit | read
  showToolbar: true,
  showGrid: true,
  showContextmenu: true,
  view: {
    height: () => document.documentElement.clientHeight,
    width: () => document.documentElement.clientWidth,
  },
  row: {
    len: 100,
    height: 25,
  },
  col: {
    len: 26,
    width: 100,
    indexWidth: 60,
    minWidth: 60,
  },
  style: {
    bgcolor: '#ffffff',
    align: 'left',
    valign: 'middle',
    textwrap: false,
    strike: false,
    underline: false,
    color: '#0a0a0a',
    font: {
      name: 'Helvetica',
      size: 10,
      bold: false,
      italic: false,
    },
  },
}
```

## import | export xlsx

https://github.com/SheetJS/sheetjs/tree/master/demos/xspreadsheet#saving-data

thanks https://github.com/SheetJS/sheetjs

## Bind events
```javascript
const s = new Spreadsheet("#x-spreadsheet-demo")
// event of click on cell
s.on('cell-selected', (cell, ri, ci) => {});
s.on('cells-selected', (cell, { sri, sci, eri, eci }) => {});
// edited on cell
s.on('cell-edited', (text, ri, ci) => {});
```

## update cell-text
```javascript
const s = new Spreadsheet("#x-spreadsheet-demo")
// cellText(ri, ci, text, sheetIndex = 0)
s.cellText(5, 5, 'xxxx').cellText(6, 5, 'yyy').reRender();
```

## get cell and cell-style
```javascript
const s = new Spreadsheet("#x-spreadsheet-demo")
// cell(ri, ci, sheetIndex = 0)
s.cell(ri, ci);
// cellStyle(ri, ci, sheetIndex = 0)
s.cellStyle(ri, ci);
```

## Internationalization
```javascript
// npm 
import Spreadsheet from '@sandload/x-data-spreadsheet';
import zhCN from '@sandload/x-data-spreadsheet/dist/locale/zh-cn';

Spreadsheet.locale('zh-cn', zhCN);
new Spreadsheet(document.getElementById('xss-demo'));
```
```html
<!-- Import via CDN -->
<link rel="stylesheet" href="https://unpkg.com/x-data-spreadsheet@1.1.5/dist/xspreadsheet.css">
<script src="https://unpkg.com/x-data-spreadsheet@1.1.5/dist/xspreadsheet.js"></script>
<script src="https://unpkg.com/x-data-spreadsheet@1.1.5/dist/locale/zh-cn.js"></script>

<script>
  x_spreadsheet.locale('zh-cn');
</script>
```

## Features
  - Undo & Redo
  - Paint format
  - Clear format
  - Format
  - Font
  - Font size
  - Font bold
  - Font italic
  - Underline
  - Strike
  - Text color
  - Fill color
  - Borders
  - Merge cells
  - Align
  - Text wrapping
  - Freeze cell
  - Functions
  - Resize row-height, col-width
  - Copy, Cut, Paste
  - Autofill
  - Insert row, column
  - Delete row, column
  - hide row, column
  - multiple sheets
  - print
  - Data validations

## Development

```sheel
git clone https://github.com/vchenpeng/x-spreadsheet.git
cd x-spreadsheet
npm install
npm run dev
```

Open your browser and visit http://127.0.0.1:8080.

## Browser Support

Modern browsers(chrome, firefox, Safari).

## LICENSE

MIT
