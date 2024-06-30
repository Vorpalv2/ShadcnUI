import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

function AccordionComponent() {
  return (
    <Accordion type="single" collapsible>
      <p className="py-10">Some FAQs</p>
      <AccordionItem value="item-1">
        <AccordionTrigger>What does this website do?</AccordionTrigger>
        <AccordionContent>
          Honestly, even I am not sure yet. I built it just to test ShadcnUI and
          GSAP
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What&apos;s Next?</AccordionTrigger>
        <AccordionContent>Gonna try to finish it</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What about the Authentication?</AccordionTrigger>
        <AccordionContent>
          Probably going to be using Clerk or NextAuth.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionComponent;
