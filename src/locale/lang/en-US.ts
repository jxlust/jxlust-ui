export default {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  loading: 'Loading...',
  noCoupon: 'No coupons',
  nameEmpty: 'Please fill in the name',
  addContact: 'Add contact',
  telInvalid: 'Malformed phone number',
  jxlCalendar: {
    end: 'End',
    start: 'Start',
    title: 'Calendar',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Choose no more than ${maxRange} days`,
  },
  jxlCascader: {
    select: 'Select',
  },
  jxlPagination: {
    prev: 'Previous',
    next: 'Next',
  },
  jxlPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...',
  },
  jxlSubmitBar: {
    label: 'Total:',
  },
  jxlCoupon: {
    unlimited: 'Unlimited',
    discount: (discount: number) => `${discount * 10}% off`,
    condition: (condition: number) => `At least ${condition}`,
  },
  jxlCouponCell: {
    title: 'Coupon',
    count: (count: number) => `You have ${count} coupons`,
  },
  jxlCouponList: {
    exchange: 'Exchange',
    close: 'Close',
    enable: 'Available',
    disabled: 'Unavailable',
    placeholder: 'Coupon code',
  },
  jxlAddressEdit: {
    area: 'Area',
    postal: 'Postal',
    areaEmpty: 'Please select a receiving area',
    addressEmpty: 'Address can not be empty',
    postalEmpty: 'Wrong postal code',
    addressDetail: 'Address',
    defaultAddress: 'Set as the default address',
  },
  jxlAddressList: {
    add: 'Add new address',
  },
};
