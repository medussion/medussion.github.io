---
title: "[etc] vi/vim 편집기 명령어 정리 (단축키 모음 / 목록)"

categories:
  - etc
tags:
  - [Development]


toc: true                         # 목차
toc_sticky: true                  # 목차 사이드바 고정

published: true                   #글 공개 여부

date:       2024-01-23T06:23:00+09:00
lastmod:    2024-01-23T06:23:00+09:00
---

<!-- description : 25자에서 160자 사이 -->
이 글은 vi/vim 편집기를 편리하게 사용하기 위한 명령어 정리글입니다.<br>
{: .notice--warning}

## vi 시작 명령어

| 명령어 | 설명 | 예제 |
| ----- | ----- | ----- |
|vi {파일명} | 파일열기, 작성 | vi test.txt |
|vi +{행번호}{파일명} | 파일을 열고, 입력한 행으로 커서 이동 | vi -100 test.txt|
|vi +/"{검색 문자열}" {파일명}| "문자열"의 처음발생 단어부터 열기 | vi -/"adc"text.txt |
|vi -r{파일명}| 손상된 파일 회복 | vi -r text.txt |
|view {파일명}| 읽기 전용으로 열기 | view.test.txt |

## 수정 파일 열기
- "vi {파일명}" 명령어로 입력을 할 경우, 입력한 파일명이 실제 존재 할 경우 파일 수정
<br>

## 신규 파일 생성
- "vi {파일명}" 명령어로 입력을 할 경우, 입력한 파일명이 실제 존재하지 않는 경우 파일을 생성

## vi 커서 이동

| 커서 | 설명 |
| ----- | ----- |
| h (←)	| 왼쪽으로 커서 이동 |
| j (↓) |	아래로 커서 이동 |
| k (↑) |	위로 커서 이동 |
| l (→)	| 오른쪽으로 커서 이동 |
| e	| 오른쪽 한 단어의 끝 부분으로 커서 이동 |
| w	| 오른쪽 한 단어의 앞 부분으로 커서 이동 |
| b	| 왼쪽 한 단어의 앞 부분으로 커서 이동 |
| Enter	|한 행 아래로 커서 이동 |
| Back space | 한 문자 왼쪽으로 커서 이동 |
| Space Bar	| 한 문자 오른쪽으로 커서 이동 |
| ^	| 행의 맨 왼쪽으로 커서 이동 |
| $	| 행의 맨 오른쪽으로 커서 이동 |
| H	| 화면의 맨 위로 이동 |
| M	| 화면의 중간으로 이동 |
| L	| 화면의 맨 아래로 이동 |
| 숫자G	| ‘숫자’ 만큼 지정한 줄로 커서 이동 |
| Ctrl + i	| 한 화면 위로 이동 |
| Ctrl + b	| 한 화면 아래로 이동 |
| Ctrl + d	| 반 화면 아래(Down)로 이동 |
| Ctrl + u	| 반 화면 위(Up)로 이동 |
| Ctrl + e	| 한 줄씩 위로 이동 |
| Ctrl + y	| 한 줄씩 아래로 이동 |

## 문자, 행 , 삽입 명령어

| 커서 | 설명 |
| ----- | ----- |
| a	| 커서 오른쪽에 문자 삽입 |
| A	| 커서 오른쪽, 행의 끝에 문자 삽입 |
| i	| 커서 왼쪽에 문자 삽입 |
| I	| 커서 왼쪽, 행의 처음에 문자 삽입 |
| o	| 커서 아래에 행 삽입 |
| O	| 커서 위에 행 삽입 |
| ESC |	종료 |


## 텍스트 변경 명령어

| 명령어 | 설명 |
| ----- | ----- |
| cw |	단어 변경 |
| cc |	행 변경 |
| C	| 커서 오른쪽의 행 변경 |
| s	| 커서가 위치한 문자열 대체 |
| S	| 커서가 위치한 라인의 문자열 대체 |
| r	| 커서 위치 문자를 다른 문자로 대체 |
| r-Enter	| 행 분리 |
| J	| 현재 행과 아래 행 결합 |
| xp | 커서 위치 문자와 오른쪽 문자 교환 |
| ~	| 문자형(대, 소문자) 변경 |
| u	| 이전 명령 취소 |
| U	| 행 변경 사항 취소, 이전의 최종 행 취소 |
|.	| 이전 최종 명령 반복 |

