export default {
  name: '姓名',
  tel: '電話',
  save: '保存',
  confirm: '確認',
  cancel: '取消',
  delete: '刪除',
  loading: '加載中...',
  noCoupon: '暫無優惠券',
  nameEmpty: '請填寫姓名',
  addContact: '添加聯系人',
  telInvalid: '請填寫正確的電話',
  jxlCalendar: {
    end: '結束',
    start: '開始',
    title: '日期選擇',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    rangePrompt: (maxRange: number) => `最多選擇 ${maxRange} 天`,
  },
  jxlCascader: {
    select: '請選擇',
  },
  jxlPagination: {
    prev: '上一頁',
    next: '下一頁',
  },
  jxlPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...',
  },
  jxlSubmitBar: {
    label: '合計:',
  },
  jxlCoupon: {
    unlimited: '無門檻',
    discount: (discount: number) => `${discount}折`,
    condition: (condition: number) => `滿${condition}元可用`,
  },
  jxlCouponCell: {
    title: '優惠券',
    count: (count: number) => `${count}張可用`,
  },
  jxlCouponList: {
    exchange: '兌換',
    close: '不使用',
    enable: '可使用優惠券',
    disabled: '不可使用優惠券',
    placeholder: '輸入優惠碼',
  },
  jxlAddressEdit: {
    area: '地區',
    postal: '郵政編碼',
    areaEmpty: '請選擇地區',
    addressEmpty: '請填寫詳細地址',
    postalEmpty: '郵政編碼不正確',
    addressDetail: '詳細地址',
    defaultAddress: '設為默認收貨地址',
  },
  jxlAddressList: {
    add: '新增地址',
  },
};
