// Generics with interface
// node src/genericsinterface.ts

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

// User API
interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  status: 200,
  message: "Success",
  data: { id: 1, name: "Shuvo" },
};

// Product API
interface Product {
  id: number;
  title: string;
  price: number;
}

const productResponse: ApiResponse<Product> = {
  status: 200,
  message: "Success",
  data: { id: 101, title: "Laptop", price: 50000 },
};

console.log(userResponse);

