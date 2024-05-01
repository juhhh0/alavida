"use client";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export default function BlocksRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <div className="block-renderer">
      <BlocksRenderer content={content} />
    </div>
  );
}
