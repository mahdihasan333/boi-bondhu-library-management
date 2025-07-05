import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl pt-5 sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            What is Boi Bondhu Library?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Boi Bondhu Library is a friendly and minimal library management system
            designed to make borrowing, managing, and exploring books effortless.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            What is the mission of this system?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Our mission is to help readers and book lovers discover new titles,
            manage their collections, and borrow books with ease.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">
            Which technologies are used?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            React, Redux Toolkit Query, TypeScript, Express.js, and MongoDB are used to build this system.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">
            How can I borrow books?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Simply go to the book list, click “Borrow” on your chosen book, fill out quantity and due date, and you’re done!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
