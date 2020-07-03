# Component Communication

Angular 官網筆記
[Angular - 元件之間的互動](https://angular.tw/guide/component-interaction#parent-calls-an-viewchild)

## Personal Note
1. 爸爸傳給兒子1
適用情況：
通常資料在爸爸（或是透過其他服務進入爸爸）
爸爸的資料透過 binding pass到子元件
(ng 是透過input裝飾器)
兒子負責顯示邏輯

2. 爸爸傳給兒子 + setter
適用情況：
通常資料在爸爸（或是透過其他服務進入爸爸）
(ng 是透過input裝飾器)
兒子負責顯示邏輯
不過這邊可以透過setter去進行資料傳過來的處理，決定要如何顯示在子元件
（第一個方法，兒子收到資料也是可以進行處理，只是這邊對這個操作進行了一個顯示規則）

3. 爸爸傳給兒子 + onChanges
適用情況：
通常資料在爸爸（或是透過其他服務進入爸爸）
(ng 是透過input裝飾器)
兒子元件使用onChanges hook 來 log 出所有子元件傳入prop/input variable的變化。


4. 兒子傳給爸爸（emit）
適用情況：
通常是子元件有事件觸發，然後爸爸元件需要對這個事件作出反應。
因子元件可把事件emit到爸爸元件，爸爸元件會接受這個事件後，做出對應的行為。
（ng是透過利用Event Emitter 建立一個實例，然後用output裝飾器傳出，爸爸那邊需要用事件binding在templete接受$event，然後設定接著要對應的方法）

5. 爸爸可以利用view，透過參照變數複用兒子的邏輯
適用情況：
如題，爸爸透過template 變數，
爸爸的template中，可以在兒子tag中定義一個參照變數，
透過這個在template的參照變數，爸爸可以/也只能在template使用兒子元件變數和方法


6. 爸爸元件可透過@viewChild注入兒子元件
適用情況：
爸爸不想要只能透過template去用複用兒子的元件
希望也可以透過元件去拿到兒子元件裡面的邏輯複用
爸爸透過注入兒子元件 via @viewChild裝飾器，可以達到。
因為爸爸元素可以拿到，因此爸爸可以再整合兒子元素後，建立自己的變數和方法在自己的view顯示。（也需要透過 AfterViewInit hook 來把兒子的元件接入爸爸的元件內）


7. 用service來進行元件的溝通
服務本身透過建立與訂閱Observerble來進行
因為要建立服務，所以code變多。
適用情況：
但是如果要跨的組件不是單純的父子關係
想要把資料來源拉出去由一個地方集中管理（可能是服務本身，更多情況是服務去另一個服務拿資料過來）



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