## 텍스트 삭제 명령어

| 명령어 | 설명 |
| ----- | ----- |
| x	| 커서가 있는 문자 삭제 |
| nx	| 커서가 있는 위치부터 n개의 문자를 삭제 |
| dw	| 현재 커서에 있는 한 단어 삭제 |
| dd	| 커서가 있는 라인 삭제 |
| ndd	| 커서가 있는 라인부터 n개의 라인 삭제 |
| db	| 커서의 위치에서 거꾸로 한 단어 삭제 |
| D	| 커서 오른쪽 행 삭제 |
| :5,10d	| 5~10번째 행 삭제 |

## 복사 및 이동 명령어
| 명령어 | 설명 |
| ----- | ----- |
| yy	| 커서가 위치한 줄 복사
| Y	| 행 yank 또는 복사
| yh	| 커서의 왼쪽 문자 복사
| yl	| 커서에 위치한 문자 복사
| yi	| 커서가 위치한 줄과 그 아랫줄 복사
| yk	| 커서가 위치한 줄과 그 윗줄 복사
| p	| yank 되거나 삭제된 행 현재 행 위로 삽입
| P	| yank 되거나 삭제된 행 현재 행 아래에 삽입
| :1,2 co 3	| 1~2행을 3행 다음으로 복사
| :4,5 m 6	| 4~5행을 6행 위로 이동

## 한줄 복사
<p data-ke-size="size16"><span style="font-family: 'Noto Serif KR';">해당 라인에서 'yy', 즉 y를 두번 누르면 캐시에 저장이 된다.</span><br><span style="font-family: 'Noto Serif KR';">붙여넣기를 원하는 곳으로 이동하여 'p'를 누르면 커서 다음 라인에 붙여넣기가 된다.</span></p>

## 블럭 복사
<p data-ke-size="size16"><span style="font-family: 'Noto Serif KR';">'v'키를 누른 후 커서를 이동하여 블력을 설정한다.</span><br><span style="font-family: 'Noto Serif KR';">(putty의 경우 블럭이 설정되는 모습이 보이나, ssh의 경우 블럭 모습이 나타나지 않으나 실제로는 설정되고 있다.)</span><br><span style="font-family: 'Noto Serif KR';">원하는 부분을 블럭으로 설정한 뒤(설정 완료키는 없다) 'y'키를 누르면 캐시에 복사가 된다.</span><br><span style="font-family: 'Noto Serif KR';">같은 방법으로 원하는 곳으로 이동하여 'p'를 누르면 커서 다음 라인에 붙여넣기가 된다.</span></p>

## 행 번호 설정 명렁어

| 명령어 | 설명 |
| ----- | ----- |
| :set nu 또는 :set number	| 에디터의 각 행의 좌측에 행 번호 표시 | 
| :set nonu	| 에디터의 각 행의 좌측 행 번호 숨기기 |

## 행찾기 명령어

| 명령어 | 설명 |
| ----- | ----- |
| G	| 파일의 마지막 행으로 가기 |
| 21G	| 파일의 21번째 행으로 가기 |
| Ctrl + G	| 현재 File name과 커서의 라인 정보 |

## 탐색 및 대체 명령어

| 명령어 | 설명 |
| ----- | ----- |
| /{검색할 문자열}	| 오른쪽 아래 방향으로 문자열 검색
| ?{검색할 문자열}	| 왼쪽 위 방향으로 문자열 검색
| n	| 문자열의 다음으로 계속 검색
| N	| 문자열의 이전으로 계속 검색
| :g/search-string/s/	| 각 발생 탐색 후 확인하고 대체
| :s/string/rep	| 현재 행의 str을 rep로 대체
| :1,.s/string/rep/	| 1부터 현재 행의 str을 rep로 대체
| :%s/string/rep/g	| 파일 전체 str을 rep로 전부대체
| :.$/aaa/bbb	| 커서의 위치로부터 파일의 끝까지 있는 모든 aaa를 bbb로 대체

## 화면 정리 명렁어

| 명령어 | 설명 |
| ----- | ----- |
| Ctrl + l	| 불필요한 화면정리 후 다시 표시 |

