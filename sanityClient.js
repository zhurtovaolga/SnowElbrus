import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "quyyrld9",
  dataset: "production",
  apiVersion: "2026-05-25",
  useCdn: false,
});