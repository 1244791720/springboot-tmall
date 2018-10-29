var log = console.log.bind(console);

/*show eachCategory*/
var controlEachCategory = () => {
    // productsAsideCategorys 显示的控制
    $('.eachCategory').each(function(){
        var cidEC = $(this).attr('cid')
        var productsAsideCategorys = $('.productsAsideCategorys')
        $(this).on('mouseover', function(){
            $(this).attr('style', 'background-color: white!important')
            $(this).siblings().attr('style', 'background-color:rgb(226,226,227)!important')
            productsAsideCategorys.each(function(){
                var cidPAC = $(this).attr('cid')
                if (cidEC == cidPAC) {
                    $(this).siblings().attr('style', 'left: 227.6px;display:none!important')
                    $(this).attr('style', 'left: 227.6px;display:block!important')
                }
            })
        })
    })

    $('.headbar').on('mouseover', function() {
        $('.productsAsideCategorys').hide()
        $('.eachCategory').attr('style', 'background-color:rgb(226,226,227)!important')

    })
    $('.homepageCategoryProducts').on('mouseover', function() {
        $('.productsAsideCategorys').hide()
        $('.eachCategory').attr('style', 'background-color:rgb(226,226,227)!important')

    })

    $('iframe').on('mouseover', function() {
        $('.productsAsideCategorys').hide()
        $('.eachCategory').attr('style', 'background-color:rgb(226,226,227)!important')
    })
}

/*control lunbo*/
var controlCarouselOfProduct = () => {
    $("#carousel-of-product").carousel('cycle');
    $("#carousel-of-product").carousel({
        interval: 30000
    });
}
var maoerChange = () => {
    var num = 240.5;
    var i = $($('.homepageDiv img')[0])
    $('.rightMenu span').each(function() {
        var index = $(this).index()
        $(this).on('mouseover', function() {
            switch(index) {
                case 0:
                    num = 500
                    break
                case 1:
                    num = 620
                    break
                case 2:
                    num = 720
                    break
                case 3:
                    num = 820
                    break
                case 4:
                    num = 890
                    break
                case 5:
                    num = 980
                    break
            }

            i.attr('style', `left:${num}px;`)
        })
    })


}
/*add productItem-img mask*/
var productItemImgMask = () => {
    var pImgs = $('.productItem')
    pImgs.each(function(){
        $(this).on('mouseover', function(){
            var mask = $(this).children('.product-mask')
            mask.show()
        })
        $(this).on('mouseout', function(){
            var mask = $(this).children('.product-mask')
            mask.hide()
        })


    })

}

/**
 *  获取Category json数组数据
 *  根据json数据创建 categoryMenu html代码段
 */
var createCategoryCategoryMenu = () => {
    var categoryMenu = document.getElementsByClassName("categoryMenu")[0]
    var html=""

    // 调用方法获取 category json数组
    var util = commonUtil();
    var categorys = util.getCategorysByAjax();

    // 创建多个元素 类名为 eachCategory 的div, 添加到类名为 categoryMenu 的 div
    for (var index in categorys) {
        var cid =  categorys[index].id
        var name = categorys[index].name

        html = html + `
                <div cid="${cid}" class="eachCategory" style="background-color:rgb(226,226,227)">
                        <span class="glyphicon glyphicon-link"></span>
                        <a href="">${name}</a>
                </div>
            `
    }
    categoryMenu.innerHTML = html
}

/**
 *  获取product对象 数据
 *  根据数据创建 categoryMenu html代码段
 */
var createrPoductsAsideCategorys = () => {
    // 根据页面获得cid数组
    var util = commonUtil();
    var os = document.querySelectorAll(".eachCategory")
    var html = ""
    var parent = document.getElementById("productsAsideCategorysParent");

    // 遍历cid数组获取cid并根据cid获得subtitile数据生成页面
    for(var o of os) {
        var cid = o.getAttribute("cid")
        var products = util.getProductByCIdAjax(cid)
        var rows = "" // html里面的所有row类代码段

        // 分割subTitle内的字符串通过空格
        for (var i = 0; i < products.length; i++) {
            var msg = products[i].subTitle
            var msgs = msg.trim().split(/\s+/)
            if (msgs != "") {
                rows = rows + `<div class="row">`

                for (index in msgs) {
                    rows = rows + `<a href="">${msgs[index]}</a>`
                }

                rows = rows + `
                            <div class="seperator"></div>
                 </div>
                 `
            }
        }

        html = html + `
             <div cid='${cid}' class="productsAsideCategorys" style="left: -20px; display: none;">
                    ${rows}
              </div>
        `
    }

    parent.innerHTML = html

}

/**
 *  创建 多个 eachHomepageCategoryProducts 代码段
 *  添加到 homepageCategoryProducts div 内
 */
var createEachHomepageCategoryProducts = () => {
    var util = commonUtil()
    // 生成 categoryTitle
    var categorys =  util.getCategorysByAjax()
    var html = ""

    for (c of categorys) {
        var cname = c.name
        var cid = c.id
        var products = util.getProductByCIdAjax(cid)
        var homepageCategoryProducts = document.getElementsByClassName("homepageCategoryProducts")[0]
        var productItemHtml = ""

        html = html + `
            <div class="left-mark"></div>
                <span class="categoryTitle">${cname}</span>
                <br/>
        `

        // 循环 products 生成 多个productItem div 加入 html
        for (var p of products) {
            var pname = p.name.substr(0, 20)
            var pId = p.id
            var productImages = util.getProductImagesByPid(pId)
            var pIId = productImages[0].id
            html = html + `<div class="productItem">
                    <a href="product?pid=${pId}">
                        <img src="http://tmall.how2j.cn/productSingle_middle/${pIId}.jpg" width="100px" />
                    </a>
                    <a class="productItemDescLink" href="product?pid=${pId}">
                        <span class="productItemDesc">${pname}</span>
                    </a>
                    <span class="productPrice">${p.promotePrice}</span>
                    <div class="product-mask"></div>
                </div>
            `
        }

    }

    html = html + `
            <img id="endpng" class="endpng" src="image/site/end.png">
        `
    homepageCategoryProducts.innerHTML = html
}

var _main = function() {
    // 创建类名为 CategoryCategoryMenu 的 div
    createCategoryCategoryMenu()
    // 创建类名为 PoductsAsideCategorys 的 div
    createrPoductsAsideCategorys()
    // 创建类名为 eachHomepageCategoryProducts 的 多个div并添加到 homepageCategoryProducts div 内
    createEachHomepageCategoryProducts()
    controlEachCategory()
    controlCarouselOfProduct()
    productItemImgMask()
    maoerChange()
}
window.onload = _main()
