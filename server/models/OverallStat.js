import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
  {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: Number,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        day: Number,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("OverallStat", OverallStatSchema);
export default Product;
