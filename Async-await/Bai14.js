//
(async () => {
  try {
    const module = await import("./myModule.js");
    const result = await module.getDataModule();
    console.log(result);
  } catch (error) {
    console.error("Lỗi:", error);
  }
})();
