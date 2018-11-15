<template>
    <div id="ranking_list">
        <table>
           <thead>
               <tr>
                   <th></th>
                   <th>歌曲</th>
                   <th>歌手</th>
                   <th>时长</th>
               </tr>
           </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                      <router-link to="/song_detail">
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                      </router-link>
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        该死的温柔
                    </td>
                    <td>王嘉尔</td>
                    <td>2:30</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name:"ranking_list",
        data:function() {
            return {
                tableData: [{
                    date: '1',
                    name: '该死的温柔',
                    address: '王嘉尔',
                    time:"2:30"
                }, {
                    date: '2',
                    name: '该死的温柔',
                    address: '王嘉尔',
                    time:"2:30"
                }, {
                    date: '3',
                    name: '该死的温柔',
                    address: '王嘉尔',
                    time:"2:30"
                }, {
                    date: '4',
                    name: '该死的温柔',
                    address: '王嘉尔',
                    time:"2:30"
                }]
            }
    }
    }
</script>

<style scoped>
    table{

        width: 100%;
    }
    thead tr th{
        width: 25%;
        color: #666666;
        font-size: 14px;
    }
    tbody tr td:not(:first-child){
        padding-top: 20px;
        width: 25%;
        color: #000;
        font-size: 14px;
    }
    tbody tr td:first-child{
      display: inline-block;
      width: 40px;
      height: 40px;
      background: #006600;
      border-radius: 20px;
      color: #FFFFFF;
      margin-top: 40px;
      line-height: 40px;
    }
    tbody tr td img{
        width: 80px;
        height:80px;
    }
</style>