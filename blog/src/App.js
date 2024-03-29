import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let title = '첫번째 글';

  let arr = [1,2];
  let num1 =arr[0];
  let num2 =arr[1];

  let [a, b] = [1,2];



  // state 변수
  let [title, setTitle] = useState(['리액트 학습','울산 맛집', '겨울 코드 추천']);
  let [likeCnt, setLikeCnt] = useState([0,0,0]);
  let [isShow, setIsShow] = useState(false);
  
  // input 태그에 입력한 값을 저장하고 있는 state 변수
  let [newTitle, setNewTitle] = useState('')

  const list = document.querySelector('.list')
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>
      <button type='button' onClick={() => {
        title[0] = '남자 옷 추천';
        setTitle([...title]);
        
      }}>글 변경</button>
      
    

      {
      title.map((e , i) => {
        return(
          
          <List key={i} title={e} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt} setIsShow={setIsShow} setTitle={setTitle} titles={title}/>
          
        );
      })
      }

      <div>
        <input type='text' onChange={(e)=>{
          // input 태그에 입력한 값을 출력
          setNewTitle(e.target.value)
          
        }}/>
        <input type='button' value={'등록'} onClick={() => {
          let copyTitle = [...title];
          copyTitle.unshift(newTitle) 
          setTitle(copyTitle)
            
        
          
        }}/>
      </div>

      {
        isShow ? <Detail/> : ''
      }
      

    </div>
  );
}

// 블로그 글 하나하나를 표현하는 컴포넌트
function List(props){
  return (
    <div className='list'>
        <h4><span onClick={()=>{
          
          props.setIsShow(true);
        }}>{props.title}</span>
        {/* <span onClick={()=>{
          // let copyLikeCnt = [...props.likeCnt];
          // copyLikeCnt[props.idx]++;
          // props.setLikeCnt(copyLikeCnt);
          
          
          props.likeCnt[props.idx]++;
          props.setLikeCnt([...props.likeCnt]);



        }}>👍</span> {props.likeCnt[props.idx]}  */}
        </h4>
        <p>2월 19일 작성</p>
        <p><button type='button' onClick={(e)=>{
          let copyTitle = [...props.titles];
          copyTitle.splice(props.idx,1);
          props.setTitle(copyTitle)
          
        }}>삭제</button></p>
    </div>
  );
}


// 상세 정보를 표현하는 컴포넌트
function Detail(){
  return(
      <div className='detail'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

export default App;
