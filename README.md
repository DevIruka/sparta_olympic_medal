# Olympic Medal Tracker 만들기

<img width="954" alt="메인 화면" src="https://github.com/user-attachments/assets/4f35ca30-c5c9-4181-940e-c9550eca4086">

## 프로젝트 소개.
올림픽의 메달 집계를 관리하는 Olympic Medal Tracker입니다. 

## 주요기능

### 1. Create, Read.
![create](https://github.com/user-attachments/assets/2cf9791a-6432-4334-95c4-ff79b9252917)
데이터를 읽어들이고, 표에 표시합니다. 만약, 데이터가 불충분하게 입력되었거나, 이미 존재하는 국가가 입력될 경우에는 validation 체크를 거쳐 입력을 막습니다. 생성된 데이터는 로컬 스토리지에 저장됩니다. 

### 2. Update.
![update](https://github.com/user-attachments/assets/4965e79e-d698-411e-8d02-36686ff01cc0)

업데이트 기능입니다. 업데이트를 통해 갱신된 데이터는 새로고침을 해도 브라우저에 계속 남아있습니다. 

### 3. Delete
![delete](https://github.com/user-attachments/assets/ac0832e9-d4a4-44cb-93a8-fa7ee15a1159)

데이터를 삭제하는 기능입니다. state를 최신화함과 동시에, 로컬 스토리지의 데이터 역시 수정된 데이터로 갈아끼움으로서, 상태를 최신 상태로 유지합니다. 
