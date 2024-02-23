const dbConnect = require("./mongodb");

const insertData = async () => {
  try {
    const collection = await dbConnect();
    const result = await collection.insertMany([
      { name: "max 5", brand: "micromax", price: 420, category: "mobile" },
      { name: "max 6", brand: "micromax", price: 520, category: "mobile" },
      { name: "max 7", brand: "micromax", price: 620, category: "mobile" },
    ]);

    if (result.acknowledged) {
      console.warn("Data is inserted");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

insertData();