## 파일 명령어

| 명령어 | 설명 | 예제 |
| ----- | ----- | ----- |
| :r {파일명}	| 커서 다음에 파일 삽입	| :r test.txt |
| :{행번호} r {파일명}	| 입력한 파일을 입력한 행번호 다음에 삽입	| :10 r test.txt |

## 보관 및 종료 명령어

| 명령어 | 설명 |
| ----- | ----- |
| :w	| 변경사항 저장 |
| :w {파일명}	| 변경사항 입력한 파일명으로 저장 |
| :wq	| 변경사항 보관 후 vi 종료. ZZ 명령과 같음. :w(기록)과 :q(종료) 를 연속적으로 수행. |
| ZZ	| 변경사항 보관 후 vi 종료. 임시 버퍼의 내용을 vi로 호출할때 사용되었던 파일에 기록한 후 vi를 빠져나옴. |
| :q!	| 변경사항 보관하지 않고 종료 |
| q	| 수정한 파일을 저장하지 않고 vi 종료 |
| e! | 수정한 것을 무시하고 다시 편집상태로 |

## 기타

| 문자 | 설명 |
| ----- | ----- |
| .	| 현재 line |
| %	| 전체 line |
| $	| 파일 맨끝 line |
| 1,$	| % |
| 2,3	| 2 ~ 3 line |

