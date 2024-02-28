export default {
  log: (message: any, ...optionalParams: any[]) => {
    if (__DEV__) {
      console.log(new Date().toLocaleString(), message, ...optionalParams);
    }
  },
  info: (message: any, ...optionalParams: any[]) => {
    if (__DEV__) {
      console.info(new Date().toLocaleString(), message, ...optionalParams);
    }
  },
  error: (message: any, ...optionalParams: any[]) => {
    if (__DEV__) {
      console.error(new Date().toLocaleString(), message, ...optionalParams);
    }
  },
  warn: (message: any, ...optionalParams: any[]) => {
    if (__DEV__) {
      console.warn(new Date().toLocaleString(), message, ...optionalParams);
    }
  },
};
