import fs from "fs";

const readFileAsync = (path, encoding) => {
  const executor = (resolve, reject) => {
    const callback = (err, data) => (err ? reject(err) : resolve(data));
    fs.readFile(path, encoding, callback);
  };

  return new Promise(executor);
};

const onResolve = (data) => {
  console.log(data);
};

const onReject = (err) => {
  console.log(err);
};

readFileAsync("user.json", "utf8").then(onResolve).catch(onReject);
