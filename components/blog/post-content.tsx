import { FiCheck, FiX } from "react-icons/fi";
import type { BlogBlock } from "@/lib/data";
import { slugify } from "@/lib/utils";

export default function PostContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-7">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                id={slugify(block.text)}
                className="scroll-mt-28 pt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={i} className="text-base leading-relaxed text-foreground/70">
                {block.text}
              </p>
            );

          case "callout":
            return (
              <div
                key={i}
                className="glass rounded-2xl border-l-2 border-l-accent px-5 py-4 text-base font-medium text-foreground"
              >
                {block.text}
              </div>
            );

          case "list": {
            const Icon =
              block.tone === "con" ? FiX : block.tone === "pro" ? FiCheck : null;
            const iconColor =
              block.tone === "con" ? "text-red-400" : "text-accent";
            return (
              <div key={i} className="flex flex-col gap-3">
                {block.title && (
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {block.title}
                  </h3>
                )}
                <ul className="flex flex-col gap-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-relaxed text-foreground/70"
                    >
                      {Icon ? (
                        <Icon
                          className={`mt-1 shrink-0 ${iconColor}`}
                          size={16}
                        />
                      ) : (
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          case "table":
            return (
              <div
                key={i}
                className="glass overflow-x-auto rounded-2xl [-webkit-overflow-scrolling:touch]"
              >
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      {block.columns.map((col) => (
                        <th
                          key={col}
                          className="px-4 py-3 font-heading font-semibold text-foreground"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr
                        key={r}
                        className="border-b border-border/60 last:border-0"
                      >
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={
                              c === 0
                                ? "px-4 py-3 font-medium text-foreground/80"
                                : "px-4 py-3 text-foreground/70"
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
