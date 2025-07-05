import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="max-w-7xl mx-auto p-6 rounded-2xl shadow-md my-10 sm:my-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Boi Bondhu Library?</AccordionTrigger>
          <AccordionContent>
            Boi Bondhu Library is a friendly and minimal library management system
            designed to make borrowing, managing, and exploring books effortless.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What is the mission of this system?</AccordionTrigger>
          <AccordionContent>
            Our mission is to help readers and book lovers discover new titles,
            manage their collections, and borrow books with ease.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Which technologies are used?</AccordionTrigger>
          <AccordionContent>
            React, Redux Toolkit Query, TypeScript, Express.js, and MongoDB are used to build this system.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How can I borrow books?</AccordionTrigger>
          <AccordionContent>
            Simply go to the book list, click “Borrow” on your chosen book, fill out quantity and due date, and you’re done!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
