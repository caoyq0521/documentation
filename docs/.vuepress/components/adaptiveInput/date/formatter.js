const output = {
  /**
   * 年月日输出格式化
   * @param {Date} pick 内部时间对象
   * @return {String} YYYY-MM-DD
   */
  date: function(pick) {
    const year = pick.getFullYear();

    let month = pick.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    let date = pick.getDate();
    date = date < 10 ? `0${date}` : date;

    return `${year}-${month}-${date}`;
  },

  /**
   * 时分输出格式化 24小时制
   * @param {String} pick 内部选中字符串
   * @return {String} HH:mm
   */
  time: function(pick) {
    return pick;
  },

  /**
   * 年月输出格式化
   * @param {Date} pick 内部时间对象
   * @return {String} YYYY-MM
   */
  'year-month': function(pick) {
    const year = pick.getFullYear();

    let month = pick.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    return `${year}-${month}`;
  },

  /**
   * 月日输出格式化
   * @param {Date} pick 内部时间对象
   * @return {String} MM-DD
   */
  'month-day': function(pick) {
    let month = pick.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    let date = pick.getDate();
    date = date < 10 ? `0${date}` : date;

    return `${month}-${date}`;
  },

  /**
   * 年月日时输出格式化
   * @param {Date} pick 内部时间对象
   * @return {String} YYYY-MM-DD HH
   */
  datehour: function(pick) {
    const year = pick.getFullYear();

    let month = pick.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    let date = pick.getDate();
    date = date < 10 ? `0${date}` : date;

    let hour = pick.getHours();
    hour = hour < 10 ? `0${hour}` : hour;

    return `${year}-${month}-${date} ${hour}`;
  },

  /**
   * 年月日时分输出格式化,时间部分按照24小时制输出
   * @param {Date} pick 内部时间对象
   * @return {String}  YYYY-MM-DD HH:mm
   */
  datetime: function(pick) {
    const year = pick.getFullYear();

    let month = pick.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    let date = pick.getDate();
    date = date < 10 ? `0${date}` : date;

    let hour = pick.getHours();
    hour = hour < 10 ? `0${hour}` : hour;

    let minute = pick.getMinutes();
    minute = minute < 10 ? `0${minute}` : minute;

    return `${year}-${month}-${date} ${hour}:${minute}`;
  }
};

const input = {
  /**
   * 年月日输入格式化
   * @param {String} value YYYY-MM-DD
   * @return {Date}
   */
  date: function(value) {
    const arr = value.split('-');
    arr[1] -= 1;
    return new Date(...arr);
  },

  /**
   * 时分输入格式化
   * @param {String} value HH:mm
   */
  time: function(value) {
    return value;
  },

  /**
   * 年月输入格式化
   * @param {String} value YYYY-MM
   * @return {Date}
   */
  'year-month': function(value) {
    const fragment = value.split('-');
    fragment[1] -= 1;
    return new Date(...fragment);
  },

  /**
   * 月日输入格式化
   * @param {String} value MM-DD
   */
  'month-day': function(value) {
    const fragment = value.split('-');
    const month = fragment[0] / 1 - 1; // 月份从0算起，所以需要减一
    const date = fragment[1] / 1;
    const year = (new Date()).getFullYear();
    return new Date(year, month, date);
  },

  /**
   * 年月日时输入格式化
   * @param {String} value YYYY-MM-DD HH
   * @return {Date}
   */
  datehour: function(value) {
    const fragment = value.split(' ');
    const date = fragment[0].split('-');
    date[1] -= 1;
    const time = fragment[1];
    return new Date(...date.concat(time));
  },

  /**
   * 年月日时分输入格式化
   * @param {String} value YYYY-MM-DD HH:mm
   * @return {Date}
   */
  datetime: function(value) {
    const fragment = value.split(' ');
    const date = fragment[0].split('-');
    date[1] -= 1; // 日期对象的月份从0到11，正常日期的月份减一以便构造日期对象
    const time = fragment[1].split(':');
    return new Date(...date.concat(time));
  }
};

export {
  output,
  input
};
