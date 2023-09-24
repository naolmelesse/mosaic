// components/FAQ.js
import  { useState } from 'react';
import { FAQContainer, FAQItem, Question, Answer } from '@/styles/FAQ'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: 'What is MOSAIC?',
      answer:
        'MOSAIC is an online platform dedicated to art enthusiasts and creators. We provide a space where artists can showcase their work, and art lovers can discover, appreciate, and even purchase beautiful artworks.',
    },
    {
      question: 'How can I explore artworks on MOSAIC?',
      answer:
        'Exploring artworks on MOSAIC is easy! Simply browse our gallery, where you\'ll find a diverse range of art pieces. You can filter artworks by category, artist, or style to discover pieces that resonate with you.',
    },
    {
      question: 'Can I purchase artworks on MOSAIC?',
      answer:
        'Absolutely! MOSAIC offers a secure and convenient way to purchase artworks. Just click on the artwork you love, and you\'ll find options to buy it. We support various payment methods for your convenience.',
    },
    {
      question: 'How can I become an artist on MOSAIC?',
      answer:
        'If you\'re an artist looking to showcase your work on MOSAIC, we welcome you to join our community! Visit our "Artist Registration" page and follow the simple steps to become a MOSAIC artist.',
    },
  ];

  return (
    <FAQContainer>
      <h2 align="center">Frequently Asked Questions</h2>
      <br /><br />
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => handleAccordionClick(index)}>
            {faq.question}
          </Question>
          <Answer open={activeIndex === index}>{faq.answer}</Answer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
