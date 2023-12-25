import mongoose from "mongoose";

const productstatSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: {
      month: String,
      totalSales: Number,
      totalUnits: Number,
    },
  },

  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", productstatSchema);
export default ProductStat;
