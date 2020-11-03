# TypeScript-Study
타입스크립트 공부

``` TypeScript
let n: number = 1     // 타입 주석 (type annotation)
let m = 2             // 타입 추론
```
=> 타입 추론 덕분에 .js 파일을 확장자만 .ts로 바꾸면 타입스크립트 환경에서도 바로 동작함


``` TypeScript
let numberArray: number[] = [1, 2, 3]   // 배열
let tuple : [boolean, number, string] = [true, 1, 'Ok']   // 튜플
```
* 튜플과 배열
튜플은 물리적으로는 배열과 같음.
배열에 저장되어 있는 아이템의 데이터 타입이 모두 같으면 배열, 다르면 튜플


``` TypeScript
class Container<T> {
  constructor(public value: T) {}
}
let numberContainer: Container<number> = new Container<number>(1)
let stringContainer: Container<string> = new Container<string>('Hello world')
```
* 제네릭 타입
- 제네릭 타입은 다양한 타입을 한꺼번에 취급할 수 있게 해줌.
- 위 Container 클래스는 Container<number>, Container<string>, Container<number[]>, Container<boolean> 처럼 여러가지 타입을 대상으로 동작할 수 있음
 
 
``` TypeScript
type NumberOrString = number |string    // 합집합 타입 예
type AnimalAndPerson = Animal &Person   // 교집합 타입 예 
```
* 대수 타입 (ADT : 추상 데이터 타입)
- 다른 자료형의 값을 가지는 자료형을 의미

=============================================================================================
#### VSCode 사용
* npm i -g typescript
-> 타입스크립트 설치
* npm i -g ts-node
-> 타입스크립트 파일을 컴파일과 실행을 동시에 진행해줌

* npm i -D @types/node
-> 타입스크립트는 NodeJS가 기본으로 제공하는 타입들의 존재도 그냥은 알지 못함.
-> 예를 들어, Promise같은 타입을 사용하려면 @types/node 패키지를 설치해야 함.


* tsconfig.json 파일 생성하기
- 타입스크립트 프로젝트는 타입스크립트 컴파일러의 설정 파일인 tsconfig.json 파일이 있어야 함.
- 이 파일은 tsc --init 명령으로 만들 수 있음.

#### tsconfig.json
``` Json

{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es5",
    "moduleResolution": "node",
    "outDir": "dist",
    "baseUrl": ".",
    "sourceMap": true,
    "downlevelIteration": true,
    "noImplicitAny": false,
    "paths": { "*": ["node_modules/*"] }
  },
  "include": ["src/**/*"]
}

```
- include의 ["src/**/*"] 는 ./src와 ./src/utils 디렉터리에이 프로젝트의 모든 타입 스크립트 소스 파일이 있다는 뜻.
=> mkdir -p src/utils 디렉터리 생성하여 진행

- 타입스크립트 프로젝트를 개발할 때는 ts-node를 사용하지만, 막상 개발이 완료되면 타입스크립트 소스코드를 ES5 자바스크립트 코드로 변환해 node로 실행해야 함.
- 이를 위해 package.json의 dev와 build의 명령을 수정해야 함.
``` Json
"script" : {
  "dev" : "ts-node src",
  "build" : "tsc && node dist"
}
```

=> npm run dev 로 실행 가능


### 모듈 이해하기
tsc에서 소스파일을 모듈이라고 하는데, 하나로 구현해도 되지만 보통은 코드 관리와 유지보수를 편리하게 하기 위해 모듈마다 고유한 기능을 구현하는 방식으로 소스코드를 분할함.
이를 모듈화라고 함.

- export : 기능 제공
- import : 다른 모듈의 기능을 이용하는 쪽에서 사용




