// localStorage에 저장하는 방법
// 만약 인터넷 설정에서 기록을 삭제할 경우 초기화 되어 버림
import React, { useState } from 'react';

function checkdata(loadData) {
    if(window.localStorage.getItem('data') == null)
    {
        loadData = 0;
    }
    else{
        loadData = parseInt(window.localStorage.getItem('data'));
    }
    window.localStorage.setItem('data', loadData);
    return loadData;
}

export default function Home() {
    let loadData = window.localStorage.getItem('data');
    loadData = checkdata(loadData);
    let [cnt, changeCnt] = useState(loadData);
    

    return (
        <div>
            <h3>좋아요 <span onClick={() => {
                changeCnt(cnt + 1);
                window.localStorage.setItem('data', cnt + 1);
            }}>👍</span></h3>
            <span>{cnt}</span>
        </div>
    );
}