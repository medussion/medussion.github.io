---
title: "[Effective C++] 챕터 1 : C++에 왔으면 C++의 법을 따릅시다" 

categories:
  - Effective-Cpp
tags:
  - [Cpp, Book Summary]


toc: true
toc_sticky: true
#목차 생성 여부

published: false
#글 공개 여부

date:       2022-03-30T00:00:00+09:00
lastmod:    2022-11-07T03:00:00+09:00
---

이 글은 스콧 마이어스님의 책 Effective C++의 챕터 1을 읽고 정리한 글입니다
{: .notice--warning}

<br>

## 📌 항목 1: C++를 언어들의 연합체로 바라보는 안목은 필수

<br>

## 📌 항목 2: #define을 쓰려거든 const, enum, inline을 떠올리자

- 매크로 대신 상수를 사용해라
- 상수 포인터를 정의 할 땐 포인터는 꼭 `const` 로 선언해 주어야 하고, <u>포인터가 가리키는 대상</u>까지 `const` 로 선언하는 것이 좋다
```cpp
const char * const authorName = "Scott Meyers"
```
- 클래스 상수의 초기값은 해당 상수가 <u>선언된 시점</u>에 바로 주어진다
- 정적 클래스 상수의 선언은 헤더 파일에 두고 정의는 구현 파일에 둡니다
- 선언한 정수 상수를 가지고 다른 사람이 주소를 얻는다든지 참조자를 쓴다든지 하는 것이 싫다면 **나열자 둔갑술**이 좋은 방법이 된다
- `enum` 은 `#define` 처럼 어떤 형태의 <u>쓸데없는 메모리 할당</u>을 절대 저지르지 않는다
- 나열자 둔갑술은 템플릿 메타프로그래밍의 핵심 기법이다
- 기존 매크로의 효율을 그대로 유지함은 물론 정규 함수의 모든 동작방식 및 타입 안전성 얻을 수 있는 방법은 **인라인 함수에 대한 템플릿**을 준비하는 것이다

<br>

## 📌 항목 3: 낌새만 보이면 const를 들이대 보자!

- 타입 앞에 const를 붙이거나 타입의 뒤쪽이자 *표의 앞에 const를 붙이는 것은 차이가 없다
```cpp
void f1(cosnt Widget *pw);    // 둘다 상수 Widget 객체에 대한
void f2(Widget const *pw);    // 포인터를 매개변수로 취합니다
```
- STL 반복자는 포인터를 본뜬 것이므로 기본적인 동작 원리는 T* 포인터랑 흡사합니다
- 만약 변경이 불가능한 객체를 가리키는 반복자가 필요하다면 const_iterator를 사용하면 된다
- operator의 반환 값을 상수로 되게 하면 아래와 같은 실수를 방지 할 수 있다
  ```cpp
  if (a * b = c) ...
  ```

  ### 상수 멤버 함수
  - 인터페이스를 이해하기 좋게 하기 위해서
    - 그 클래스로 만들어진 객체를 변경할 수 있느 함수는 무엇이고,
    - 또 변경할 수 없는 함수는 무엇인가를 사용자 쪽에서 알고 있어야 한다
  - 상수 객체를 사용할 수 있게 하자는 것인데, 코드의 효율을 위해 아주 중요한 부분
  - 프로그램의 실행 성능을 높이는 핵심 기법 중하나가 객체 전들을 '[상수 객체에 대한 참조자(reference-to-const)](https://reoul.github.io/cpp/cpp-53/)'로 진행하는 것이기   때문에
  - 이 기법이 제대로 살아 움직이려면 상수 상태로 전달된 객체를 조작할 수 있는 const 멤버 함수, 즉 **상수 멤버 함수가 준비되어 있어야 한다**
  - 멤버 함수가 상수 멤버라는 의미는 **비트수준 상수성(물리적 상수성)**과 **논리적 상수성**이다
  
  #### 비트수준 상수성(물리적 상수성)
  - 어떤 멤버 함수가 그 객체의 **어떤 데이터 멤버도 건드리지 않아야** 그 멤버 함수가 'const'임을 인정하는 개념
  - 즉, 그 객체를 구성하는 비트들 중 어떤 것도 바꾸면 안된다는 것
  - '제대로 const'로 동작하지 않는데도 이 비트수준 상수성 검사를 통과하는 멤버 함수들이 적지 않다
    - 어떤 포인터가 **가리키는 대상**을 수정하는 멤버 함수들
    - 포인터 변수 자체를 건든게 아니기 때문

  #### 논리적 상수성
  - 아래와 같은 황당한 상황을 보완하는 대체 개념으로 나오게 되었다
    - 어떤 값으로 초기화된 **상수 객체**를 하나 만들어 놓고 이것에다 **상수 멤버 함수**를 호출했더니 **값이 변해버린 경우**
  - 상수 멤버 함수라고 해서 객체의 한 비트도 수정할 수 없는 것이 아니라 일부 몇 비트 정도는 바꿀 수 있되,
  - 그것을 사용자측에서 알아채지 못하게만 하면 상수 멤버 자격이 있다는 것

