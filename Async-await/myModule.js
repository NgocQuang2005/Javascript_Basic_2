export async function getDataModule() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Okee"), 1000);
  });
}
