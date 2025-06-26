//Viết chương trình JavaScript để nhắm tới một giá trị nhất định trong một đối tượng JSON lồng nhau dựa trên khóa đã cho.
const data = {
  user: {
    id: 123,
    profile: {
      name: "Alice",
      contact: {
        email: "alice@example.com",
      },
    },
  },
  status: "active",
};

function b6(obj, targetKey) {
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (key === targetKey) {
        return obj[key];
      }
      const value = b6(obj[key], targetKey);
      if (value !== undefined) {
        return value;
      }
    }
  }
  return undefined;
}
console.log(b6(data, "name"));
