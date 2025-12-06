// Generics Function 
// node src/genericsFunction.ts


interface ApiResponse<T> {
  status: number;
  data: T;
}

function createResponse<T>(data: T): ApiResponse<T> {
  return { status: 200, data };
}

const userRes = createResponse({ id: 1, name: "Shuvo" });
const productRes = createResponse({ id: 11, title: "Laptop" });

console.log(userRes);



