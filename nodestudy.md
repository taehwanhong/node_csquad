궁금한거 델리게이션?6tgb  

# NODE JS study
(인프런웹사이트에서 강의를 듣습니다.)

 [https://www.inflearn.com/course/node-js-%EC%9B%B9%EA%B0%9C%EB%B0%9C/]

 섹션4까지 듣습니다.(섹션 4. Router 개선 - 모듈화)
 


# 과제!!!!!!!
- DOM content load 이후 
- 서버에서 ajax 실행 응답받고
- 화면에 뿌리기
- DB에 있는 데이터를 string을 가지고 있어도 됌


### Node JS 환경 구성.
 1. http://passpo
 2. express
 

### lubuntu install and basic setup
- Ubuntu Linux
  lubuntu 16.04.2
  http://cdimage.ubuntu.com/lubuntu/releases/16.04/release/lubu ntu‐16.04.2‐desktop‐amd64.iso
- after installation
 1. update packages
 2. setup ssh connection

### DATABASE
 >DBMS = database mgmt sys.
 >데이터를 모아놓고 사용하는게 db
 >관리하는 소프트웨어를 포함하면 dbms임
 -----
 >관계형 데이터베이스 : RDBMS, 관계라는것은 데이터 데이터 사이의 관계를 이용해서 저장함
 >선언적 언어 cf절차적 언어
 >NOSQL : not only sql 관계형이 아닌 데이터베이스
 - 관련용어
 >CAP : 일관성consistency/가용성availability/수평확장partition tolerence(부분이 이상하더라도 전체는 괜찮게)
 >ACID : 원자성Atomicity(all or nothing)/일관성Consistency(삽입갱신삭제가 멀티유저에게 동시적이냐?)/
         고립성lsolation(여러명이 사용해도 마치 한명이 하나씩 쓰는것처럼 데이터 무결성 보장)/내구성Durability(안전하게 영구적으로 저장되는가)
 >확장성 : 수평확장(서버를 여러대)/수직확장(서버하나를 존나 좋게) 수직확장이 더 비싼경우가 많음
 
- SQL vs NoSQL
 > noSql은 
 > 관계형 데이터베이스의 트랜잭션은 ACID.
 > 확장성은 조금 어려움
- Graph DB
 > Graph? 데이터 관계가 복잡하게 얽혀 있는걸 그래프라고함. 싸이클이 생기면 그래프라고함
 > Neo4J는 복잡한 관계처리 지원, 친구추천 알고리즘 이런거 쓸때 그래프DB를 씀.
 
-Document DB
 > MongoDB : JSon기반 레코드 저장 join이 어려움 빠르고 사용이 간단 가장쉽게 접근가능

-Key Value DB
 > Redis 데이터베이스 분산용, 빠름, DICTIONARY형태
 
- Cloud DB
 > Amazon DynamoDB, google Firebase
 > 설치 없음 클라우드 밴더가 직접제공 고성능 고가용성,
 
 - ETC
  >Hadoop : hbase
  >Cassandra : apache에서 만든거
  
### Mysql data type
 -DataType
 >컬럼의 유형을 지정할때 씀
 >이거에따라 성능 용량 저장방식 등이 달라짐
 >서비스의 유형에 적절한 데이터타입을 선택하는건 개중요
 '''
 Create table user(
    userid Char(12) Primary Key,
    name varchar(64)
 )
 '''
 
 - MySQL 지원 Type
 > Numeric : INT, TINYINT, SMALLINT, BIGINT, DEC, FLOAT(approximate), DOUBLE(approximate) 오버플로우 조심
 > :show warnings; //에러 확인
 > Date/Time/ : time, datetime(1000~9999), date, timestamp(입력시간 자동1970~2038), year
 > :날짜계산에는 Date_sub() , Date_add()
 > :timezone설정에 주의.
 > :
 > String : 문자열. CHAR, varchar(가변), binary, blob(대용량 파일등 저장가능), text(대용량 텍스트 인코딩, 콜레이션 설정가능)
 > : 
 > Json
 > other
 > 나머지는 공식문서 참고 요망[https://dev.mysql.com/doc/refman/5.7/en/blob.html]
 
 ###JOIN도 알아봅시다 (간단, 기초)
 
 > DESC [tablename];
 > JOIN 하면 관계가 생김.
 > 형식은 Select [Collum Name] From [table1] Join [table2] B on [Condition] = B.UID;   
 
 우리가 쓰는 
 
 crud를 해야함
 Creat read use delete임
 
-----------------

### mysql
 1. 설치
 
    brew install mysql
 
 2. mysql시작
 
    mysql.server start

 3. mysql 로 들어가기
    mysql -u root
  
 4. 기초 명령어
    show databases : 데이터 베이스 출력
    show tables : 선택된 데이터 베이스의 테이블 출력
    show index [from table name] : 해당 테이블의 인덱스 목록 출력
    show variables : 환경변수 보기
    use [DATABASENAME] : DB선택
    create database [DATABASENAME] : database생성
    
    
 5. database생성
    create database jsman;
 
 6. database 선택
    use jsman;
 
 7. table생성
    create table user( 
    user_no INT(11) unsigned NOT NULL,
    user_name VARCHAR(32) NOT NULL, 
    PRIMARY KEY(user_no));
 
 8. mysql in nodejs
 [https://github.com/mysqljs/mysql]

    

### 추가로 공부할것
1. get 요청과 post요청의 차이
 [https://blog.outsider.ne.kr/312https://blog.outsider.ne.kr/312]
2. 

----------
# GIT
- 좋은 커밋 메시지
> https://item4.github.io/2016-11-01/How-to-Write-a-Git-Commit-Message/
- 생활 코딩 git 강의
> https://opentutorials.org/course/1492
> https://opentutorials.org/course/2708
- 아주 쉬운 git 강의
> https://backlogtool.com/git-guide/kr/intro/intro2_4.html
- pro git book v2(무려 한글)
> 이것만 보면 사실 완벽합니다.
> https://git-scm.com/book/ko/v2
- 브랜칭 및 workflow 이해하기
  - 직접 실습
   > http://learnbranch.urigit.com/
  - 워크 플로우
   > https://ujuc.github.io/2015/12/16/git-flow-github-flow-gitlab-flow/
   > https://guides.github.com/introduction/flow/

# PRE-Study materials
코드 스쿼드에 오기 전에 먼저 공부하고 오면 좋은 영상들의 목록입니다.

>- https://opentutorials.org/course/1688
>- https://opentutorials.org/course/1223
>- https://opentutorials.org/course/909/5142
>- https://opentutorials.org/course/668
>- https://opentutorials.org/course/669
>- https://opentutorials.org/course/1492
>- https://opentutorials.org/course/962
>- https://opentutorials.org/course/1223


# 알고리즘 관련 서적 등

1. 서적 

> 코딩인터뷰 완전 분석 (추천) - [http://www.yes24.com/24/goods/7434347?scode=032&OzSrank=1]
> 누워서 읽는 알고리즘 - [http://www.yes24.com/24/goods/22380570?scode=032&OzSrank=1]
> Introduction to algorihtm - [http://www.yes24.com/24/goods/13776831?scode=032&OzSrank=1] 

 

2. 사이트 

http://tryhelloworld.co.kr/challenges 

#linux study
1. 생활코딩 리눅스
>https://opentutorials.org/course/2598

 

2. 이것이 우분투 리눅스다. 
>https://www.youtube.com/playlist?list=PLVsNizTWUw7H0hL3MIk4POxadZVwNOycL
>https://docs.google.com/spreadsheets/d/14wb47yuIzKAnqc9vhpgLzqXmW5v0lRKfosNpUxepGKc/edit#gid=0
