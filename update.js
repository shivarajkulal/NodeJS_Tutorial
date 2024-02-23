const dbConnect = require("./mongodb");

const updateData = async () => {
  try {
    const collection = await dbConnect();

    const result = await collection.updateOne(
      { name: "max 5" },
      { $set: { name: "max pro 5", price: 1000 } }
    );

    console.log(result);

    if (result.modifiedCount > 0) {
      console.warn("Data updated successfully");
    } else {
      console.warn("No document matched the update criteria");
    }
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

updateData();
