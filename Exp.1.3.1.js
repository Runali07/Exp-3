import React from "react";
import { ShoppingCart, CheckCircle, XCircle } from "lucide-react";
export default function ProductCard({
  name,
  price,
  image,
  inStock,
  description,
}) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 grid gap-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-xl"
      />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-lg font-bold text-indigo-600">₹{price}</p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          {inStock ? (
            <>
              <CheckCircle className="text-green-600" size={20} />
              <span className="text-green-600 font-medium">In Stock</span>
            </>
          ) : (
            <>
              <XCircle className="text-red-600" size={20} />
              <span className="text-red-600 font-medium">Out of Stock</span>
            </>
          )}
        </div>

        <button
          disabled={!inStock}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-300
            ${
              inStock
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

