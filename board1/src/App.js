import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const board_list = [
    {
      'boardNo': 1,
      'title': '1번 글',
      'content': '1번 글 내용',
      'writer': '김자바',
      'regDate': '2024-02-01'
    },
    {
      'boardNo': 2,
      'title': '2번 글',
      'content': '2번 글 내용',
      'writer': '홍길동',
      'regDate': '2024-02-03'
    },
    {
      'boardNo': 3,
      'title': '3번 글',
      'content': '3번 글 내용',
      'writer': '파이썬',
      'regDate': '2024-02-05'
    },
    {
      'boardNo': 4,
      'title': '4번 글',
      'content': '4번 글 내용',
      'writer': '유관순',
      'regDate': '2024-02-10'
    },
    {
      'boardNo': 5,
      'title': '5번 글',
      'content': '5번 글 내용',
      'writer': '이순신',
      'regDate': '2024-02-15'
    }
  ];
  let [isShow, setIsShow] = useState(false);
  let [idx, setIdx] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>게시글</h4>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>
                글번호
              </td>
              <td>
                제목
              </td>
              <td>
                작성자
              </td>
              <td>
                작성일
              </td>
            </tr>
          </thead>
          <tbody>
            {

              board_list.map((e, i) => {
                return (

                  <tr key={i}>
                    <td>
                      {e['boardNo']}
                    </td>
                    <td onClick={() => {
                      setIsShow(true)
                      setIdx(i)
                    }}>
                      {e['title']}
                    </td>
                    <td>
                      {e['writer']}
                    </td>
                    <td>
                      {e['regDate']}
                    </td>
                  </tr>

                )

              })

            }

          </tbody>
        </table>
      </div>
      <div>
        {
          isShow ? <Content board_list={board_list} idx={idx} /> : ''
        }
      </div>

    </div>
  );
}
function Content(props) {
  console.log()
  return (

    <div>

      <div>글번호 : {props.board_list[props.idx].boardNo}</div>
      <div>제목 : {props.board_list[props.idx].title}</div>
      <div>내용 : {props.board_list[props.idx].content}</div>
      <div>작성자 : {props.board_list[props.idx].writer}</div>
      <div>작성일 : {props.board_list[props.idx].regDate}</div>
    </div>
  )
}
export default App;
