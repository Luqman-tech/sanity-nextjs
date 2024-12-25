// src/utils/sanity.client.ts
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "your_project_id", // Replace with your project ID
  dataset: "production",         // Replace with your dataset name
  apiVersion: "2023-07-16",      // Use a specific date for API versioning
  useCdn: true,                  // Use CDN for faster response
});

export default client;