<br>

## 📌 항목 4: 객체를 사용하기 전에 반드시 그 객체를 초기화하자
- C++은 객체의 초기화를 자동으로 해주지 않기때문에 **사용 하기 전에 항상 초기화**해주는 것이 좋다
- 생성자에서 그 객체의 모든 것을 초기화해주면 된다. [관련글](https://reoul.github.io/cpp/cpp-54/)
- 생성자마다 주렁주렁 매달려 있는 멤버 초기화 리스트때문에 코드 중복이 심하면 대입으로도 초기화가 가능한 데이터 멤버들을 초기화 리스트에서 빼내어 별도의 함수로 옮기는 것도 나쁘지 않다
- 데이터 멤버의 진짜 초기값을 파일에서 읽어온다든지 데이터베이스에서 찾아오는 경우에는 특히 유용하게 사용할 수 있습니다
- 클래스 데이터 멤버는 그들이 선언된 순서대로 초기화되므로 멤버 초기화 리스트에 넣는 멤버들의 순서도 클래스에 선언한 순서와 동일하게 맞추자
- **정적 객체**(static object)는 자신이 생성된 시점부터 프로그램이 끝날 때까지 살아 있는 객체다
- 정적 객체의 범주에 들어가는 것
  - 전역 객체
  - 네임스페이스 유효범위에서 정의된 객체
  - 클래스 안에서 static으로 선언된 객체
  - 함수 안에서 static을 선언된 객체
  - 파일 유효범위에서 static으로 정의된 객체
- 함수 안에 있는 정적 객체는 **지역 정적 개체**이고, 나머지는 **비지역 정적 개체**이다
- 정적 개체는 프로그램이 끝날 때 자동으로 소멸된다
- **별개의 번역 단위에서 정의된 비지역 정적 객체들의 초기화 순서는 '정해져 있지 않다'**
- 초기화 순서문제는 비지역 정적 객체를 지역 정적 객체로 바꾸어 주면 해결된다
- 지역 정적 객체는 함수 호출 중에 그 객체의 정의에 최초로 닿았을 때 초기화 된다
- 만약 지역 객체 참조자 반환 함수를 호출할 일이 없다면 해당 객체의 생성/소멸 비용도 생기지 않는다
- 참조자 반환 변수 내부적으로 정적 객체를 쓰기때문에, 다중스레드 시스템에서는 동작에 장애가 생길 수도 있다
- 프로그램이 다중스레드로 돌입하기 전의 시동 단계에서 참조자 반환 함수를 전부 손으로 호출해 줄면 초기화에 관계된 경쟁 상태가 없어진다
- 별개의 번역 단위에 정의된 비지역 정적 객체에 영향을 끼치는 불확실한 초기화 순서를 염두에 두고 이러한 불확실성을 피해서 프로그램을 설계해야 한다

<br>

***
<br>

    💻 열심히 공부해서 작성 중이니 오류나 틀린 부분이 있을 경우 
      언제든지 댓글 혹은 메일로 알려주시면 감사하겠습니다! 😸

[맨 위로 이동하기](#){: .btn .btn--primary }{: .align-right}