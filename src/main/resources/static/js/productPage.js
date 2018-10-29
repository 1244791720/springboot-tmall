// 获得CommonUtil对象
var util = commonUtil()

var log = console.log.bind(console)

/*控制大图src*/
var controlBigImg = () => {
    var imgs = $('.smallImageDiv img')
    var bigImg = $('.bigImg')
    imgs.each(function(){
        var img = $(this)
        img.on('mouseover', function() {
               var imgsrc = img.attr('src')
               bigImg.attr('src',imgsrc)
           })
    })
}

var showProductDetailOrProductReview = () => {
    var productReviewLink = $('.productDetailTopReviewLink')
    var productDetailLink = $('.productReviewTopPartSelectedLink')
    var productDetailDiv = $('.productDetailDiv')
    var productReviewDiv = $('.productReviewDiv')
    productDetailLink.on('click',function() {
        productReviewDiv.attr('style', 'display:none!important')
        productDetailDiv.attr('style', 'display:block!important')
        return false;
    })

    productReviewLink.on('click',function() {
        productReviewDiv.attr('style', 'display:block!important')
        productDetailDiv.attr('style', 'display:none!important')
        return false;
    })
}
/**
 *  添加减少购物数量
 */
var addBuyNum = () => {
    var updowns = $('.updown')
    var up = $(updowns[0])
    var down = $(updowns[1])
    var input = $('.productNumberSetting')
    up.on('click', function() {
        var num = input.val()
        num++
        input.val(num)
    })

    down.on('click', function() {
        var num = input.val()
        num--
        if (num <= 1) {
            num = 1
        }
        input.val(num)
    })
    log('up',up)
    log('down',down)
}
/**
 * 五个预览图加大图
 */
var createImgInimgAndInfoDiv = () => {
    var imgInimgAndInfo = document.querySelector(".imgInimgAndInfo")
    var html = ""

    var pid = util.GetQueryString('pid');
    var productImages = util.getProductImagesByPid(pid)

    html = html + `
        <img src="image/productSingle/${productImages[0].id}.jpg" class="bigImg">
    `

    html += `
        <div class="smallImageDiv">
        			<img src="image/productSingle/${productImages[0].id}.jpg" bigimageurl="image/productSingle/${productImages[0].id}.jpg" class="smallImage">
                    <img src="image/productSingle/${productImages[1].id}.jpg" bigimageurl="image/productSingle/${productImages[1].id}.jpg" class="smallImage">
                    <img src="image/productSingle/${productImages[2].id}.jpg" bigimageurl="image/productSingle/${productImages[2].id}.jpg" class="smallImage">
                    <img src="image/productSingle/${productImages[3].id}.jpg" bigimageurl="image/productSingle/${productImages[3].id}.jpg" class="smallImage">
        			<img src="image/productSingle/${productImages[4].id}.jpg" bigimageurl="image/productSingle/${productImages[4].id}.jpg" class="smallImage">
        </div>
    `
    util.setDivInnerHtml(imgInimgAndInfo,html)
}
/**
 * 顶部图片
 */
var createCategoryPictureInProductPageDiv = () => {
    var pid = util.GetQueryString('pid');
    var product = util.getProductByPIdAjax(pid)
    var cid = product.cid
    var categoryPictureInProductPageDiv = document.querySelector(".categoryPictureInProductPageDiv")
    var html = ""

    html += `
        <img class="categoryPictureInProductPage" src="image/category/${cid}.jpg">
    `

    util.setDivInnerHtml(categoryPictureInProductPageDiv, html)
}

/**
 * 创建大图右侧区域的内容
 */
