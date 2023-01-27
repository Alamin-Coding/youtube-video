import client  from "@sanity/client";
export default client({
 projectId: "2u5ulidx",
 dataset: "production",
 useCdn: true,
 apiVersion: "2023-01-27"
})