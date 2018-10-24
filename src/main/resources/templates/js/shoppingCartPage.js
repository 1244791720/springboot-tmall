var log = console.log.bind(console)

var _main = () => {
    var sai = $('.selectAllItem')
    var cpis = $('.cartProductItemIfSelected')
    var cps = $('.cartProductItemTR')
    var ctP = $('.cartTitlePrice')
    var csp = $('.cartSumPrice')
    window.allMoney = 0

    cpis.each(function() {
        var cpi = $(this)
        var cp = cpi.parents('.cartProductItemTR')
        cpi.on('click', function() {
            var b = false
            if (cpi.attr('src') == "image/site/cartNotSelected.png") {
                b = true
            }

            if (b == true) {
                cpi.attr('src', 'image/site/cartSelected.png')
                cp.attr('style', 'background-color: rgb(255, 248, 225);')
                var o = cp.find('.cartProductItemSmallSumPrice').text()
                var reg = /[0-9]/
                o =  o.substring(o.search(reg))
                o = o.replace(',', '')
                o = parseFloat(o);
                allMoney += o
                ctP.text('￥' + allMoney)
                csp.text('￥' + allMoney)
            } else {
                cpi.attr('src', 'image/site/cartNotSelected.png')
                cp.attr('style', 'background-color: rgb(255, 255, 255);')
                var o = cp.find('.cartProductItemSmallSumPrice').text()
                var reg = /[0-9]/
                o =  o.substring(o.search(reg))
                o = o.replace(',', '')
                o = parseFloat(o);
                allMoney -= o
                ctP.text('￥' + allMoney)
                csp.text('￥' + allMoney)
            }

        })
    })
    sai.on('click', function() {

        cpis.each(function() {
            var cpi = $(this)
            cpi.click()
        })

        var b = false
        if (sai.attr('src') == "image/site/cartNotSelected.png") {
            b = true
        }
        log(b)
        if (b == true) {
            sai.attr('src', 'image/site/cartSelected.png')
        } else {
            sai.attr('src', 'image/site/cartNotSelected.png')
        }

    })
}

_main()
