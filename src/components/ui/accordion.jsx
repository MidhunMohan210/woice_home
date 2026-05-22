"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

const AccordionItem = React.forwardRef(function AccordionItem(
  { className, ...props },
  ref
) {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      data-slot="accordion-item"
      className={cn("border-b border-white/10", className)}
      {...props}
    />
  );
});

const AccordionTrigger = React.forwardRef(function AccordionTrigger(
  { className, children, ...props },
  ref
) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-5 text-left text-sm font-medium text-white transition-all outline-none hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-sky-400/40 sm:text-base",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <ChevronDown className="size-4 shrink-0 text-slate-400 transition-transform duration-200 data-[panel-open]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

const AccordionContent = React.forwardRef(function AccordionContent(
  { className, children, ...props },
  ref
) {
  return (
    <AccordionPrimitive.Panel
      ref={ref}
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm text-slate-300 transition-all duration-200 data-[ending-style]:h-0 data-[starting-style]:h-0",
        className
      )}
      {...props}
    >
      <div className="pb-5 leading-7">{children}</div>
    </AccordionPrimitive.Panel>
  );
});

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
