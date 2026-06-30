import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getContent(filename: string) {
  const filePath = path.join(process.cwd(), "content", filename);

  const fileContents = fs.readFileSync(
    filePath,
    "utf8"
  );

  return matter(fileContents);
}