<template>
    <div id="my_upload">
        <ul>
            <li>
                <label>歌曲名称：&nbsp;&nbsp;</label>
                <input type="text" name="title"/>
            </li>
            <li>
                <label>来源：&nbsp;&nbsp;</label>
                <select name="source" id="source">
                    <option value="1">电影</option>
                    <option value="2">电视剧</option>
                    <option value="3">动漫</option>
                </select>
            </li>
            <li>
                <label>剧名：&nbsp;&nbsp;</label>
                <input type="text" name="playname"/>
            </li>
            <li>
                <label>上传歌曲：&nbsp;&nbsp;</label>
                <input type="file" name="title"/>
            </li>
            <li>
                <label>歌曲描述：&nbsp;&nbsp;</label>
                <textarea name="describe" id="" cols="30" rows="10"></textarea>
            </li>
            <li>
                <input type="submit" value="上传"/>
            </li>
        </ul>

    </div>
</template>
<script>
    export default {
        name:"my_upload"
    }
</script>

<style scoped>

    #my_upload ul{
        margin-top: 50px;
        border: 1px solid #d6d6d6;
        padding: 20px 0;
    }
    #my_upload ul>li{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    #my_upload ul>li>label{
        font-size: 14px;
        color: #666666;
        width: 130px;
        display: inline-block;
        text-align: right;
       line-height: 30px;
    }
    #my_upload ul>li>input,#my_upload ul>li>select{
        width: 300px;
        height: 30px;
        margin-top: 20px;
    }
    #my_upload ul>li>textarea{
        width: 300px;
        margin-top: 20px;
    }
</style>