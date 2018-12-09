### 环境

nodejs

cnpm

cnpm install -g @angular/cli

cnpm install -g json-server

### 新建工程结构

ng new taskmgr -si --style=scss

cnpm install

### 创建核心模块

ng g m core

### 创建共享模块

ng g m shared

### 安装material组件库

cnpm i --save @angular/material@2.0.0-beta.7

### 解决出错：ng4的animations

cnpm i @angular/animations --save


### 如果安装@angular/cli失败
1、移除npm uninstall -g @angular/cli

2、清除缓存npm cache clean

3、重新安装cnpm install -g @angular/cli

# Taskmgr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
