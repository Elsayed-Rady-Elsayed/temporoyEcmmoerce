import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  GetCartProducts,
} from "../../redux-toolkit/slices/Cart-slice";
import { Table } from "flowbite-react";
import { useEffect } from "react";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCartProducts());
  }, []);

  return (
    <>
      <div className="overflow-x-auto h-[50vh]">
        <Table>
          <Table.Head>
            <Table.HeadCell>Product image</Table.HeadCell>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cartItems.map((product) => (
              <Table.Row
                key={product.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <img
                    src={product.image} // or product.images[0] if it's an array
                    alt={product.title} // Always include an alt text for accessibility
                    className="w-20 h-20 object-cover" // Set width and height, and make sure it covers the container properly
                  />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.title}
                </Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => {
                      dispatch(deleteFromCart(product));
                    }}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
