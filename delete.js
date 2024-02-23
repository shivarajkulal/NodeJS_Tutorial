const dbConnect = require("./mongodb");

const deleteData = async () => {
  try {
    const collection = await dbConnect();

    const result = await collection.deleteMany({ name: "max 7" });

    console.log(result);

    if (result.deletedCount > 0) {
      console.warn("Data deleted successfully");
    } else {
      console.warn("No document matched the delete criteria");
    }
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

deleteData();
