const convertRetryPromise = (promise, interval, retries, condition) => {
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < retries; i++) {
      const value = await promise();
      console.log("value", value, condition(value));
      if (condition(value)) {
        resolve(value);
        return;
      }
      const halt = await new Promise((res) => {
        setTimeout(() => {
          res(interval);
        }, interval);
      });
      console.log("halt", halt);
    }
    reject("maximum limits exceeded");
  });
};

let val = 1;

const api = () => {
  val++;
  return new Promise((res) => {
    setTimeout(() => {
      res(val === 6);
    }, 1000);
  });
};

const conditionFunc = (val) => {
  if (val === true) {
    return true;
  }
  return false;
};

convertRetryPromise(api, 1000, 2, conditionFunc)
  .then((e) => {
    console.log("res ---", e);
  })
  .catch((e) => {
    console.log("error --- ", e);
  });