<!-- 광고 -->
<p data-ke-size="size16">
<script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</p>
<p><ins class="adsbygoogle" style="display: block; height: 444px;" data-ad-format="autorelaxed" data-ad-client="ca-pub-1448661692689995" data-ad-slot="9713862438" data-adsbygoogle-status="done" data-ad-status="filled"><div id="aswift_2_host" tabindex="0" title="Advertisement" aria-label="Advertisement" style="border: none; height: 444px; width: 740px; margin: 0px; padding: 0px; position: relative; visibility: visible; background-color: transparent; display: inline-block;"><iframe id="aswift_2" name="aswift_2" browsingtopics="true" style="left:0;position:absolute;top:0;border:0;width:740px;height:444px;" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" width="740" height="444" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allow="attribution-reporting" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-1448661692689995&amp;output=html&amp;h=444&amp;slotname=9713862438&amp;adk=4177243178&amp;adf=1386988507&amp;pi=t.ma~as.9713862438&amp;w=740&amp;cr_col=4&amp;cr_row=2&amp;fwrn=2&amp;lmt=1705976625&amp;rafmt=9&amp;format=740x444&amp;url=https%3A%2F%2Fiamfreeman.tistory.com%2Fentry%2Fvi-vim-%25ED%258E%25B8%25EC%25A7%2591%25EA%25B8%25B0-%25EB%25AA%2585%25EB%25A0%25B9%25EC%2596%25B4-%25EC%25A0%2595%25EB%25A6%25AC-%25EB%258B%25A8%25EC%25B6%2595%25ED%2582%25A4-%25EB%25AA%25A8%25EC%259D%258C-%25EB%25AA%25A9%25EB%25A1%259D&amp;host=ca-host-pub-9691043933427338&amp;crui=image_stacked&amp;fwr=0&amp;wgl=1&amp;uach=WyJtYWNPUyIsIjE0LjEuMiIsIng4NiIsIiIsIjEyMC4wLjYwOTkuMTI5IixudWxsLDAsbnVsbCwiNjQiLFtbIk5vdF9BIEJyYW5kIiwiOC4wLjAuMCJdLFsiQ2hyb21pdW0iLCIxMjAuMC42MDk5LjEyOSJdLFsiR29vZ2xlIENocm9tZSIsIjEyMC4wLjYwOTkuMTI5Il1dLDBd&amp;dt=1705976499723&amp;bpp=52&amp;bdt=693&amp;idt=540&amp;shv=r20240118&amp;mjsv=m202401180101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D9270f9d8c1ebf88b-225f118517e400d0%3AT%3D1695685743%3ART%3D1705976500%3AS%3DALNI_MZUatrACGBM4HOJZbstXKGn-fQeEw&amp;gpic=UID%3D00000d95176b1e03%3AT%3D1695685743%3ART%3D1705976500%3AS%3DALNI_MYY2mj_7PlUB80OGan9r2kFhWRGiQ&amp;prev_fmts=0x0%2C740x280%2C230x600%2C230x600%2C1663x821%2C1005x124%2C230x791%2C230x600&amp;nras=3&amp;correlator=8294022334199&amp;frm=20&amp;pv=1&amp;ga_vid=771509210.1705898644&amp;ga_sid=1705976500&amp;ga_hid=740674132&amp;ga_fc=1&amp;ga_cid=289761197.1705898645&amp;u_tz=540&amp;u_his=2&amp;u_h=1050&amp;u_w=1680&amp;u_ah=1025&amp;u_aw=1680&amp;u_cd=24&amp;u_sd=2&amp;dmc=8&amp;adx=60&amp;ady=7250&amp;biw=1663&amp;bih=821&amp;scr_x=0&amp;scr_y=4064&amp;eid=95320239%2C44759875%2C44759926%2C44759837%2C31080334%2C31080442%2C42531705%2C44809005%2C95322183%2C95320892%2C95321627%2C95322166%2C31078663%2C31078665%2C31078668%2C31078670&amp;oid=2&amp;psts=AOrYGskAEHAtK3sZvSj5i_lBlwhU3OusN69-wnegJCwnNkoURnpmk1P0ffMRfjskYH6jcePCiKb7WoenFycBUah964PVJiKR%2CAOrYGslq6P3tQXER9t-PA6g9lVhgbsNSPwQ_pn93xMwZmt0SaiQ26RsuGfype_f_-FMbaOAVxU44p04d1tyujOR-R53h%2CAOrYGsnmkaqoPx6QXGwkwB8kDdWU6a7es9voihGHFAeWNeC8xo4Jx2t2u7AuhU4dFeXJffEEdbQCH9TzqfTJoDqu1ITKKN-E%2CAOrYGsl12GiuiJzjdPiSnVovs8CN4YxkBJdDDws6ocUCcdJv5-arM6Xs3z2Sne9HtCNO9t2XkBoQqBsGD2AgqCO7grnvFL3KwMxMoPmrzTAz10VShJ0%2CAOrYGsnPxtCRCbVND1HhiWlvGSCbhszeksq9rLI_wr_Bd2myeEd5ry1etfwTCk7QlOK8T3pTHuaE7S-amaxMVGHEjGgwjlSv&amp;pvsid=1572374449251864&amp;tmod=1478314690&amp;uas=0&amp;nvt=3&amp;topics=1&amp;tps=1&amp;fc=1920&amp;brdim=0%2C25%2C0%2C25%2C1680%2C25%2C1663%2C942%2C1663%2C821&amp;vis=1&amp;rsz=o%7C%7CeEbr%7C&amp;abl=CS&amp;pfx=0&amp;fu=128&amp;bc=31&amp;bz=1&amp;td=1&amp;psd=W251bGwsbnVsbCxudWxsLDNd&amp;nt=1&amp;ifi=3&amp;uci=a!3&amp;btvi=5&amp;fsb=1&amp;dtd=M" data-google-container-id="a!3" data-google-query-id="COy0r5a68oMDFSgWewcdzoUL7g" data-load-complete="true"></iframe></div></ins></p>
<p data-ke-size="size16">
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</p>

