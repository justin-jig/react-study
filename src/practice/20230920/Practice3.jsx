import React, {Component} from 'react';
import './practice.css';

class Practice3 extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectFilter : ['전체','작성자'],
            board : [],
            boardIndex : 1
        }
    }

    createBoard = () => {

        if (this.inputCreate.value === "") return alert('작성자를 입력해주세요.');
        if (this.inpuTitle.value === "") return alert('제못를 입력해주세요.');
        
        const boardList = [...this.state.board];
        boardList.push({
            bno : this.state.boardIndex,
            create : this.inputCreate.value,
            title : this.inpuTitle.value

        });

        this.setState((preState) => { 
            console.log(preState);
            return {
                ...preState,
                board: boardList,
                boardIndex : preState.boardIndex + 1
            }
        }, () => {
            this.inputCreate.value = "";
            this.inpuTitle.value = "";
            alert('등록 완료');
        })


    }


    render() {
       return ( 
            <div className='practice3_0920_box_3'>
                <fieldset>
                    <label htmlFor='create'>작성자 : </label>
                    <input ref={(ref) => this.inputCreate = ref} type="text" name="create" id="create" placeholder='작성자' />
                    <label htmlFor='title'>제목 : </label>
                    <input ref={(ref) => this.inpuTitle = ref} type="text" name="create" id="title" placeholder='제목' />
                    <button onClick={() => {this.createBoard()}}>작성</button>
                </fieldset>
                <div className='search-box'>
                    <select>
                        {this.state.selectFilter.map((index,key) => {
                            return <option key={key}> {index}</option>
                        })}
                    </select>
                    <input type="text" name="" id="" placeholder='검색어' />
                    <button onClick={() => {}}>버튼</button>
                </div>
                <table >
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.board.map((obj,key) => {
                            return (
                                <tr key={key}>
                                    <td>{obj.bno}</td>
                                    <td>{obj.title}</td>
                                    <td>{obj.create}</td>
                                </tr>
                            ) 
                        })}
                    
                    </tbody>
                </table>
            </div> 
    )}

}

export default Practice3