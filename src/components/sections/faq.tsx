import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export function FaqList({ className }: { className?: string }) {
  return (
    <Accordion.Root type="single" collapsible className={className}>
      {faqs.map((item) => (
        <Accordion.Item
          key={item.q}
          value={item.q}
          className="border-b border-line py-1 first:border-t"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold tracking-[-0.03em] text-navy">
              {item.q}
              <Plus className="size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
            <p className="pb-5 pr-8 text-[0.95rem] leading-relaxed text-muted">{item.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
