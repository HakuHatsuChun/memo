$("#save").on("click",function(){
    let key = $("#key").val();
    let memo = $("#memo").val();
    let t = new Date();
    let tt;

    let year = t.getFullYear();
    let month = t.getMonth() + 1;
    let day = t.getDate();
    let hour = t.getHours();
    let minute = t.getMinutes();
    let second = t.getSeconds();
    tt = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;

    console.log(key);
    console.log(memo);
    localStorage.setItem(key,memo);

    const html =`
        <tr>
            <th>${key}</th>
            <td>${memo + " " +tt}</td>
        </tr>
    `;

    $("#list").append(html);
    });


$("#clear").on("click").on("click",function(){
    localStorage.clear();
    $("#list").empty();
})

for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const memo = localStorage.getItem(key);
    let t = new Date();
    let tt;

    let year = t.getFullYear();
    let month = t.getMonth() + 1;
    let day = t.getDate();
    let hour = t.getHours();
    let minute = t.getMinutes();
    let second = t.getSeconds();
    tt = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    const html =`
    <tr>
        <th>${key}</th>
        <td>${memo + " " + tt}</td>
    </tr>
    `;
    $("#list").append(html);
};

