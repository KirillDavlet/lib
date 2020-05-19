import moment from 'moment-timezone';

const availableLocales: string[] = ['ru', 'en'];

export default {
  setTimezone(timezone: string) {
    moment.tz.setDefault(timezone);
  },
  async setLocale(locale: any) {
    if (availableLocales.indexOf(locale) != -1) {
      await import(`moment/locale/${locale}`);
      moment.locale(locale);
    }
  }
};

export const momentFilter = (
  input: any,
  format: any,
  local: boolean = false,
  localTime: boolean = false
) => {
  let date;
  if (Array.isArray(input) && typeof input[0] === 'string') {
    if (!local) {
      date = moment.utc(input[0], input[1], true).tz(moment().tz());
    } else {
      date = moment(input[0], input[1], true);
    }
  } else {
    if (!local) {
      if (!localTime) {
        date = moment.utc(String(input)).tz(moment().tz());
      } else {
        date = moment
          .utc(String(input))
          .hours(moment.utc().hours())
          .minutes(moment.utc().minutes())
          .seconds(moment.utc().seconds())
          .tz(moment().tz());
      }
    } else {
      date = moment(String(input));
    }
  }
  if (!input || !date.isValid()) {
    // Log a warning if moment couldn't reconcile the input. Better than throwing an error?
    //console.log('Could not build a valid `moment` object from input.' , input);
    return input;
  }
  return date.format(format);
};
