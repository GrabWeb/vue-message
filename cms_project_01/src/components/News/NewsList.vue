<template>
    <div class="news">
        <div class="newList">
            <ul>
                <li>
                    <a href="#">
                        <div class="new_img">
                            <img src="" alt="">
                        </div>
                        <div class="content">
                            <p class="title">我爱你中国</p>
                            <div class="news-desc">
                                <p class="summary">我的摘要内容</p>
                                <p>
                                    <span class="praise">点赞数：222</span>
                                    <span class="time">发表时间：2019-07-20</span>
                                </p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'NewsList',
        data(){
            return {

            }
        }
    }
</script>

<style lang="css" scoped>
    .news{
        padding-bottom: 100px;
    }
    .newList{
        width:100%;
        border-bottom: 1px solid #CCCCCC;
        font-size:12px;
    }
    .newList ul li{
        position: relative;
    }
    .newList ul li a{
        display: block;
        width:100%;
        margin-left:30px;
    }
</style>