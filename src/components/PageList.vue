<template>
    <div>
        <!-- 翻页 -->
        <div id="pageList" style="height:50px;overflow:hidden;">
            <ul>
                <li><i class="fa fa-angle-double-left"></i></li>
                <li><i class="fa fa-angle-left"></i></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li><i class="fa fa-angle-right"></i></li>
                <li><i class="fa fa-angle-double-right"></i></li>
            </ul>
        </div>
    </div>
</template>
<style>
/* 翻页 */
#pageList ul li {
    cursor: pointer;
    margin-left: 6px;
    display: inline-block;
    padding: 6px 12px;
    background-color: #fff;
    color: #626262;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    transition: all .5s;
}
#pageList ul li:hover {
    background-color: #51aded;
    color: #fff;
}
</style>