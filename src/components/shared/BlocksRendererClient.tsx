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
      <BlocksRenderer content={content} blocks={{
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              // @ts-ignore
              return <h1 id={children[0].props.text} className="">{children}</h1>
              case 2:
              // @ts-ignore
              return <h2 id={children[0].props.text} className="">{children}</h2>
              case 3:
              // @ts-ignore
              return <h3 id={children[0].props.text} className="">{children}</h3>
            case 4:
              // @ts-ignore
              return <h4 id={children[0].props.text} className="">{children}</h4>
            case 5:
              // @ts-ignore
              return <h5 id={children[0].props.text} className="">{children}</h5>
            case 6:
              // @ts-ignore
              return <h6 id={children[0].props.text} className="">{children}</h6>
            default:
              // @ts-ignore
              return <h2 id={children[0].props.text}>{children}</h2>
          }
        }
      }}/>
    </div>
  );
}
