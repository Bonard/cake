toast('开始执行')

let btnIndex = 0 //跳过好友助力
let commodityViewCount = 0 //浏览商品计数
let cartCount = 0 //加购计数
const interval = 4000 //任务执行间隔，手机性能差的设置大一些
const sleepTime = 20000 //有些场景加载得很慢，建议设置大一些
if (className('android.view.View').textContains('邀请好友助力').exists()) {
  btnIndex = 1
}

const task = () => {
  //跳出组队任务
  if (textContains('战队红包').exists() && textContains('预计分得').exists()) {
    if (idContains('com.jingdong.app.mall:id/fe').exists()) {
      idContains('com.jingdong.app.mall:id/fe').findOne().click()
    } else if (idContains('com.jingdong.app.mall:id/fd').exists()) {
      idContains('com.jingdong.app.mall:id/fd').findOne().click()
    } else if (idContains('fe').exists()) {
      idContains('fe').findOne().click()
    } else if (idContains('fd').exists()) {
      idContains('fd').findOne().click()
    } else {
      back()
    }
    sleep(4000)
    btnIndex = 2
  } else if (textContains('恭喜完成，获得').exists()) {
    //8s任务
    if (idContains('com.jingdong.app.mall:id/fe').exists()) {
      idContains('com.jingdong.app.mall:id/fe').findOne().click()
    } else if (idContains('com.jingdong.app.mall:id/fd').exists()) {
      idContains('com.jingdong.app.mall:id/fd').findOne().click()
    } else {
      back()
    }
  } else if (text('去完成').exists()) {
    //任务页
    click('去完成', btnIndex)
  } else if (text('浏览以下5个商品').exists()) {
    //商品浏览
    if (commodityViewCount >= 6) {
      //任务完成
      commodityViewCount = 0
      if (idContains('com.jingdong.app.mall:id/fe').exists()) {
        idContains('com.jingdong.app.mall:id/fe').findOne().click()
      } else if (idContains('com.jingdong.app.mall:id/fd').exists()) {
        idContains('com.jingdong.app.mall:id/fd').findOne().click()
      } else if (idContains('fe').exists()) {
        idContains('fe').findOne().click()
      } else if (idContains('fd').exists()) {
        idContains('fd').findOne().click()
      } else {
        back()
      }
    }
    className('android.view.View')
      .text('浏览以下5个商品')
      .findOne()
      .parent()
      .parent()
      .child(1)
      .child(commodityViewCount)
      .click()
    commodityViewCount++
  } else if (text('当前页点击加购以下5个商品').exists()) {
    //加购
    if (cartCount >= 6) {
      //任务完成
      cartCount = 0
      if (idContains('com.jingdong.app.mall:id/fe').exists()) {
        idContains('com.jingdong.app.mall:id/fe').findOne().click()
      } else if (idContains('com.jingdong.app.mall:id/fd').exists()) {
        idContains('com.jingdong.app.mall:id/fd').findOne().click()
      } else if (idContains('fe').exists()) {
        idContains('fe').findOne().click()
      } else if (idContains('fd').exists()) {
        idContains('fd').findOne().click()
      } else {
        back()
      }
    }
    className('android.view.View')
      .text('当前页点击加购以下5个商品')
      .findOne()
      .parent()
      .parent()
      .child(1)
      .child(cartCount)
      .child(2)
      .click()
    cartCount++
  } else if (text('购物车').exists() && text('店铺').exists()) {
    //商品页
    sleep(4000)
    if (idContains('com.jd.lib.productdetail:id/fe').exists()) {
      idContains('com.jd.lib.productdetail:id/fe').findOne().click()
    } else if (idContains('com.jd.lib.productdetail:id/fd').exists()) {
      idContains('com.jd.lib.productdetail:id/fd').findOne().click()
    } else if (idContains('fe').exists()) {
      idContains('fe').findOne().click()
    } else if (idContains('fd').exists()) {
      idContains('fd').findOne().click()
    } else {
      back()
    }
  } else {
    //其他的一些浏览任务
    sleep(sleepTime)
    if (idContains('ui-bgm').exists() && idContains('pop-start-btn').exists()) {
      //游戏
      sleep(2000)
      idContains('pop-start-btn').findOne().click()
      idContains('pop-fail2-btn').waitFor()
      idContains('pop-fail2-btn').findOne().click()
    } else if (className('android.widget.Button').desc('返回').exists()) {
      //领京豆页面等
      className('android.widget.Button').desc('返回').findOne().click()
    } else if (className('android.view.ViewGroup').desc('返回按钮').exists()) {
      className('android.view.ViewGroup').desc('返回按钮').findOne().click()
    } else if (idContains('com.jingdong.app.mall:id/fe').exists()) {
      idContains('com.jingdong.app.mall:id/fe').findOne().click()
    } else if (idContains('com.jingdong.app.mall:id/fd').exists()) {
      idContains('com.jingdong.app.mall:id/fd').findOne().click()
    } else if (idContains('fe').exists()) {
      idContains('fe').findOne().click()
    } else if (idContains('fd').exists()) {
      idContains('fd').findOne().click()
    } else {
      back()
    }
  }
}
for (;;) {
  sleep(interval)
  task()
}