<!-- 단축기 관련 이미지 -->
<p data-ke-size="size16">&nbsp;</p>
<p></p><figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-origin-width="1024" data-origin-height="724"><span data-url="https://blog.kakaocdn.net/dn/lpc7o/btqxDU9uTIy/8JvHLA2M1ikoUURGsdghpK/img.gif" data-lightbox="lightbox" data-alt="vi/vim 단축키 (English)"><img src="https://blog.kakaocdn.net/dn/lpc7o/btqxDU9uTIy/8JvHLA2M1ikoUURGsdghpK/img.gif" srcset="https://blog.kakaocdn.net/dn/lpc7o/btqxDU9uTIy/8JvHLA2M1ikoUURGsdghpK/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-origin-width="1024" data-origin-height="724"></span><figcaption>vi/vim 단축키 (English)</figcaption>
</figure>
<p></p>
<p data-ke-size="size16">&nbsp;</p>
<p></p><figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-origin-width="1280" data-origin-height="875"><span data-url="https://blog.kakaocdn.net/dn/bLtCUd/btqxEjgWM39/OaUnbVarrfSOXBjIiPPwOK/img.png" data-lightbox="lightbox" data-alt="vi/vim 단축키 (한글)"><img src="https://blog.kakaocdn.net/dn/bLtCUd/btqxEjgWM39/OaUnbVarrfSOXBjIiPPwOK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLtCUd%2FbtqxEjgWM39%2FOaUnbVarrfSOXBjIiPPwOK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-origin-width="1280" data-origin-height="875"></span><figcaption>vi/vim 단축키 (한글)</figcaption>
</figure>
<p></p>
<p data-ke-size="size16">&nbsp;</p>
<p></p><figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-origin-width="1024" data-origin-height="661"><span data-url="https://blog.kakaocdn.net/dn/kFlJp/btqxF95tFhw/RypbQaLAMPKpW67S9Obwvk/img.jpg" data-lightbox="lightbox" data-alt="이동에 편리한 단축키"><img src="https://blog.kakaocdn.net/dn/kFlJp/btqxF95tFhw/RypbQaLAMPKpW67S9Obwvk/img.jpg" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkFlJp%2FbtqxF95tFhw%2FRypbQaLAMPKpW67S9Obwvk%2Fimg.jpg" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-origin-width="1024" data-origin-height="661"></span><figcaption>이동에 편리한 단축키</figcaption>
</figure>
<p></p>
<p data-ke-size="size16">&nbsp;</p>
<p></p><figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-origin-width="1024" data-origin-height="750"><span data-url="https://blog.kakaocdn.net/dn/rbPIH/btqxFTBNmFe/OLQD2v4Ub4AIsFOilpHLpK/img.jpg" data-lightbox="lightbox" data-alt="키보드 모양의 명령어 단축키"><img src="https://blog.kakaocdn.net/dn/rbPIH/btqxFTBNmFe/OLQD2v4Ub4AIsFOilpHLpK/img.jpg" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrbPIH%2FbtqxFTBNmFe%2FOLQD2v4Ub4AIsFOilpHLpK%2Fimg.jpg" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-origin-width="1024" data-origin-height="750"></span><figcaption>키보드 모양의 명령어 단축키</figcaption>
</figure>
<figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-filename="vi-vim-tutorial-1.gif" data-origin-width="1024" data-origin-height="724"><span data-url="https://blog.kakaocdn.net/dn/6Cemp/btqxFTu3p9v/vaaRbeboIBeGkcN1L34CXk/img.gif" data-lightbox="lightbox" data-alt="vi/vim lesson 1 - various commands"><img src="https://blog.kakaocdn.net/dn/6Cemp/btqxFTu3p9v/vaaRbeboIBeGkcN1L34CXk/img.gif" srcset="https://blog.kakaocdn.net/dn/6Cemp/btqxFTu3p9v/vaaRbeboIBeGkcN1L34CXk/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="vi-vim-tutorial-1.gif" data-origin-width="1024" data-origin-height="724"></span><figcaption>vi/vim lesson 1 - various commands</figcaption>
</figure>
<figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-filename="vi-vim-tutorial-2.gif" data-origin-width="1024" data-origin-height="724"><span data-url="https://blog.kakaocdn.net/dn/dOSv3h/btqxDVm2lNZ/i9d1e5Dey60k1osD2DW4KK/img.gif" data-lightbox="lightbox" data-alt="vi/vim lesson 2 - various commands"><img src="https://blog.kakaocdn.net/dn/dOSv3h/btqxDVm2lNZ/i9d1e5Dey60k1osD2DW4KK/img.gif" srcset="https://blog.kakaocdn.net/dn/dOSv3h/btqxDVm2lNZ/i9d1e5Dey60k1osD2DW4KK/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="vi-vim-tutorial-2.gif" data-origin-width="1024" data-origin-height="724"></span><figcaption>vi/vim lesson 2 - various commands</figcaption>
</figure>
<figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-filename="vi-vim-tutorial-3.gif" data-origin-width="1024" data-origin-height="724"><span data-url="https://blog.kakaocdn.net/dn/dxOPNW/btqxFSwaR3d/4V651IlykVN7gR3SlgfbYK/img.gif" data-lightbox="lightbox" data-alt="vi/vim lesson 3 - various commands"><img src="https://blog.kakaocdn.net/dn/dxOPNW/btqxFSwaR3d/4V651IlykVN7gR3SlgfbYK/img.gif" srcset="https://blog.kakaocdn.net/dn/dxOPNW/btqxFSwaR3d/4V651IlykVN7gR3SlgfbYK/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="vi-vim-tutorial-3.gif" data-origin-width="1024" data-origin-height="724"></span><figcaption>vi/vim lesson 3 - various commands</figcaption>
</figure>
<figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-filename="vi-vim-tutorial-4.gif" data-origin-width="1024" data-origin-height="724"><span data-url="https://blog.kakaocdn.net/dn/dLESek/btqxGigNtGO/a8AnvBpt0gan5Oc6uDe6jK/img.gif" data-lightbox="lightbox" data-alt="vi/vim lesson 4 - various commands"><img src="https://blog.kakaocdn.net/dn/dLESek/btqxGigNtGO/a8AnvBpt0gan5Oc6uDe6jK/img.gif" srcset="https://blog.kakaocdn.net/dn/dLESek/btqxGigNtGO/a8AnvBpt0gan5Oc6uDe6jK/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="vi-vim-tutorial-4.gif" data-origin-width="1024" data-origin-height="724"></span><figcaption>vi/vim lesson 4 - various commands</figcaption>
</figure>
<figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-filename="vi-vim-tutorial-5.gif" data-origin-width="1024" data-origin-height="724"><span data-url="https://blog.kakaocdn.net/dn/b9Rh1R/btqxFSQoobZ/KGyfP1FQfobw5HLSZlHd40/img.gif" data-lightbox="lightbox" data-alt="vi/vim lesson 5 - various commands"><img src="https://blog.kakaocdn.net/dn/b9Rh1R/btqxFSQoobZ/KGyfP1FQfobw5HLSZlHd40/img.gif" srcset="https://blog.kakaocdn.net/dn/b9Rh1R/btqxFSQoobZ/KGyfP1FQfobw5HLSZlHd40/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="vi-vim-tutorial-5.gif" data-origin-width="1024" data-origin-height="724"></span><figcaption>vi/vim lesson 5 - various commands</figcaption>
</figure>
<figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-filename="vi-vim-tutorial-6.gif" data-origin-width="1024" data-origin-height="724"><span data-url="https://blog.kakaocdn.net/dn/dG3ZvM/btqxGiA6mHA/tE4fQZZNlK4wh17crKkutK/img.gif" data-lightbox="lightbox" data-alt="vi/vim lesson 6 - various commands"><img src="https://blog.kakaocdn.net/dn/dG3ZvM/btqxGiA6mHA/tE4fQZZNlK4wh17crKkutK/img.gif" srcset="https://blog.kakaocdn.net/dn/dG3ZvM/btqxGiA6mHA/tE4fQZZNlK4wh17crKkutK/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="vi-vim-tutorial-6.gif" data-origin-width="1024" data-origin-height="724"></span><figcaption>vi/vim lesson 6 - various commands</figcaption>
</figure>
<figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-filename="vi-vim-tutorial-7.gif" data-origin-width="1024" data-origin-height="724"><span data-url="https://blog.kakaocdn.net/dn/kSxLY/btqxGiHSwwC/QqzPkfu98sE1p6TQDEc7K0/img.gif" data-lightbox="lightbox" data-alt="vi/vim lesson 7 - various commands"><img src="https://blog.kakaocdn.net/dn/kSxLY/btqxGiHSwwC/QqzPkfu98sE1p6TQDEc7K0/img.gif" srcset="https://blog.kakaocdn.net/dn/kSxLY/btqxGiHSwwC/QqzPkfu98sE1p6TQDEc7K0/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="vi-vim-tutorial-7.gif" data-origin-width="1024" data-origin-height="724"></span><figcaption>vi/vim lesson 7 - various commands</figcaption>
</figure>

<b>출처 : [http://www.viemu.com](http://www.viemu.com)

<br>

***
<br>

    💻 열심히 공부해서 작성 중이니 오류나 틀린 부분이 있을 경우 
      언제든지 댓글 혹은 메일로 알려주시면 감사하겠습니다! 😸


[맨 위로 이동하기](#){: .btn .btn--primary }{: .align-right}