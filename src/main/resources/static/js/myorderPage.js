var log = console.log.bind(console)

var changeTableByStatus = () => {
    var ods = $('.orderType div')
    var olits = $('.orderListItem .orderListItemTable')
    ods.each(function() {
        var od = $(this)
        od.on('click', () => {
            var odIndex = od.index()
            od.attr('class', 'selectedOrderType')
            od.siblings().removeClass('selectedOrderType')
            switch (odIndex) {
                /*代付款*/
                case 1 :
                    olits.each(function() {
                        var olit = $(this)
                        if (olit.attr('orderstatus') == 'waitConfirm') {
                            olit.attr('style', 'display:block!important')
                        } else {
                            olit.attr('style', 'display:none!important')
                        }
                    })
                break;
                // case 2 :
                //     /*待发货状态*/
                // break;
                // case 3 :
                //     /*待收货状态*/
                // break;
                // case 4 :
                //     /*待评价状态*/
                // break;
                default :
                    olits.each(function() {
                        var olit = $(this)
                        olit.attr('style', 'display:block!important')
                    })
                break;
            }
        })
    })
}

var _main = () => {
    changeTableByStatus()
}

_main()
