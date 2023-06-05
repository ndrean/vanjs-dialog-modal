// source: https://github.com/lukeed/obj-str

const objStr = (obj) => {
  let k,
    cls = "";
  for (k in obj) {
    if (obj[k]) {
      cls && (cls += " ");
      cls += k;
    }
  }
  return cls;
};

export default objStr;
