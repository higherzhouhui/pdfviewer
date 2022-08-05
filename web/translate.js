import translate from 'google-translate-open-api';

const result = await translate(`I'm fine.`, {
  tld: "cn",
  to: "zh-CN",
});
const data = result.data[0];
console.log(data);