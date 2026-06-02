---
title: "2022 G Star"

categories:
  - Seminar
tags:
  - [국제게임전시회 지스타 2022, G-Star, 2022 IGC]

toc: true
toc_sticky: true
#목차 생성 여부

published: true
#글 공개 여부

date: 2024-06-14T00:00:00+09:00
lastmod: 2024-06-14T15:27:00+09:00
---

이 글은 2022년에 개최된 G-Star의 세미나 일부를 정리한 글입니다
{: .notice--warning}

## MAU를 8배 상승시킨 리그오브레전드 지표는?

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-1-1.png?raw=true" width="80%" style="display: block; margin-left: auto; margin-right: auto;">

<br>

해당 세션은 리그오브레전드의 게임 전적 데이터를 제공하는 [YOUR.GG](https://your.gg) 서비스를 통해 발굴한 노하우에 대한 공유하는 내용의 세션입니다.

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-1-2.png?raw=true" width="80%" style="display: block; margin-left: auto; margin-right: auto;" >

<br>

**지표는 구현만큼 표현이 중요하다**

지표는 중학생이 봐도 아무런 고민 없이 이해할 수 있게 제공되어야 한다.

아무리 정확하고, 가치있는 데이터라도 의미를 해석할 수 없으면 아무 가치 없는 숫자에 불과하다.

예를 들어, 라인전과 관련한 지표를 0.4778 같은 숫자로 표현하기 보다는, ‘라인전 6:4 우세’와 같은 방식으로 표현하는게 더 좋다. 숫자는 일정 부분 가공되지만, 사용자가 직관적으로 지표의 의미를 파악할 수 있다.

**데이터를 잘 활용하기 위해서는 편향을 줄여야한다**

많은 사람들이 믿고 보는 지표가 되기 위해서는 경험에만 의거해서 접근하면 안된다. 경험에만 의거를 하게되면 되게 유사성에만 취중되면서 편협/편향적인 관점에서 취약해진다.

편향을 줄이기(Cross Valiadation) 위해서는 직관 + 데이터를 활용하는 것이다.

이를 Data Driven vs Data Informed로 볼 수 있는데 Driven은 A,B 2가지 방향 중 1개를 선택해야하는 상황에서 나는 A를 생각하지만 데이터가 B를 나타내면 B를 선택하는 케이스, Informed는 내가 생각한 A를 보충해줄 수 있는 데이터를 참고하는 것이다.

**→ Data Driven 방식이 적합하지 않은 이유 :**

1. 보유한 일부 데이터로 판단 시 편향이 발생 할 수 있음
2. 전문가의 직관이 데이터를 뛰어 넘는 케이스가 있음

**→ Data Informed 방식이 보다 적합한 이유 :**

1. 견해가 있다면 데이터를 내 생각이 맞는지 확인하는 용도로 활용할 수 있음 (보조)
2. 견해가 없다면 데이터를 기반으로 여러가지 관점을 형성 할 수 있음 (학습)
3. 충돌이 발생하면 데이터를 기반으로 내 직관이 맞는지 다시 한번 생각을 해볼 수 있음 (재고)

**YOUR.GG 를 발전시켜나가면서 공유하고 싶은 인사이트**

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-1-3.png?raw=true" width="35%" style="display: block; margin-left: auto; margin-right: auto;" >
<br>
<b>The Innovation Stack</b> - 차민창 대표의 서적 추천 스퀘어 창업자 짐 메켈비가 쓴 각각의 새로운 것들은 다른 새로운 것들에 영향을 주었고 모두 연쇄적으로 나란히 진화했다는 내용의 책

<br>

특정 데이터 또한 하나의 결과를 나타내는 지표라기보다는 해당 분야에서 나타낼 수 있는 모든 결과에 간접적으로 영향을 주고 연관되어있고, 이런 메커니즘을 이해하는데 큰 도음을 줬던 책이다.

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-1-4.png?raw=true" width ="40%" style="display: block; margin-left:auto; margin-right:auto;">
<br>
1. MLB 오클랜드 단장 빌리 빈 이야기<br>
2. 통계/데이터 기반의 야구를 널리 알림<br>
3. OPS = 출루율 + 장타율 탄생 (경쟁력있는 구단을 만드는데 중요한 지표)

<br>
OPS라는 비주류적인 데이터 추출을 통해서 남들이 중요하게 생각하지 않는 관점에서 접근을 하면서 경쟁력 있는 구단을 만드는 단장의 이야기인데, 이 영화처럼 YOUR.GG 에서는 데이터 분석을 위해 유망주를 탐색할 때 상위 티어의 플레이어들을 캐스팅하는 것이 아닌 적당히 높은 티어의 플레이어들의 성장 가능성을 보고 분석하여 굳이 플레이어의 게임 리플레이를 다 보지 않고도 라운드를 분석  해 낼 수 있던 경험을 예시로 들었다.

<br>

**🤔 느낀점**

데이터를 다룸에 있어 단순하게 해당 기준 및 근거를 판단하는 수준에서 그쳤는데, 데이터를 다각도의 관점에서 활용하는 예시를 배우며 어떤 방식으로 업무에 활용해나갈지 배울 수 있계 됐다.

---

<br>

## 게임 제작자의 올바른 사고 방식

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-2-1.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

해당 세션은 게임 제작자로서 올바르게 사고하는 방식에 대한 주제에 대한 내용을 다룹니다.  
추가적으로 출시 예정인 **칼리스토 프로토콜** 이라는 게임을 예시로 어떻게 성공적인 게임을 만들 수 있었는지 소개합니다.

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-2-2.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-2-3.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

**게임 제작자의 올바른 관점**

- Specialist 단계에서 가장 많이 발생하는 결함은, 본인의 직무에 전문성이 높다보니까 본인의 직무 분야에서만 집중하게되면서 정작 전체적인 방향성을 캐치하지 못함. **나무를 관통해서 숲을 보는게 어려움**

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-2-4.png?raw=true" width=50% style="display: block; margin-left:auto; margin-right:auto;">

<br>

모나리자를 예시로들면, Specialist들은 전문가적인 관점에서만 바라보기 때문에 그림의 전체적인 작품성, 왜 이런 그림을 그렸을까? 왜 눈썹이 없을까? 보다는 “어? 눈썹이 없네? 눈썹 추가해야겠다.” 라는 생각을 가장 먼저함.

그렇다면 Specialist의 관점대로 그림에 눈썹을 추가한다면 과연 해당 그림의 작품성이 올라갈까?

아니다 오히려 작품을 망치게된다. 모나리자는 눈썹이 없었기에 더 높은 가치로 인정 받았기 때문 이렇듯 관점을 다각적으로 보지 못하면 오류들이 발생하기 마련이고 이는 게임 개발에서도 마찬가지이다.

이런 부분을 해소하기 위해서는 **정확한 비전에 대한 파악. 즉, 우리가 만드는게 무엇인지 정확하게 이해해야하고 모두가 같은 방향을 향해 나가야한다.** 또한 이를 잘 해내기 위해서 명확한 비전을 세우고, 그 비전에 대해 모두가 끊임없이 소통해야한다.

- 내가 지금 작업 하고있는 업무가 플레이어 경험에 기여 할 수 있는지 알아야한다.
- 컨텐츠의 풍부함을 위해서 최대한 많은 요소들을 우겨 넣으려고하는데, 요소들이 많으면 많을 수록 결함의 리스크가 높아지기 때문에 실질적으로 이런 행위들이 게임 출시에 도움이 주는지 생각해야한다.

**💁🏻‍♂️ Q&A (세션 내 질문)**

**Q** : **요즘 nft를 결합한 메타버스 형식의 게임들이 핫한데 게임 산업의 미래를 어떻게 보시나요?**

**A** : 개인적인 의견으로는 엔터테인먼트의 모든 흐름은 같다. 어떤 창의적인 노력이든 모두 진정성,협업,열정으로부터 출발한다. 그래서 우리는 항상 여기서 시작해야하지 금전적,기술적으로 시작하면안된다.

수십억달러 벌고싶어서 게임 만들래! 혹은 PS5 나왔으니 해당 플랫폼의 게임 만들래 이런 식으로 접근한다면 절대 유저들을 만족시킬 수 없음. 유저들을 만족시키기 위해서는 스토리텔링 즉 설득력이 중요하다. 스토리텔링이 뛰어나야 유저들을 집중시킬 수 있다.

어떤 장르든 nft든 뭐든 돈을 쫓는게 아니라 경험을 쫓아야하고, 플레이어와의 유대감을 쫓아야한다. 메타버스 nft가 멋져서 시작한다? 어찌 저찌 성공을 할 수 있지만 플레이어에게 전적으로 좋은 경험을 줄 순 없을 것이다.

**Q : 칼리스토 프로토콜을 만들으면서 가장 힘들었던건 어떤 부분이였나요?**

**A** : 많은 어려움 및 도전과제가 있었다. 새로운 스튜디오 신설, 갑작스러운 인사 조정, 새로운 캐릭터 ,월드 ,스토리를 제작했어야함. 이런 어려움을 겪는 과정에서 코로나19까지 발생하면서 예상치 못한 문제들이 발생했고, 이를 타개하기 위해서 재택근무를하게되었음. 모든게 힘든 부분이였지만 코로나19로 인하여 재택근무를 한 것이 가장 힘든 부분이였고 이를 통해서 커뮤니케이션 관점에서 깨달은게 있는데 반복적인 의사소통은 일관되어야함. 우리 모두 인간이기때문에 반복적으로 전달하고 듣는게 중요함.

**Q : 비전과 기둥을 잘 세워야 한다고 말씀해주셨는데, 그 과정에서 애로사항이 발생한다면 어떻게 해결하셨나요?**

**A** : 버티컬 슬라이스 기법을 사용해서 해결했음. 애로사항에 직면했을 때 혹은 평소에도 이런 저런 다양한 아이디어들을 무작정 내본다음, 그 아이디어들의 핵심요소들을 질문으로 바꿈. 그 질문들을 분석하고 평가하면서 과연 그 아이디어가 비전이 있는지 파악했다.

**Q : 칼리스토 프로토콜이랑 데드스페이스가 너무 유사하지 않은가?**

**A** : 유사한 컨셉이지만 스토리, 내러티브가 다를 것이다. 여기에 더해서 디자인 팀이 50:50 전투 시스템을 추가했다. 기존 데드 스페이스에서는 레인지 컴뱃에만 의존했지만 칼리스토 프로토콜에서는 랠리 컴뱃에도 집중했다.

**🤔 느낀점**

내 직무 관점에서만 바라보기보다 다각적인 관점에서 바라보는 자세를 가지고 업무에 임해야 게임의 방향성이 보인다는 부분이 와닿았고, 이러한 자세가 올바른 커뮤니케이션으로 연결된다는 부분에서 매우 공감됨

---

<br>

## 월드 오브 워크래프트 : 스토리에서 이미지로 가는 과정

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-3-1.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

해당 세션은 월드 오브 워크래프트에선 어떻게 독보적인 아트 컨셉으로 많은 유저들에게 사랑받을 수 있었는지, 어떤 키워드를 가지고 디자인을했는지에 대한 내용을 다룹니다.

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-3-2.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-3-3.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-3-4.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-3-5.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

**월드오브워크래프트의 독보적인 아트 제작**

- 뛰어난 디자인 능력보다 스토리 / 시나리오를 완벽하게 숙지하는 것이 내가 어떤 작업물을 만들어야하는지 알 수 있음

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-3-6.png?raw=true" width=70% style="display: block; margin-left:auto; margin-right:auto;">

<br>

실사 이미지를 반영할 때는 기존 플레이어들의 인지에대한 연관성을 중요하게 연결시켜야한다.  
와우 아트팀에서는 디자인을 진행하기전에 스토리와 부합하는 실제 사진들을 기반으로 레퍼런스를 수집한다.

실제 이미지를 반영하는것은 기존 플레이어들의 사물에 대한 인지와의 연관성을 통해 공감대를 이끌어 낼 수 있음. 이런 공감대 형성 작업이 결여된다면 디자인의 컨셉 전달에 실패할 수 있음

‘검’이라고하면 대개 사람들은 허리에 차거나, 등에차고 뽑아서 적을 베는 용도 혹은 곧게 뻗은 날카로운 손잡이 달린 날붙이를 기본적인 인지로 의식함.

근데 독창적인 디자인을 만들겠다고 검을 별모양으로 만든다던지, 검을 주머니에서 뽑아든다던지 하면 사람들은 그 작업물을 검으로 인지하지 어렵기때문에 공감대를 형성해나가기까지 시간이 걸리며, 실제로 공감대가 형성되지 않을 수 있음.
<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-3-7.png?raw=trueg" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

썸네일 작업도 한 개의 작업물을 디자인할 때 같은 작업물에 여러가지 색감과 이미지의 예시를 놓고 브레인 스토밍을 통해 적합한 것을 선택함

<br>

**💁🏻‍♂️ Q&A (세션 내 질문)**

    Q : 월드오브워크래프트는 전형적인 북미풍 아트로 유명한데, 이 북미풍 아트를 정의할 수 있는 특징이 어떤게 있나요?

A : 아트 실루엣의 과장과 리듬의 강조라고 말할 수 있을 것 같다. 한국 게임들은 대체적으로 얇고 애니메적인 스타일들이 많은 반면에 그런 스타일과 다르게 덩어리감이 더 보이고 과장된 표현이 와우스러운 북미풍 스타일을 만들어내는게 아닐까 생각한다.

**느낀점**

직무에 대한 이해도가 부족해서 디자인 기술만 뛰어나면 되는 줄 알았지만, 기획 및 개발자 이상으로 게임의 스토리에 대해 깊게 알고 있어야한다는점이 인상적이였고, 이는 비단 특정 직무뿐만아니라 게임에 연관된 모든 직무에 해당되는 부분이라는 생각이 들었다.

---

<br>

## 접근성이 선택이 아닌 필수인 이유 : 장애인의 게임 접근성 향상

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-4-1.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

해당 세션은 게임 개발 과정에서 접근성 향상이 어떻게 경쟁력을 유지하는지에 대한 내용을 다룹니다.

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-4-2.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-4-3.png?raw=true" width=80% style="display: block; margin-left:auto; margin-right:auto;">

<br>

<b>게임씬에서 접근성 제공은 매우 중요하다</b>

<br>

**장애인의 구매력**

- 전세계적으로 9억명이 넘는 장애인들이 게임기기를 보유하고있다. (모바일기기를 포함한다면 더 높은 수치)
- 장애인들의 유대가 있는 사람들까지 모두 합친다면 예상 구매력은 13조 달러

**장애인의 분포**

    - 미국의 경우 법적으로 시각 장애가 1000만명이 넘음
    - 색약의 경우 7명중 1명 꼴로 겪음
    - 자폐나 정신 건강, 난독증 등의 신경 장애를 겪는 사람 많음

게임에 궁극적인 키워드는 경험이기 때문에 정서적, 스토리적 경험을 전달 할 수 있어야한다. 그렇기에 개발 초기부터 접근성으 고려해서 게임을 설계해야한다.

게임이라는 것은 유저들의 경험에 의해 완성되는데, 개발자들은 코딩이나 디자인등에 얽매여있어 경험에 대한 부분을 잘 놓치는 것 같다. 더불어 개발자들은 슬픈 이야기, 감동적인 이야기에 움직이지 않는다. 재무적인 이야기를 통해서만 접근성에 대한 고민을 하게되는데 이는 잘못된 게임 개발 자세이다.

<c1>접근성은 선택 사항이 아니라 디자인의 부족이다.</c1>

**접근성을 높이는 다양한 방법**

    - 키를 유저가 원하는대로 매핑할 수 있는 기능
    - 색맹/색약 유저를 위한 디스플레이 기능
    - 다이얼로그 씬에서 손가락 인디케이터를 활용한 인지
    - 세컨드 채널 활용

**세컨드 채널에 대한 예시**

레벨업을 예시로 들자면, 단순 비주얼 이펙트를 통해 레벨업 시점을 전달할 경우 장애인들은 레벨업을 했는지 놓칠 수 있다. 이 케이스는 비주얼 이펙트 1개의 채널로만 레벨업을 인지시켰기 때문에 세컨드 채널이 부족한 상태이다.

여기서 레벨업 시점에 음향 효과와 햅틱 기능을 재공한다면 유저들은 3개의 채널을 통해 레벨업을 인지 할 수 있고, 본인에게 맞는 채널을 활용하여 게임을 남들과 동일하게 진행해 나갈 수 있다.

<br>

**💁🏻‍♂️ Q&A (세션 내 질문)**

**Q : 하드웨어 컨트롤러에 대한 접근성에 대해서 어떻게 생각하시나요?**

**A** : 아시아의 게임 개발 스튜디오에서는 접근성 부분에서 제일 뒤쳐져있다.

**Q: 게임에서 신경 다양성에 대하여 접근성을 적용해본 사례가 있는가?**

**A** : 제 자신을 사례로들면, 나도 신경 다양성이 있고, 수면장애가 있다. 깜짝놀래키면 갑자기 쓰러지는 염소들을 봤는가? 나는 그 증상을 겪고 있다. 기면증도 있다. 그래서 야경증을 겪기도한다. 이런 부분에 대한 게임에서의 접근성을 위해 돌발적인 연출 등에서 연출을 스킵하는 접근성 기능을 고려 해 볼 수 있다.

**Q : 아까 소개했던 접근성의 다양한 방법 중에 Non-Fail Mode / 스태미너 무한 등도 포함해볼 수 있다고 소개해주셨는데, 해당 기능을 제공하면 일반 유저들이 해당 기능을 사용해서 컨텐츠를 빠르게 소모시켜버리면서 재미에 지장을 줄 수 있지 않을까요?**

**A** : 이전에 게이머 루프에 대해서도 설명했데, 이 부분으로 대답을 대체 할 수 있을 것 같다. 유저들은 게임이 너무 어려워지면 루프에서 빠져나와 게임을 중단하게된다. 하지만 게임의 난이도가 너무 낮아져도 이탈을하게된다.

해당 기능을 일반 유저들이 사용한다면 게임이 재미가 없기때문에 실제로 사람들은 해당 기능을 사용하지 않을 것이다.

**🤔 느낀점**

평소에도 접근성 향상에 대해서 매우 중요하게 생각하고 있었지만, 보다 더 자세한 예시와 근거들을 들으며 어떤 유형으로 개선 해나가야하고 왜 적용을 해야하는지에 대한 인사이트를 얻을 수 있었음.

아쉬웠던 점은 질문세션에서 질문 의도와 거리가 먼 답변들이 좀 있어서 아쉬웠다.

---

<br>

## 성공 가능성을 높이는 게임 개발 전략

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-5-1.png?raw=true" width="80%" style="display: block; margin-left: auto; margin-right: auto;">

<br>

해당 세션은 VicGame Studio에서 블랙클로버 라는 게임의 개발 과정을 소개하며 어떤 전략을 활용해서 성공 가능성을 높였는지에 대한 내용을 다룹니다.

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-5-2.png?raw=true" width="80%" style="display: block; margin-left: auto; margin-right: auto;">

<br>

**팀빌딩과 팀운영에서 중요한 점**

팀 빌딩시 팀 내부 에서 원하는 목표와 PD의 원하는 목표 이 둘을 모두 포괄할 경우 가치충돌이 자주 발생되는데, 이 때 목표의 핵심과 가치를 좁히면서 팀의 방향성을 설정한다.

팀의 핵심가치가 어떤걸 원하는지 어떤걸 생각하는지가 가장 중요한 기준이며,VicGame Studio의 경우 비즈니스모델보다는 게임의 퀄리티를 중점으로 삼는다.

팀의 기준이 흔들리는 순간 프로젝트의 톤앤매너가 깨지기 때문에 기준이 흔들리지 않도록 주의해야한다.

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-5-3.png?raw=true" width="80%" style="display: block; margin-left: auto; margin-right: auto;">

<br>

**게임 개발 과정에서의 고려사항**

경쟁력을 갖추기 위해 핵심 타켓층을 설정해야한다. VicGame Studio의 경우 일본애니메이션 및 애니풍을 선호하는 유저를 핵심 타켓층으로 선정하였고, 게임이지만 애니메이션에서 느낄 수 있는 감정과 감동을 전달하는것이 가장 큰 목표이다.

추가적으로 게임 개발 과정에서 검증 작업이 매우 중요하다.

사전 검증을 통해서 아이디어가 시장이 원하는 제품인지 평가 받을 수 있고,

아이디어가 떠오를 경우 선제적인 검증을 진행하여, 대규모 투자 전 검증을 통해서 리스크를 최소화 할 수 있다.

**시장평가의 중요성**

게임 출시전시전 여러 차례의 FGT(Focus Group Testing)을 통해서 제품의 시장성 검증 및 방향성 검증을 통해서 방향성을 점검하고 수정하는 작업을 통해 리스크를 줄임으로써 성공적인 프로젝트로 이끌어 나가는데 아주 큰 도움이 되었다.

**🤔 느낀점**

팀 별로 명확한 기준을 설정하는 것의 중요성과 그 기준을 따라가야하는 이유를 배울 수 있었음.

추가적으로 게임 출시 전 내부 테스팅 뿐 아니라 플레이어와 유사한 환경에서 FGT 활동을 통해 제품 검증을 하는 것이 안정적인 게임을 출시하는 부분에서 큰 도움을 줄 수 있다는 인사이트를 얻음

---

<br>

## Deep Cuts - 최고의 개발팀 Team Ninja의 게임 제작론

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-6-1.png?raw=true" width="80%" style="display: block; margin-left: auto; margin-right: auto;">

<br>

해당 세션에서는 Team NINJA의 근본이 되는 개발 기조를 기반으로, 그동안 게임들을 개발하면서 중점적으로 고민했던 포인트를 다룹니다.

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-6-2.png?raw=true" width="80%" style="display: block; margin-left: auto; margin-right: auto;">

<br>

**테크모 게임즈가 추구하는 게임 개발 기조**

테크모 게임즈의 개발 기조는 **“틀을 깨라, 하지만 형편 없어서는 안 된다”** 이다.

가부키라는 일본 정통 연극에서 자주 사용되는 말로 카타야부리(틀을 깬다) + 카타나시(형편 없어서는 안된다)

형편 없어서는 안된다 : 기초가 잘 닦여있지 않은 상태에서 새로운 것에 도전해서는 안된다

틀을 깬다 : 기초를 철저히 익혀 자신의 것으로 만들고 난 뒤, 본인의 개성을 더하는 것을 가리킴

모든 조직에 적용되는 기조로, 회사에 일하는 모두가 이 말을 들으며 커리어를 쌓아가고 있고, 이런 기조를 바탕으로 업무를 진행하다보니 유저들에게 개발사 고유의 색을 전달 할 수 있었고, 완성도 높은 게임을 개발해 낼 수 있었다.

- 팀 닌자에서는 회사에서 추구하는 개발 기조에 추가적으로 팀만의 기조를 추가적으로 가지고 있다.
  **오리지널리티(독창성) 10%** 와 **아티잔(장인 정신) 90%**이라는 두가지의 기조를 바탕으로 게임을 개발하고있다.

이는 품질이 완벽하게 구현되었을 때, 10%의 독창성을 불어넣은 게임을 만들자는 의미다.

**글로벌 시장 진출**

- 해외 무대를 처음부터 의식해서 개발하는 것이 아니라, 우리 스스로 생각했을 때 즐곱다고 생각되는 게임을 만든다면 결국 전 세계가 좋아해 주지 않을까 하는 마음으로 개발에 임한다.
- 글로벌 시중에 집중하기보다는 게임의 ‘기본에 집중하는 것’이 훨씬 중요하다.

팀 닌자에서 게임 개발 시 중요시 여기는 포인트

    1. 플레이어가 게임을 즐 길 때 높은 몰임감을 느낄 수 있도록 손맛이 느껴지는 액션 추구
    2. 역사와 판타지와의 그럴듯한 혼합을 통한 오리엔탈적인 매력, 아시아의 매력을 전세계에 팬들한테 전달 하는 것
    3. 정식 출시 한참 이전에 체험판을 공개적으로 배포하는 것. 6개월전에 체험판을 배포하고 이용자들에게 설문 조사를 진행했다. 이런 식으로 유저들과 직접적으로 소통하면서 최종 게임을 개발하는 것이 특징 중 하나이다.

실제로 지난 9월에 배포한 와룡: 플론 다이너스티는 체험판 공개 이후 9만건 이상의 설문 조사 결과를 바탕으로 게임 개선에 큰 도움이 되었다. 물론 설문조사를 무조건적으로 반영한다기보다는 팀에서 만들고 싶은 게임과 비교해서 적용을했다.

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-6-3.png?raw=true" width="80%" style="display: block; margin-left: auto; margin-right: auto;">

<br>

<img src="https://github.com/medussion/medussion.github.io/blob/main/assets/images/postImage/2022_G_Star/igc-6-4.png?raw=true" width="80%" style="display: block; margin-left: auto; margin-right: auto;">

<br>

**🤔 느낀점**

직원 모두가 회사의 기조를 기반으로 업무를 운영해나가게되면서, 기조에 알맞는 공통된 결과물이 산출되는 것이 인상 깊었다. 또한 추구하는 기조가 게임 개발의 가장 근본적이고 원초적인 내용임에도 성공적인 게임 개발에 기여를 할 수 있는 원동력이 될 수 있다는 점이 신기했고, 뛰어난 전문성만으로는 성공적인 결과를 산출할 수 없음을 배우게됐다.