var createInfoInimgAndInfoDiv = () => {
    var infoInimgAndInfo = document.querySelector(".infoInimgAndInfo")
    var html = ""
    var pid = util.GetQueryString("pid")
    var product = util.getProductByPIdAjax(pid)

    html += `
        <div class="productTitle">
			        ${product.name}
        </div>
        <div class="productSubTitle">
			        ${product.subTitle}
		</div>
		<div class="productPrice">
                    <div class="juhuasuan">
                        <span class="juhuasuanBig">聚划算</span>
                        <span>此商品即将参加聚划算，<span class="juhuasuanTime">1天19小时</span>后开始，</span>
                    </div>
        </div>
        <div class="productPriceDiv">
                    <div class="gouwujuanDiv">
                        <img height="16px" src="image/site/gouwujuan.png">
                        <span> 全天猫实物商品通用</span>
                    </div>
                    <div class="originalDiv">
                        <span class="originalPriceDesc">价格</span>
                        <span class="originalPriceYuan">¥</span>
                        <span class="originalPrice">${product.originalPrice}</span>
                    </div>
                    <div class="promotionDiv">
                        <span class="promotionPriceDesc">促销价 </span>
                        <span class="promotionPriceYuan">¥</span>
                        <span class="promotionPrice">${product.promotePrice}</span>
                    </div>
                </div>
    `

    html += `
        <div class="productSaleAndReviewNumber">
                        <div>
                            销量
                            <span class="redColor boldWord">30</span>
                        </div>  
                        <div>
                            累计评价
                            <span class="redColor boldWord"> 19</span>
                        </div>
                    </div>
                    <div class="productNumber">
                    <span>数量</span>
                    <span>
                        <span class="productNumberSettingSpan">
                            <input class="productNumberSetting" type="text" value="1">
                        </span>
                        <span class="arrow">
                            <a href="#nowhere" class="increaseNumber">
            					<span class="updown">
            							<img src="image/site/increase.png">
            					</span>
                                <span class="updownMiddle"> </span>
        					</a>
                            <a href="#nowhere" class="decreaseNumber">
            					<span class="updown">
            							<img src="image/site/decrease.png">
            					</span>
    					    </a>
                        </span>
                            件
                    </span>
                    <span>库存${product.stock}件</span>
                </div>
                <div class="serviceCommitment">
                    <span class="serviceCommitmentDesc">服务承诺</span>
                    <span class="serviceCommitmentLink">
        				<a href="#nowhere">正品保证</a>
        				<a href="#nowhere">极速退款</a>
        				<a href="#nowhere">赠运费险</a>
        				<a href="#nowhere">七天无理由退换</a>
    			    </span>
                </div>
                <div class="buyDiv">
                    <a href="buyLink">
                        <button class="buyButton">立即购买</button>
                    </a>
                    <a href="" class="addCartLink">
                        <button class="addCartButton">
                            <span class="glyphicon glyphicon-shopping-cart flipx"></span>
                            加入购物车
                        </button>
                    </a>
                </div>
    `

    util.setDivInnerHtml(infoInimgAndInfo, html)
}

/**
 * 创建商品详情div
 */
var createProductDetailDiv = () => {
    var productDetailDiv = document.querySelector(".productDetailDiv")
    var html = ""
    var pid = util.GetQueryString("pid")
    var product = util.getProductByPIdAjax(pid)
    var cid = product.cid
    var propertys = util.getPropertysByCid(cid)
    var productImages = util.getProductImagesByPid(pid)
    html += `
        <div class="productDetailTopPart">
                <a href="#nowhere" class="productDetailTopPartSelectedLink selected">
                    商品详情
                </a>
                <a href="#nowhere" class="productDetailTopReviewLink">
                    累计评价
                    <span class="productDetailTopReviewLinkNumber">19</span>
                </a>
            </div>
            <div class="productParamterPart">
                <div class="productParamter">产品参数：</div>
                <div class="productParamterList">
    `

    for(var property of propertys) {
        var ptid = property.id
        log(ptid)
        log(pid)
        var propertyValue = util.getPropertyValueByCidAndPtid(ptid, pid)
        log(propertyValue)
        if(propertyValue == null) {
            html += `
            <span>${property.name}:  暂无 </span>   
        `
        } else {
            html += `
            <span>${property.name}:  ${propertyValue.value} </span>   
        `
        }
    }

    html += `
        </div>
                <div style="clear:both"></div>
        </div>
            <div class="productDetailImagesPart">
                <img src="image/productDetail/${productImages[5].id}.jpg">
    			<img src="image/productDetail/${productImages[6].id}.jpg">
    			<img src="image/productDetail/${productImages[7].id}.jpg">
    			<img src="image/productDetail/${productImages[8].id}.jpg">
    			<img src="image/productDetail/${productImages[9].id}.jpg">
    			<img src="image/productDetail/${productImages[10].id}.jpg">
            </div>
    `
    util.setDivInnerHtml(productDetailDiv, html)
}
var _main = () => {
    createImgInimgAndInfoDiv()
    createCategoryPictureInProductPageDiv()
    createInfoInimgAndInfoDiv()
    createProductDetailDiv()
    controlBigImg()
    showProductDetailOrProductReview()
    addBuyNum()


}

_main()
