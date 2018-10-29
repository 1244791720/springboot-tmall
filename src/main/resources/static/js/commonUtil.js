/**
 *  ajax 获取数据类
 */
function commonUtil() {
    var util = new Object()

    // 获取Product对象 json数据 通过productId
    util.getProductByPIdAjax = function (pid) {
        // 设置ajax为同步
        $.ajaxSetup({
            async: false
        })

        $.get("/product" + pid, function (data, status) {
            window.product = JSON.parse(data)
        })

        return product
    }

    // 获取Product对象 json数据 通过categoryId
    util.getProductByCIdAjax = function (cid) {
        // 设置ajax为同步
        $.ajaxSetup({
            async: false
        })

        $.get("/product/cid" + cid, function (data, status) {
            window.product = JSON.parse(data)
        })

        return product
    }


    // 获取 Category json数组
    util.getCategorysByAjax = function () {
        // 设置ajax为同步
        $.ajaxSetup({
            async: false
        })

        $.get("/category", function (data, status) {
            window.categorys = JSON.parse(data)
        })

        return categorys;
    }

    // 获取 ProductImage数组
    util.getProductImagesByPid = function (pid) {
        // 设置ajax为同步
        $.ajaxSetup({
            async: false
        })

        $.get("/productImages" + pid, function (data, status) {
            window.productImages = JSON.parse(data)
        })

        return productImages;
    }

    // 添加html内容到某个div
    util.setDivInnerHtml = function (div, html) {
        div.innerHTML = html
    }

    // 获取地址栏的参数
    util.GetQueryString = function (name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return unescape(r[2]); return null;
    }

    util.getPropertysByCid = function (cid) {
        // 设置ajax为同步
        $.ajaxSetup({
            async: false
        })

        $.get("/propertys" + cid, function (data, status) {
            window.propertys = JSON.parse(data)
        })

        return propertys
    }

    util.getPropertyValueByCidAndPtid = function (ptid,pid) {
        var url = "/propertyValue" + ptid +"&"+pid
        // 设置ajax为同步
        $.ajaxSetup({
            async: false
        })

        $.get(url, function (data, status) {
            window.propertyValue = JSON.parse(data)
        })

        return propertyValue
    }

    return util
}


