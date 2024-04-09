import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { CardContent, Card } from "@/components/ui/card";

const faqs = [
  {
    title: "How do you ensure the cleaning products are safe for my baby?",
    content:
      "All cleaning products we use are eco-friendly and certified to be safe for use around babies, ensuring no harmful residues are left behind.",
  },
  {
    title: "What types of repairs can you handle?",
    content:
      "Our expert technicians can handle a wide range of repairs, from fixing wheels and handles to replacing torn fabrics on strollers and car seats.",
  },
  {
    title: "Can I rent baby gear for a short trip?",
    content:
      "Absolutely! Our rental service offers a variety of baby gear for short trips or long vacations. All items are sanitized and checked for safety.",
  },
  {
    title: "How often should baby gear be cleaned or inspected?",
    content:
      "We recommend a thorough cleaning every 3-6 months, depending on usage, and a safety inspection at least once a year.",
  },
  {
    title: "What should I do if my rented baby gear gets damaged?",
    content:
      "Please contact us immediately. We offer quick repair services for normal wear and tear and can discuss any concerns you have.",
  },
  {
    title:
      "Is it necessary to book in advance for gear cleaning or repair services?",
    content:
      "While walk-ins are welcome, we recommend booking in advance to ensure timely service, especially during busy seasons. This helps us allocate the right resources to meet your needs promptly.",
  },
  {
    title: "How do I prepare my baby gear for cleaning or repair services?",
    content:
      "Please remove any personal items and give it a quick pre-clean if possible. For repairs, a brief description of the issue or any specific concerns you have allows us to provide more efficient service.",
  },
];

export default function FAQ() {
  return (
    <div className="flex justify-center items-center ">
      <Card className="shadow-lg w-[700px]">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <Accordion className="w-full mt-4" type="multiple">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:underline-none">
                  {faq.title}
                </AccordionTrigger>
                <AccordionContent>{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
